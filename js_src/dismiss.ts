export default class Dismiss {
    private readonly refersToElement: HTMLElement;
    private readonly doesSoftDismiss: boolean;

    public static softDismissDurationinMilliseconds: number = 250; // ms

    constructor(public readonly element: HTMLElement) {
        this.refersToElement = document.querySelector(element.getAttribute("data-dismiss"));

        if (this.refersToElement == null) {
            throw "Missing target for dismiss: " + element.getAttribute("data-dismiss");
        }

        this.doesSoftDismiss = element.hasAttribute("data-dismiss-soft");
        
        element.addEventListener("click", (e) => { this.dismiss(); e.preventDefault(); });
    }

    private dismiss() {
        // Remove immediately, if no support for animate
        if (!this.doesSoftDismiss || !this.refersToElement.animate) {
            this.refersToElement.remove();   
        } else {
            this.refersToElement.animate([
                { opacity: 1.0 },
                { opacity: 0 }
            ], {
                duration: Dismiss.softDismissDurationinMilliseconds
            });
            setTimeout(() => {
                this.refersToElement.remove();
            }, Dismiss.softDismissDurationinMilliseconds)
        }
    }
    
    static find(query: string) {
        const elements = document.querySelectorAll(query);
        let dismisses = [];
        for (let i = 0; i < elements.length; i++) {
            dismisses.push(new Dismiss(elements[i] as HTMLElement));
        }
        return dismisses;
    }
};
