(() => {
  const refs = {
    openMenuBtn: document.querySelector(".js-open-menu"),
    closeMenuBtn: document.querySelector(".js-close-menu"),
    menu: document.querySelector(".js-menu-container"),
  };
  refs.openMenuBtn.addEventListener("click", toggleModal);
  refs.closeMenuBtn.addEventListener("click", toggleModal);
  function toggleModal() {
    refs.menu.classList.toggle("is-open");
  }
})();
