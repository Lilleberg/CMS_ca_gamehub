const cartIcon = document.querySelector("#cart-icon");
const cartContainer = document.querySelector(".cart-container");
const addToCartButton = document.querySelectorAll(".add-to-cart");
const cart = document.querySelector(".cart");

let singleGameObj = {};
let gameArr = [];

cartIcon.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}

addToCartButton.forEach(function (button) {
  button.onclick = function (event) {

    cartContainer.style.display = "block";

    setTimeout(function () {
      cartContainer.style.display = "none";
    }, 5000);

    const gameName = event.target.dataset.game;
    const gameCost = event.target.dataset.cost;

    singleGameObj = {
      name: gameName,
      price: gameCost,
    };

    gameArr.push(singleGameObj);

    let total = 0;
    cart.innerHTML = "";
    const totalSum = document.querySelector(".total-sum");

    for (let i = 0; i < gameArr.length; i++) {

      let price = parseInt(gameArr[i].price);
      total += price;

      cart.innerHTML +=
        `<div class="cart-item">
        <div><img src="../images/cod.jpg" alt="CoD: Black Ops product image" style="max-width: 80px";></div>
          <div class="cart-name-price">
             <p class="game-in-cart-name">${gameArr[i].name}</p>
             <p class="game-in-cart-price">${gameArr[i].price},-
          </div>
       </div>`;
      totalSum.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;
    }

    localStorage.setItem("cart", JSON.stringify(gameArr));
  }
});

if (gameArr.length === 0) {
  cart.innerHTML = "Your cart is empty";
  cart.style.fontStyle = "italic";
}