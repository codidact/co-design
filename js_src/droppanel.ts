export default class DropPanel {
    private readonly refersToElement: HTMLElement;
    private readonly elementActiveClass: string;
    private readonly forcedDirection: string;
    private readonly panelTriggerNode: HTMLElement;

    public static offsetInPixel: number = 2;

    constructor(public readonly element: HTMLElement) {
        this.panelTriggerNode = element;
        this.refersToElement = document.querySelector(element.getAttribute("data-drop"));

        if (this.refersToElement == null) {
            throw "Missing target for DropPanel: " + element.getAttribute("data-drop");
        }

        this.elementActiveClass = element.hasAttribute("data-drop-self-class-toggle") ? element.getAttribute("data-drop-self-class-toggle") : null;
        this.forcedDirection = element.hasAttribute("data-drop-force-dir") ? element.getAttribute("data-drop-force-dir") : null;
        
        this.closePanelOnClickOutside();
        element.addEventListener("click", (e) => { this.toggleDropPanel(); e.preventDefault(); });
    }

    private toggleDropPanel() {
        this.refersToElement.classList.toggle("is-active");

        if (this.elementActiveClass) {
            this.element.classList.toggle(this.elementActiveClass);
        }

        if (this.refersToElement.classList.contains("is-active")) {
            // Reset all properties to prevent unexpected heights/widths
            this.refersToElement.style.top     = null;
            this.refersToElement.style.bottom  = null;
            this.refersToElement.style.left    = null;
            this.refersToElement.style.right = null;
            
            // Position header slide appropriately relative to
            // trigger.
            // If the item is more on the left: left-align, if
            // it is more on the right: right-align.
            // Same for top vs bottom
            const rect = this.element.getBoundingClientRect();

            // check, whether the trigger is more on the left or on the right
            const isRight: boolean = (rect.left + rect.width / 2) > document.body.clientWidth / 2;

            const refersToElementWidth = this.refersToElement.getBoundingClientRect().width;
            const refersToElementHeight = this.refersToElement.getBoundingClientRect().width;
            let offset: number = 0;
            if (isRight) {
                this.refersToElement.style.right = (document.body.clientWidth - rect.right) + "px";
            } else {
                this.refersToElement.style.left = (rect.left) + "px";
            }
            if (document.body.clientWidth < (refersToElementWidth + offset)) {
                this.refersToElement.style.left = "0px";
                this.refersToElement.style.right = "0px";
                this.refersToElement.style.maxWidth = "100%";
            }

            let isTop: boolean;
            if (this.forcedDirection == "up") {
                isTop = false;
            } else if (this.forcedDirection == "down") {
                isTop = true;
            } else {
                // check, whether the trigger is more on the top or on the bottom
                isTop = (rect.top + rect.height / 2) <= (window.innerHeight) / 2;
            }

            if (isTop) {
                this.refersToElement.style.top = (rect.bottom + window.scrollY + DropPanel.offsetInPixel) + "px";
            } else {
                this.refersToElement.style.bottom = (window.innerHeight - window.scrollY - rect.top + DropPanel.offsetInPixel) + "px";
            }
        }
    }

    private closePanelOnClickOutside() {
        const dropPanelSelector = this.panelTriggerNode.getAttribute("data-drop");
        document.addEventListener("click", (e) => {
            const target = e.target as HTMLElement;
            const parentDropdown = target.closest(dropPanelSelector);
            if(parentDropdown !== this.refersToElement && this.panelTriggerNode !== target) {
                this.closeDropPanel();
                e.preventDefault();
            }
        });
    }

    private closeDropPanel() {
        this.refersToElement.classList.remove("is-active");
        if (this.elementActiveClass) {
            this.element.classList.remove(this.elementActiveClass);
        }
    }
    
    static find(query: string) {
        const elements = document.querySelectorAll(query);
        let DropPanels = [];
        for (let i = 0; i < elements.length; i++) {
            DropPanels.push(new DropPanel(elements[i] as HTMLElement));
        }
        return DropPanels;
    }
};
