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
  const form = document.querySelector("form");
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
