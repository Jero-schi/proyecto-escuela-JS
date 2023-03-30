const navEmail = document.querySelector('.navbar-email');
const desktopMenu = document.querySelector('.desktop-menu');
const mobileMenu =  document.querySelector('.mobile-menu')
const burgericon = document.querySelector('.menu')
const carritoIcon = document.querySelector('.carrito')
const carrito = document.querySelector('.product-detail')

// evento click al email del nav
navEmail.addEventListener('click', () => {
    carrito.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
})

// evento click al icono de menu en mobile
burgericon.addEventListener('click', () => {
    carrito.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
})

// evento click al carrito
carritoIcon.addEventListener('click', () => {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    carrito.classList.toggle('inactive')
})

