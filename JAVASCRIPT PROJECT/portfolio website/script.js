// script.js

document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  console.log("Name:", name);
console.log("Email:", email);
console.log("Message:", message);

  if (name === "" || email === "" || message === "") {
    document.getElementById("formStatus").textContent = "Please fill out all fields.";
    document.getElementById("formStatus").style.color = "red";
    return;
  }

  document.getElementById("formStatus").textContent = `Thanks, ${name}! Your message has been sent.`;
  document.getElementById("formStatus").style.color = "green";

  // Reset the form
  this.reset();
});
