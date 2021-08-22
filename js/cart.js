const cart = document.querySelector(".cart");

async function getProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      const game = products[i];

      const containerUsed = document.querySelector(".used-games");
      const containerNew = document.querySelector(".new-releases");
      const cartIcon = document.querySelector("#cart-icon");
      const cartContainer = document.querySelector(".cart-container");

      if (game.tags[0].name === "used") {
        containerUsed.innerHTML += `
          <div class="game">
            <a href="product.html?id=${game.id}"><img src="${game.images[0].src}" class="img-product"</a>
            <div class="sub-content">
              <a href="product.html?id=${game.id}">${game.name}</a>
              <p class="price">${game.price_html}</p>
              <button class="button add-to-cart" data-game="${game.name}" data-price="${game.prices.price}" data-image="${game.images[0].src}">${game.add_to_cart.text}</button>
            </div>
          </div>`;
      }
      if (game.tags[0].name === "new") {
        containerNew.innerHTML +=
          `<div class="game">
          <a href="product.html?id=${game.id}"><img src="${game.images[0].src}" class="img-product"</a>
          <div class="sub-content">
            <a href="product.html?id=${game.id}">${game.name}</a>
            <p class="price">${game.price_html}</p>
            <button class="button add-to-cart" data-game="${game.name}" data-price="${game.prices.price}">Add to cart</button>
          </div>
        </div>`;
      }

      let productsInCart = [];
      let gameObject = {};

      cartIcon.onclick = function () {
        if (cartContainer.style.display === "block") {
          cartContainer.style.display = "none";
        } else {
          cartContainer.style.display = "block";
        }
      }

      if (productsInCart.length === 0) {
        cart.innerHTML = "Your cart is empty";
        cart.style.fontStyle = "italic";
      }

      const buttons = document.querySelectorAll(".add-to-cart");

      buttons.forEach(item => {
        item.addEventListener("click", () => {
          console.log("Hello");

          gameObject = {
            name: item.dataset.game,
            price: item.dataset.price,
            image: item.dataset.image,
          };

          productsInCart.push(gameObject);

          console.log(productsInCart);

          cartContainer.style.display = "block";

          setTimeout(function () {
            cartContainer.style.display = "none";
          }, 5000);

          let total = 0;
          cart.innerHTML = "";
          const sumTotal = document.querySelector(".total-sum");

          for (let j = 0; j < productsInCart; j++) {
            let price = parseInt(productsInCart[j].prices.price);
            let product = productArr[j];
            total += price;

            console.log("clicked" + product);

            cart.innerHTML +=
              `<div class="cart-item">
              <div><img src="${product.images[0].src}" alt="${product.name}" style="max-width: 80px";></div>
                <div class="cart-name-price">
                   <p class="game-in-cart-name">${product.name}</p>
                   <p class="game-in-cart-price">${product.price},-
                </div>
             </div>`;
            totalSum.innerHTML = `<p class="total-price">Sum:</p><p>${total}</p>`;
          }
          localStorage.setItem("cart", JSON.stringify(productsInCart));
        });
      });
    }
  } catch (error) {
    console.log("ERROR ", error);
  }
}

getProducts("https://gamehub-maria.digital/wp-json/wc/store/products");