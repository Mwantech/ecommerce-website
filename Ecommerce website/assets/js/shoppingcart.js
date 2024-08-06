document.addEventListener('DOMContentLoaded', () => {
  updateCartCounter();
  loadCartItems();
});

function addToCart(productId, productName, productPrice) {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if the product already exists in the cart
  let existingProduct = cart.find(item => item.id === productId);
  if (existingProduct) {
    alert('This product is already in your cart.');
    return;
  }

  cart.push({ id: productId, name: productName, price: productPrice });
  localStorage.setItem('cart', JSON.stringify(cart));
  updateCartCounter();
}

function updateCartCounter() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  document.getElementById('cart-counter').innerText = cart.length;
}

function showCart() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  if (cart.length === 0) {
    cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
  } else {
    cart.forEach(item => {
      let itemElement = document.createElement('div');
      itemElement.className = 'cart-item';
      itemElement.innerHTML = `
        <p>${item.name} - $${item.price}</p>
      `;
      // Add click event to redirect to product page
      itemElement.onclick = () => {
        window.location.href = `/product/${item.id}`;
      };
      cartItemsContainer.appendChild(itemElement);
    });
  }
  document.getElementById('cart-modal').style.display = 'block';
}

function closeCart() {
  document.getElementById('cart-modal').style.display = 'none';
}

function loadCartItems() {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  let cartItemsContainer = document.getElementById('cart-items');
  cartItemsContainer.innerHTML = '';

  cart.forEach(item => {
    let itemElement = document.createElement('div');
    itemElement.className = 'cart-item';
    itemElement.innerHTML = `
      <p>${item.name} - $${item.price}</p>
    `;
    // Add click event to redirect to product page
    itemElement.onclick = () => {
      window.location.href = `/product/${item.id}`;
    };
    cartItemsContainer.appendChild(itemElement);
  });
}

function clearCart() {
  localStorage.removeItem('cart');
  updateCartCounter();
  loadCartItems();
}
