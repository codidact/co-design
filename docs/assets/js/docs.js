/* Modals */
const modalTriggers = document.querySelectorAll("[data-trigger-modal]");

for (const i = 0; i < modalTriggers.length; i++) {
  modalTrigger = modalTriggers[i];

  modalTrigger.addEventListener("click", function (e) {
    modal = document.querySelector(this.getAttribute("data-trigger-modal"));

    // Set appropriate on-screen position for modals,
    // which do not have .is-with-backdrop, and are
    // therefore position absolute not fixed.
    if(!modal.classList.contains("is-with-backdrop")) {
      modal.style.top = document.scrollingElement.scrollTop + "px";
    }

    modal.classList.toggle("is-active");

    // Prevent navigation
    e.preventDefault();
  });
}
