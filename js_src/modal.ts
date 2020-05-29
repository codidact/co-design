class Modal {
    public readonly isPositionedAbsolute;
    public readonly isDanger;

    constructor(public element) {
        this.isPositionedAbsolute = this.element.classList.contains("is-with-backdrop");
        this.isDanger = this.element.classList.contains("is-danger");
    }

    private toggle() {
        if (!this.isPositionedAbsolute) {
            this.element.style.top = document.scrollingElement.scrollTop + "px";
        }

        this.element.classList.toggle("is-active");
    }

    static find(query) {
        const elements = document.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new Modal(elements[i]));
        }
        return toggles;
    }
};

class ModalToggle {
    private modal;
    private isPositionedAbsolute;

    constructor(public element) {
        this.modal = new Modal(document.querySelector(element.getAttribute("data-modal")));
        
        element.addEventListener("click", () => { this.modal.toggle() });
    }
    
    static find(query) {
        const elements = document.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new ModalToggle(elements[i]));
        }
        return toggles;
    }
};

export {
    ModalToggle,
    Modal
};