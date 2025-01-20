const hamburger=document.querySelector(".hamburger");
const navMenu=document.querySelector(".nav-menu");
const body=document.body
const navButton = document.querySelector(".getStartedButton")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navButton.classList.toggle("active")
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







// let cart = [];

// // Handle Add to Cart button clicks
// document.querySelectorAll('.addcart').forEach(button => {
//   button.addEventListener('click', function () {
//     const productElement = this.closest('.item');
//     const productId = productElement.getAttribute('data-product-id');
//     const productName = productElement.querySelector('h2').textContent;
//     const productPrice = parseFloat(productElement.querySelector('.price').textContent.replace('$', ''));

//     // Check if product is already in the cart
//     let productInCart = cart.find(item => item.id === productId);

//     if (productInCart) {
//       // Increase quantity if the product is already in the cart
//       productInCart.quantity++;
//     } else {
//       // Add new product to the cart
//       cart.push({ id: productId, name: productName, price: productPrice, quantity: 1 });
//     }

//     updateCart();
//   });
// });

// // Update the cart display
// function updateCart() {
//   const cartItemsContainer = document.getElementById('cart-items');
//   const totalPriceElement = document.getElementById('total-price');
//   const checkoutButton = document.getElementById('checkout');
//   let totalPrice = 0;
  
//   // Clear previous cart items
//   cartItemsContainer.innerHTML = '';

//   cart.forEach(item => {
//     const itemElement = document.createElement('div');
//     itemElement.classList.add('cart-item');
//     itemElement.innerHTML = `
//       <p>${item.name} - $${item.price} x ${item.quantity}</p>
//       <button class="remove" data-product-id="${item.id}">Remove</button>
//     `;
//     cartItemsContainer.appendChild(itemElement);

//     totalPrice += item.price * item.quantity;
//   });

//   // Update total price
//   totalPriceElement.textContent = ($`{totalPrice}`);

//   // Enable/disable checkout button based on cart contents
//   checkoutButton.disabled = cart.length === 0;

//   // Attach event listeners for remove buttons
//   document.querySelectorAll('.remove').forEach(button => {
//     button.addEventListener('click', function () {
//       const productId = this.getAttribute('data-product-id');
//       cart = cart.filter(item => item.id !== productId);
//       updateCart();
//     });
//   });
// }





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

