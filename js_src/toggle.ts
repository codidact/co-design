const toggleProperties = {
    /* "display" is for toggling, whether an element is displayed or not */
    display: {
        getValue: (el, value) => el.style.display,
        toggle: (el, value, defaultValue) => {
            el.style.display = (el.style.display == "none") ? defaultValue : "none";
        }
    },

    /* "class" is for toggling, whether an element has a specified class or not */
    class: {
        getValue: (el, value) => { value.split(" ").map((i) => [i, el.classList.contains(i)]) },
        toggle: (el, value, defaultValue) => {
            value.split(" ").forEach((i) => el.classList.toggle(i));
        }
    }
};

export default class Toggle {
    private refersToElement;
    private refersToProperty;
    private refersToValue;
    private defaultValue;

    constructor(public element) {
        this.refersToElement = document.querySelector(element.getAttribute("data-toggle"));
        
        if (element.hasAttribute("data-toggle-property"))
            this.refersToProperty = element.getAttribute("data-toggle-property");
        else
            this.refersToProperty = "display";
        
        if (element.hasAttribute("data-toggle-value"))
            this.refersToValue = element.getAttribute("data-toggle-value");
        else
            this.refersToValue = "\\auto";
        
        this.defaultValue = this.getCurrentValue();

        element.addEventListener("click", () => { this.toggleValue() });
    }

    private getCurrentValue() {
        return toggleProperties[this.refersToProperty].getValue(this.refersToElement, this.refersToValue);
    }

    private toggleValue() {
        toggleProperties[this.refersToProperty].toggle(this.refersToElement, this.refersToValue, this.defaultValue);
    }
    
    static find(query) {
        const elements = document.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new Toggle(elements[i]));
        }
        return toggles;
    }
};