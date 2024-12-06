// Add an event listener for the form submission
document.getElementById("contactForm").addEventListener("submit", function(event) {
  // Get form field values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Regular expression for validating email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Check for empty fields
  if (!name || !email || !message) {
      alert("All fields are required.");
      event.preventDefault(); // Prevent form submission
      return;
  }

  // Check email format
  if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      event.preventDefault(); // Prevent form submission
      return;
  }

  // Success message (Optional)
  alert("Form submitted successfully!");
});
