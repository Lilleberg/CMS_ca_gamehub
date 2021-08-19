const container = document.querySelector(".prod-container");

async function getAllProducts(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();

    for (let i = 0; i < products.length; i++) {
      const game = products[i];
      let id = game.id;

      container.innerHTML +=
        `<div class="product">
          <a href="product.html?id=${id}"><img src="${game.images[0].src}" class="img-product"></a>
          <div class="sub-content">
            <a href="product.html?id=${id}">${game.name}</a>
            <p class="price">${game.price_html}</p>
            <button class="button add-to-cart" data-game="${game.name}">BUY</button>
          </div>
        </div>`;
    }

  } catch (error) {
    console.log("ERROR: " + error);
    container.innerHTML = errorMessage();
  }
}

getAllProducts("https://gamehub-maria.digital/wp-json/wc/store/products");