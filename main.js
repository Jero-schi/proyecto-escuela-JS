const navEmail = document.querySelector('.navbar-email'); // email del nav
const desktopMenu = document.querySelector('.desktop-menu'); // menu desplegable de escritorio
const mobileMenu =  document.querySelector('.mobile-menu') // menu de mobile
const burgericon = document.querySelector('.menu') // icono menu en mobile
const carritoIcon = document.querySelector('.carrito') // icono carrito del nav
const carrito = document.querySelector('.product-detail') // carrito desplegable
const cardsContainer = document.querySelector('.cards-container') // contenedor de cartas
const productDetail = document.querySelector('.product-detail-info') // detalles del producto
const iconClose = document.querySelector('#icon-close') // icono close de detalles del producto
const pPriceDetail = document.querySelector('#product-price-detail')
const pNameDetail = document.querySelector('#product-name-detail')



console.log(pNameDetail, pPriceDetail);
// creando lista de productos
const productArray = [];
productArray.push({ // bike
    name: 'Bike',
    price: 120,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productArray.push({ // mouse
    name: 'Mouse',
    price: 100,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})
productArray.push({ // monitor
    name: 'Monitor',
    price: 200,
    img: 'https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940'
})

// evento click al email del nav
navEmail.addEventListener('click', () => {
    carrito.classList.add('inactive')
    productDetail.classList.add('inactive')
    desktopMenu.classList.toggle('inactive')
})

// evento click al icono de menu en mobile
burgericon.addEventListener('click', () => {
    carrito.classList.add('inactive')
    productDetail.classList.add('inactive')
    mobileMenu.classList.toggle('inactive')
})

// evento click al carrito
carritoIcon.addEventListener('click', () => {
    desktopMenu.classList.add('inactive')
    mobileMenu.classList.add('inactive')
    productDetail.classList.add('inactive')
    carrito.classList.toggle('inactive')
})

iconClose.addEventListener('click', ()=>{
    productDetail.classList.add('inactive')
})

function renderProducts(arr) {
    for (product of arr) {        
        const productsCard = document.createElement('div'); // div carta del producto
        productsCard.classList.add('products-card')
        productsCard.addEventListener('click', () => {
            desktopMenu.classList.add('inactive')
            mobileMenu.classList.add('inactive')
            carrito.classList.add('inactive')
            productDetail.classList.remove('inactive')
        })
         
        const imgProduct = document.createElement('img'); // imagen del producto
        imgProduct.setAttribute('src', product.img); 
        
        const productsInfo = document.createElement('div'); // div info del producto
        productsInfo.classList.add('products-info')
        
        const divDescriptionProduct = document.createElement('div') // div contenedor del precio y nombre del producto
        
        const pPrice = document.createElement('p') // parrafo con el precio
        pPrice.innerText = '$' + product.price
        const pNombre = document.createElement('p') // parrafo con el nombre
        pNombre.innerText = product.name
        
        const productFigure = document.createElement('figure'); // figure del addToCart
        
        const añadirCarrito = document.createElement('img'); // icon addToCart
        añadirCarrito.setAttribute('src', "./assets/icons/bt_add_to_cart.svg")
        
        cardsContainer.append(productsCard) // añadiendo la carta del producto a su contenedor
        productsCard.append(imgProduct, productsInfo) //añadiendo la img del producto y su info
        productsInfo.append(divDescriptionProduct, productFigure) // añadiendo div con precio y nombre + figure
        divDescriptionProduct.append(pPrice, pNombre) // añadiendo precio y nombre a su div padre
        productFigure.append(añadirCarrito) // añadiendo icono carrito al figure
    }
}

renderProducts(productArray);


