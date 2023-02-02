const burgerMenu = document.querySelector('.burger-menu');
const mobileMenu = document.querySelector('.menu-mobile');
const global = document.querySelector('.glogal-wrapper');
burgerMenu.addEventListener('click', showMobileMenu);
function showMobileMenu() {
    mobileMenu.classList.remove('hidden');
    global.classList.add('hidden');
}
const closeMenu = document.querySelector('.closing-cross');
closeMenu.addEventListener('click', closeMobileMenu);
function closeMobileMenu() {
    mobileMenu.classList.add('hidden');
    global.classList.remove('hidden');
}