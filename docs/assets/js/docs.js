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


/* Category header color change */
const catHeaderColorChanger = document.querySelector(".js-docs-change-color");

!catHeaderColorChanger || catHeaderColorChanger.addEventListener("change", function (e) {
  const catHeader = document.querySelector(".d-example .category-header");

  catHeader.classList.remove("is-turquoise", "is-green", "is-blue", "is-darkblue", "is-purple", "is-bluegray", "is-gray", "is-yellow", "is-orange", "is-pink", "is-red");

  catHeader.classList.add("is-" + this.value);
});

/* ToC */
const tocTriggers = document.querySelectorAll("button.toc--header");

for (let i = 0; i < tocTriggers.length; i++) {
  tocTriggers[i].addEventListener("click", function (e) {
    this.parentNode.classList.toggle("is-active");
    e.preventDefault();
  });
}