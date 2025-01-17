const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const body=document.body
const navbar = document.querySelector("nav")
const navContainer = document.querySelector(".nav-container")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
navMenu.classList.toggle("active")
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", (e) =>{
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
}))
body.addEventListener("click", (e) =>{
    body.classList.remove("active")
})



window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
 
      navbar.style.borderRadius = "150px"
  } else {
    navbar.style.borderRadius = "0px"

  }
})
window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    navbar.style.marginTop="10px"
  } else 
navbar.style.marginTop = "0px"
})

window.addEventListener("scroll", () => {
if(window.scroll >0){
  navbar.style.maxWidth="1300px"
}  
})
window.addEventListener("scroll", () => {
  if (window.scrollY > 30) {
  navbar.style.transition="2s"
  } else {

navbar.style.transition="2s"
  }
})


// slide show
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
  setTimeout(showSlides, 5000); // Change image every 2 seconds
}










// // Define an array to store cart items
// let cart = [];

// // Get the add-to-cart buttons
// const addToCartButtons = document.querySelectorAll('.add-to-cart');
// const viewCartButton = document.getElementById('view-cart');

// // Define a function to add an item to the cart
// function addItemToCart(productName, price) {
//     // Create a new cart item object
//     const cartItem = {
//         name: productName,
//         price: price
//     };

//     // Add the cart item to the cart array
//     cart.push(cartItem);

//     // Store the cart in local storage
//     localStorage.setItem('cart', JSON.stringify(cart));
// }

// // Add event listeners to add-to-cart buttons
// addToCartButtons.forEach((button) => {
//     button.addEventListener('click', () => {
//         const productName = button.getAttribute('data-product');
//         const price = parseFloat(button.getAttribute('data-price'));
//         addItemToCart(productName, price);
//     });
// });

// // Add event listener to view cart button
// viewCartButton.addEventListener('click', () => {
//     window.location.href = 'cart.html';
// });

