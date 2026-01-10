const burgerButton = document.getElementById('burger-button');
const mobileMenu = document.getElementById('mobile-menu');
const burgerIcon = document.getElementById('burger-menu-icon');
burgerButton.addEventListener("click", () => {
  mobileMenu.classList.toggle("menu-opened")
  burgerIcon.classList.toggle("icon-opened")
})
