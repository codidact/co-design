m_triggers = document.querySelectorAll("[data-trigger-modal]");

for(var i=0; i < m_triggers.length; i++) {
  mt = m_triggers[i];

  mt.addEventListener("click", function(e) {
    modal = document.querySelector(this.getAttribute("data-trigger-modal"));

    modal.classList.toggle("is-active");

    e.preventDefault();
  })
}
