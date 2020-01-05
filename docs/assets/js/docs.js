/* Modals */
const modalTriggers = document.querySelectorAll("[data-trigger-modal]");

for (let i = 0; i < modalTriggers.length; i++) {
  modalTriggers[i].addEventListener("click", function (e) {
    const modal = document.querySelector(this.getAttribute("data-trigger-modal"));

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
