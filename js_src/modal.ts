class Modal {
    public readonly isPositionedAbsolute: boolean;
    public readonly isDanger: boolean;

    constructor(public readonly element: HTMLElement ) {
        this.isPositionedAbsolute = this.element.classList.contains("is-with-backdrop");
        this.isDanger = this.element.classList.contains("is-danger");
    }

    public toggle() {
        if (!this.isPositionedAbsolute) {
            this.element.style.top = document.scrollingElement.scrollTop + "px";
        }

        this.element.classList.toggle("is-active");
    }

    static find(query: string) {
        const elements = document.querySelectorAll(query);
        let toggles = [];
        for (let i = 0; i < elements.length; i++) {
            toggles.push(new Modal(elements[i] as HTMLElement));
        }
        return toggles;
    }
};

class ModalToggle {
    private readonly modal: Modal;
    private readonly isPositionedAbsolute: boolean;

    constructor(public readonly element: HTMLElement) {
        this.modal = new Modal(document.querySelector(element.getAttribute("data-modal")));
        
        element.addEventListener("click", (e) => { this.modal.toggle(); e.preventDefault(); });
    }
    
    static find(query: string) {
        const elements = document.querySelectorAll(query);
        let modaltoggles = [];
        for (let i = 0; i < elements.length; i++) {
            modaltoggles.push(new ModalToggle(elements[i] as HTMLElement));
        }
        return modaltoggles;
    }
};

export {
    ModalToggle,
    Modal
};
