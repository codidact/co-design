// --------------------------
//  Documentation JavaScript
// --------------------------
// --- not for production ---
// --------------------------

hs_triggers = document.querySelectorAll("[data-trigger-header-slide]");

for(var i=0; i < hs_triggers.length; i++) {
  hs_triggers[i].addEventListener("click", function(e) {
    hs = document.querySelector(this.getAttribute("data-trigger-header-slide"));

    hs.classList.toggle("is-active");
    this.classList.toggle("is-active");

    rect = this.getBoundingClientRect();

    hs.style.top = (rect.top + rect.height) + "px";
    hs.style.right = (document.body.clientWidth - rect.right) + "px";

    e.preventDefault();
  });
}
