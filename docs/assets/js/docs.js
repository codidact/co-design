// --------------------------
//  Documentation JavaScript
// --------------------------
// --- not for production ---
// --------------------------

/* Header slides */
const headerSlideTriggers = document.querySelectorAll("[data-trigger-header-slide]");

for (const i = 0; i < headerSlideTriggers.length; i++) {
  headerSlideTriggers[i].addEventListener("click", function (e) {
    const headerSlide = document.querySelector(this.getAttribute("data-trigger-header-slide"));

    headerSlide.classList.toggle("is-active");
    this.classList.toggle("is-active");

    // Position header slide appropriately relative to
    // trigger.
    const rect = this.getBoundingClientRect();
    hs.style.top = (rect.top + rect.height) + "px";
    hs.style.right = (document.body.clientWidth - rect.right) + "px";

    // Prevent navigation
    e.preventDefault();
  });
}
