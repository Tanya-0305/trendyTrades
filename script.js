document.addEventListener('DOMContentLoaded', function() {
  console.log('Website Loaded');
  
  // Example: Alert when adding a product to the cart
  let addToCartButtons = document.querySelectorAll('.add-to-cart');
  addToCartButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          alert('Product added to cart!');
      });
  });
});
function openDetails(productName, productPrice) {
  // For now, just alert the details. You can later integrate with a product details page.
  alert(`Product: ${productName}\nPrice: ₹${productPrice}`);
  // Example: Redirect to a detailed page
  // window.location.href = `details.html?name=${encodeURIComponent(productName)}&price=${productPrice}`;
}

// JS script to add dynamic behavior, if necessary

// Example: Smooth scroll to section
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
document.getElementById("sendWhatsApp").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var whatsapp = document.getElementById("whatsapp").value;
  var message = document.getElementById("message").value;

  var whatsappMessage = `Name: ${name}\nEmail: ${email}\nWhatsApp: ${whatsapp}\nMessage: ${message}`;
  
  var encodedMessage = encodeURIComponent(whatsappMessage);
  var whatsappUrl = `https://api.whatsapp.com/send?phone=${whatsapp}&text=${encodedMessage}`;

  window.open(whatsappUrl, "_blank");
});