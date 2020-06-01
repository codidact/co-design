// --------------------------
//  Documentation JavaScript
// --------------------------
// --- not for production ---
// --------------------------

/* Category header color change */
const catHeaderColorChanger = document.querySelector(".js-docs-change-color");

!catHeaderColorChanger || catHeaderColorChanger.addEventListener("change", function (e) {
  const catHeader = document.querySelector(".d-example .category-header");

  catHeader.classList.remove("is-turquoise", "is-green", "is-blue", "is-darkblue", "is-purple", "is-bluegray", "is-gray", "is-yellow", "is-orange", "is-pink", "is-red");

  catHeader.classList.add("is-" + this.value);
});