// --------------------------
//  Documentation JavaScript
// --------------------------
// --- not for production ---
// --------------------------

/* Header slides */
const headerSlideTriggers = document.querySelectorAll("[data-trigger-header-slide]");

for (let i = 0; i < headerSlideTriggers.length; i++) {
  headerSlideTriggers[i].addEventListener("click", function (e) {
    const headerSlide = document.querySelector(this.getAttribute("data-trigger-header-slide"));

    headerSlide.classList.toggle("is-active");
    this.classList.toggle("is-active");

    // Position header slide appropriately relative to
    // trigger.
    const rect = this.getBoundingClientRect();
    headerSlide.style.top = (rect.top + rect.height) + "px";
    headerSlide.style.right = (document.body.clientWidth - rect.right) + "px";

    // Prevent navigation
    e.preventDefault();
  });
}

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
