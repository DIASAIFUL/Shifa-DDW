document.addEventListener("DOMContentLoaded", function () {
  
  // Modal Functionality
var modal = document.getElementById("helloModal");
var closeBtn = document.querySelector(".close");
var okButton = document.getElementById("okButton");

if (modal) {
  modal.style.display = "block";

  if (closeBtn) {
    closeBtn.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  if (okButton) {
    okButton.addEventListener("click", function () {
      modal.style.display = "none";
    });
  }

  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
}

  //  Contact Form Submission
  const form = document.getElementById("contactForm");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thank you for contacting us! We will get back to you soon.");
      form.reset();
    });
  }

  //  "Add to Cart" Button Click (For Multiple Buttons)
  const addToCartButtons = document.querySelectorAll(".add-to-cart-btn");
  addToCartButtons.forEach((button) => {
    button.addEventListener("click", function () {
      alert("Item has been added to your cart!");
      button.innerText = "Already Added";
      button.disabled = true;
    });
  });

  //  Checkout
  const checkoutButton = document.querySelector(".Order-btn");
  if (checkoutButton) {
    checkoutButton.addEventListener("click", function (e) {
      e.preventDefault();
      const form = document.querySelector(".checkout-form");

      if (form && form.checkValidity()) {
        alert("Order placed successfully! Thank you for your purchase.");
        form.reset();
        checkoutButton.disabled = true;
        checkoutButton.textContent = "Order Completed";
      } else {
        alert("Please fill in all required fields.");
      }
    });
  }



  // Login Form Submission
  const loginbutton = document.getElementById("loginForm");
  if (loginbutton) {
    loginbutton.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Login successful! Welcome back!");
      loginbutton.reset();
    });
  }

    // Login Form Submission
    const signupbutton = document.getElementById("SignupForm");
    if (signupbutton) {
      signupbutton.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Sign Up successfully Complete! Log In Now..");
        signupbutton.reset();
      });
    }

// Product Search Function
const searchInput = document.getElementById("product-search");
const noResultsMessage = document.getElementById("no-results");

if (searchInput) {
  searchInput.addEventListener("input", searchProducts);
}

function searchProducts() {
  let input = searchInput.value.toLowerCase();
  let products = document.querySelectorAll(".w3-container p");
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

});




