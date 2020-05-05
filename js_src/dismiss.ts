export default class Dismiss {
    private refersToElement;
    private doesSoftDismiss;

    public static softDismissDuration = 250; // ms

    constructor(public element) {
        this.refersToElement = document.querySelector(element.getAttribute("data-dismiss"));

        this.doesSoftDismiss = element.hasAttribute("data-dismiss-soft");
        
        element.addEventListener("click", () => { this.dismiss() });
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
                duration: Dismiss.softDismissDuration
            });
            setTimeout(() => {
                this.refersToElement.remove();
            }, Dismiss.softDismissDuration)
        }
    }
    
    static find(query) {
        const elements = document.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new Dismiss(elements[i]));
        }
        return toggles;
    }
};