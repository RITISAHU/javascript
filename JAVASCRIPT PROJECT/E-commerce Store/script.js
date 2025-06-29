let cart = [];
let loggedIn = false;

function addToCart(name, price) {
  if (!loggedIn) {
    alert("Please login to add items to cart.");
    return;
  }
  cart.push({ name, price });
  renderCart();
}

function renderCart() {
  const cartItems = document.getElementById("cartItems");
  const totalPrice = document.getElementById("totalPrice");
  cartItems.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(li);
    total += item.price;
  });
  totalPrice.textContent = total;
}

function checkout() {
  if (!loggedIn) {
    alert("Login required to checkout.");
    return;
  }
  if (cart.length === 0) {
    alert("Cart is empty.");
    return;
  }
  alert("Fake payment processed. Thank you for your purchase!");
  cart = [];
  renderCart();
}

document.getElementById("loginBtn").addEventListener("click", () => {
  loggedIn = true;
  document.getElementById("userStatus").textContent = "Logged in";
  document.getElementById("loginBtn").style.display = "none";
  document.getElementById("logoutBtn").style.display = "inline-block";
});

document.getElementById("logoutBtn").addEventListener("click", () => {
  loggedIn = false;
  cart = [];
  renderCart();
  document.getElementById("userStatus").textContent = "Not logged in";
  document.getElementById("loginBtn").style.display = "inline-block";
  document.getElementById("logoutBtn").style.display = "none";
});
