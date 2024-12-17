const menuToggle = document.querySelector('.menu-toggle');
const navBar = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  navBar.classList.toggle('active');
});