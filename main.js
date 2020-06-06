
const toggleBtn = document.querySelector('.toggle__button');
const navbar = document.querySelector('.navbar');
const navbarMenu = document.querySelector('.navbar__menu');

toggleBtn.addEventListener('click', () => {
    navbarMenu.classList.toggle('active');
    navbar.classList.toggle('active');
});