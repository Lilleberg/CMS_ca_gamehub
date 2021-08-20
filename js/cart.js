const cartIcon = document.querySelector("#cart-icon");
const cartContainer = document.querySelector(".cart-container");
const addToCartButton = document.querySelectorAll(".add-to-cart");
const cart = document.querySelector(".cart");


console.log(addToCartButton);

let productsCart = [];
let gameObj = {};

async function getProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();


    for (let i = 0; i < products.length; i++) {
      let game = products[i];

      gameObj = {
        name: game.name,
        price: game.prices.price,
        image: game.images[0].src,
      };

      productsCart.push(gameObj);
      let id = game.id;
    }
  } catch (error) {
    console.log("ERROR ", error);
  }
}
console.log(productsCart);

cartIcon.onclick = function () {
  if (cartContainer.style.display === "block") {
    cartContainer.style.display = "none";
  } else {
    cartContainer.style.display = "block";
  }
}

for (let i = 0; i < addToCartButton.length; i++) {
  addToCartButton[i].onclick = function () {
    console.log("Clicked");
  }
}

/*addToCartButton.forEach(function (button) {
  button.onclick = function (event) {
    console.log("click");
  }
});

/*addToCartButton.forEach(function (button) {
  button.onclick = function (event) {

    console.log("click");

    cartContainer.style.display = "block";

    setTimeout(function () {
      cartContainer.style.display = "block";
    }, 5000);

    let total = 0;
    cart.innerHTML = "";
    const sumTotal = document.querySelector(".total-sum");

    for (let i = 0; i < productsCart; i++) {
      let price = parseInt(productArr[i].prices.price);
      let product = productArr[i];
      total += price;
      console.log("clicked" + product);
      cart.innerHTML +=
        `<div class="cart-item">
        <div><img src="../images/cod.jpg" alt="CoD: Black Ops product image" style="max-width:70px";></div>
        <div class="cart-name-price">
          <p class="game-in-cart-name">${product.name}</p>
          <p class="game-in-cart-price">${product.price_html},-
        </div>
      </div>`;
      totalSum.innerHTML = `<p class="total-price">Sum:</p><p>${total},-</p>`;
    }
    localStorage.setItem("cart", JSON.stringify(productsCart));
  }
});

if (productsCart.length === 0) {
  cart.innerHTML = "Your cart is empty";
  cart.style.fontStyle = "italic";
}*/

getProducts("https://gamehub-maria.digital/wp-json/wc/store/products");

/*let singleGameObj = {};
let gameArr = [];

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
}*/