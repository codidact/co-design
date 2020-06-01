export default class Header {
    constructor(public readonly element: HTMLElement) {
        HeaderSlideToggle.find(element, "[data-header-slide]");
    }
    
    static apply() {
        const elements = document.querySelectorAll(".header");
        let headers = [];
        for (let i = 0; i < elements.length; i++) {
            headers.push(new Header(elements[i] as HTMLElement));
        }
        return headers;
    }
};

export class HeaderSlideToggle {
    private readonly refersToElement: HTMLElement;

    constructor(public readonly element: HTMLElement) {
        this.refersToElement = document.querySelector(element.getAttribute("data-header-slide"));

        if (this.refersToElement == null) {
            throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
        }
        
        element.addEventListener("click", (e) => { this.toggle(); e.preventDefault(); });
    }

    private toggle() {
        this.refersToElement.classList.toggle("is-active");
        this.element.classList.toggle("is-active");

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

        // check, whether the trigger is more on the left or on the right
        const isRight: boolean = (rect.left + rect.width / 2) > document.body.clientWidth / 2;
        const refersToElementWidth = this.refersToElement.getBoundingClientRect().width;
        let offset: number = 0;
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
    
    static find(container: HTMLElement, query: string) {
        const elements = container.querySelectorAll(query);
        let headerslidetoggles = [];
        for (let i = 0; i < elements.length; i++) {
            headerslidetoggles.push(new HeaderSlideToggle(elements[i] as HTMLElement));
        }
        return headerslidetoggles;
    }
};
