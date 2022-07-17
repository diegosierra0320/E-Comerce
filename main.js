
const carritoCompras = document.querySelector("#carritoCompras");
const cartShop = document.querySelector("#cartShop");

carritoCompras.addEventListener("click", function (){
    cartShop.classList.toggle("show_cart");
});