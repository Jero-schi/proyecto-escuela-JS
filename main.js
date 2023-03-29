const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu =  document.querySelector('.mobile-menu')
const burgericon = document.querySelector('.menu')


navEmail.addEventListener('click', () => {
    desktopMenu.classList.toggle('inactive')
})

burgericon.addEventListener('click', () => {
    mobileMenu.classList.toggle('inactive')
})

