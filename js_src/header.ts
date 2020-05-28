export default class Header {
    private refersToElement;

    constructor(public element) {
        HeaderSlideToggle.find(element, "[data-header-slide]");
    }
    
    static apply() {
        const elements = document.querySelectorAll(".header");
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new Header(elements[i]));
        }
        return toggles;
    }
};

export class HeaderSlideToggle {
    private refersToElement;

    public static softDismissDuration = 250; // ms

    constructor(public element) {
        this.refersToElement = document.querySelector(element.getAttribute("data-header-slide"));
        
        element.addEventListener("click", (e) => { this.toggle(); e.preventDefault(); });
    }

    private toggle() {
        this.refersToElement.classList.toggle("is-active");
        this.element.classList.toggle("is-active");

        console.log(this.refersToElement)

        // Position header slide appropriately relative to
        // trigger.
        // If the item is more on the left: left-align, if
        // it is more on the right: right-align.
        const rect = this.element.getBoundingClientRect();
        this.refersToElement.style.top = (window.scrollY + rect.top + rect.height) + "px";

        // reset max width, left and right
        this.refersToElement.style.maxWidth = "";
        this.refersToElement.style.left = "";
        this.refersToElement.style.right = "";

        const isRight = (rect.left + rect.width / 2) > document.body.clientWidth / 2;
        // ^ check, whether the trigger is more on the left or on the right
        const refersToElementWidth = this.refersToElement.getBoundingClientRect().width;
        let offset = 0;
        if (isRight) {
            this.refersToElement.style.right = (document.body.clientWidth - rect.right) + "px";
            offset = document.body.clientWidth - rect.right;
        } else {
            this.refersToElement.style.left = (rect.left) + "px";
            offset = rect.left;
        }
        if (document.body.clientWidth < (refersToElementWidth + offset)) {
            this.refersToElement.style.left = "0px";
            this.refersToElement.style.right = "0px";
            this.refersToElement.style.maxWidth = "100%";
        }
    }
    
    static find(container, query) {
        const elements = container.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new HeaderSlideToggle(elements[i]));
        }
        return toggles;
    }
};