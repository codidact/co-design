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
            value.split(" ").forEach(
                (className) => el.classList.toggle(className)
            );
        }
    }
};

export default class Toggle {
    private readonly refersToElement: HTMLElement;
    private readonly refersToProperty: string;
    private readonly refersToValue: string;
    private readonly defaultValue: any;

    constructor(public readonly element: HTMLElement) {
        this.refersToElement = document.querySelector(element.getAttribute("data-toggle"));

        if (this.refersToElement == null) {
            throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
        }
        
        this.refersToProperty = element.getAttribute("data-toggle-property") || "display";
        this.refersToValue = element.getAttribute("data-toggle-value") || "\\auto";
        
        this.defaultValue = this.getCurrentValue();

        element.addEventListener("click", () => { this.toggleValue() });
    }

    private getCurrentValue(): any {
        return toggleProperties[this.refersToProperty].getValue(this.refersToElement, this.refersToValue);
    }

    private toggleValue() {
        toggleProperties[this.refersToProperty].toggle(this.refersToElement, this.refersToValue, this.defaultValue);
    }
    
    static find(query: string) {
        const elements = document.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new Toggle(elements[i] as HTMLElement));
        }
        return toggles;
    }
};
