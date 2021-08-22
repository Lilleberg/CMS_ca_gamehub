const cartItems = JSON.parse(localStorage.getItem("cart"));
const itemsContainer = document.querySelector(".checkout-games");
const totalSum = document.querySelector(".payment-total");

console.log(cartItems);

let priceItems = 0;

if (!cartItems) {
  itemsContainer.innerHTML = "Your cart is empty";
  itemsContainer.style.marginTop = "20px";
  itemsContainer.style.fontStyle = "italic";
  totalSum.style.display = "none";
}

cartItems.forEach(function (cartElement) {

  priceItems += parseInt(cartElement.price);
  console.log(cartElement);
  itemsContainer.innerHTML += `
    <div class="product">
      <img src="${cartElement.image}" alt="Product image of ${cartElement.name}">
    <div>
      <a href="product.html">${cartElement.name}</a>
      <p class="tags">Action, FPS, multiplayer, PS3</p>
    </div>
    <div class="price-remove">
      <p>${cartElement.price},-</p>
      <p><i class="fas fa-times-circle"></i></p>
    </div>
  </div>`;
});

let total = priceItems + 29;
totalSum.innerHTML += `
  <h2>Total sum</h2>
  <div class="price">
    <h3>Price</h3>
    <p>${priceItems},-</p>
  </div>
  <div class="delivery-cost">
    <h3>Delivery cost</h3>
    <p>29,-</p>
  </div>
  <div class="sum">
    <h3>Total Sum</h3>
    <p>${total},-</p>
  </div>
  <div class="pay-info">
    <h3>Payment info</h3>
    <p class="edit-pay-info"><i class="fas fa-pen"></i></p>
  </div>
  <div class="card-info">
    <p>Visa *****1234</p>
    <p>12/22</p>
  </div>
  <a href="checkout_success.html" class="button purchase">Purchase</a>`;