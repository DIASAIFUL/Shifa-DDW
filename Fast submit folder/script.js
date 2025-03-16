document.addEventListener("DOMContentLoaded", function () {
  // Hamburger menu toggle
  const hamburger = document.querySelector(".hamburger");
  const navLinks = document.querySelector(".nav-links");

  if (hamburger && navLinks) {
    hamburger.addEventListener("click", function () {
      navLinks.classList.toggle("active");
      hamburger.classList.toggle("active"); // Toggle icon change
    });
  }

  // Handle the form submission (contact form)
// Handle the form submission (contact form)
const form = document.getElementById("contactForm"); // Target the form by ID

if (form) {
  form.addEventListener("submit", function (e) {
    e.preventDefault();  // Prevent form submission (no page reload)

    // Show a confirmation message
    alert("Thank you for contacting us! We will get back to you soon.");

    form.reset(); // Reset the form
  });
}


  // Handle the 'Add to Cart' button click
  const addToCartButton = document.querySelector(".add-to-cart-btn");
  if (addToCartButton) {
    addToCartButton.addEventListener("click", function () {
      // Show a pop-up message
      alert("Item has been added to your cart!");

      // Change button text to "Already Added"
      addToCartButton.innerText = "Already Added";
      addToCartButton.disabled = true; // Disable the button after click
    });
  }

  // Handle the 'Place Order' button click (for checkout)
  const checkoutButton = document.querySelector(".Order-btn");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function (e) {
      e.preventDefault();  // Prevent default form submission

      // Check if the form is valid (all required fields filled)
      const form = document.querySelector(".checkout-form");
      if (form && form.checkValidity()) {
        // Show a success message
        alert("Order placed successfully! Thank you for your purchase.");

        // Reset the form after submission
        form.reset();

        // Disable the 'Place Order' button and change its text
        checkoutButton.disabled = true;
        checkoutButton.textContent = "Order Completed";
      } else {
        // If form is invalid, show a validation message
        alert("Please fill in all required fields.");
      }
    });
  }
});

//   // Handle the 'Place Order' button click
//   const checkoutButton = document.querySelector(".Order-btn");
//   if (checkoutButton) {
//     checkoutButton.addEventListener("click", function (e) {
//       // Prevent the default form submission (if it's within a form)
//       e.preventDefault();

//       // Show the success message
//       alert("Order placed successfully! Thank you for your purchase.");

//       // Optionally, disable the button after the order is placed
//       checkoutButton.disabled = true;
//       checkoutButton.textContent = "Order Completed"; // Change text to indicate completion
//     });
//   }
// });



// Product Search Function


function searchProducts() {
  let input = document.getElementById("product-search").value.toLowerCase();
  let products = document.querySelectorAll(".w3-container p");
  let noResultsMessage = document.getElementById("no-results"); 
  let hasResults = false;

  products.forEach((product) => {
      let productName = product.innerText.toLowerCase();
      let parentContainer = product.closest(".w3-container");

      if (productName.includes(input)) {
          parentContainer.style.display = "block";
          hasResults = true;
      } else {
          parentContainer.style.display = "none";
      }
  });

  // Show "No results found" message if no products match the search
  if (!hasResults) {
      noResultsMessage.style.display = "block";
  } else {
      noResultsMessage.style.display = "none";
  }
}






let currentIndex = 0;
const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.remove("active");
    dots[i].classList.remove("active");
  });

  slides[index].classList.add("active");
  dots[index].classList.add("active");
  currentIndex = index;
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

// Auto-slide every 5 seconds
setInterval(nextSlide, 5000);

// Manual control with dots
function setSlide(index) {
  showSlide(index);
}

// Show first slide
showSlide(currentIndex);

// slide show end 



// var modal = document.getElementById("helloModal");
// var closeBtn = document.getElementsByClassName("close")[0];
// var okButton = document.getElementById("okButton");

// // Show modal on page load
// window.onload = function() {
//   modal.style.display = "block";
//   setTimeout(function() {
//     modal.querySelector(".modal-content").style.opacity = "1";
//     modal.querySelector(".modal-content").style.transform = "translateY(0)";
//   }, 100);
// };

// // Close modal when the user clicks on the "x" button
// closeBtn.onclick = function() {
//   modal.style.display = "none";
// };

// okButton.onclick = function() {
//     modal.style.display = "none";
//   };





// Get the modal, close button, and "Okay" button
var modal = document.getElementById("helloModal");
var closeBtn = document.getElementsByClassName("close")[0];
var okButton = document.getElementById("okButton");

// Show the modal when the page loads
window.onload = function() {
  modal.style.display = "block";
};

// Close the modal when the user clicks on the "×" button
closeBtn.onclick = function() {
  modal.style.display = "none";
};

// Close the modal when the user clicks the "Okay" button
okButton.onclick = function() {
  modal.style.display = "none";
};

// Close the modal if the user clicks anywhere outside the modal content
window.onclick = function(event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

