const containerUsed = document.querySelector(".used-games");
const containerNew = document.querySelector(".new-releases");
const mainSection = document.querySelector(".main-section");

//const url = "http://10.0.0.20/wordpress/wp-json/wc/store/products";

async function getProducts(url) {

  //try {
  const response = await fetch(url);
  const products = await response.json();
  console.log(products);

  for (let i = 0; i < products.length; i++) {
    const game = products[i];

    let id = i;

    if (game.tags[0].name === "used") {
      containerUsed.innerHTML +=
        `<div class="game">
          <a href="product.html?id="${id}"><img src="${game.images[0].src}" class="img-product"></a>
          <div class="sub-content">
            <a href="product.html?id="${id}">${game.name}</a>
            <p class="price">${game.price_html}</p>
            <button class="button add-to-cart" data-game="${game.name}">Add to cart</button>
          </div>
        </div>`;
    }

    console.log(game.id);

    if (game.tags[0].name === "new") {
      containerNew.innerHTML +=
        `<div class="game">
          <a href="product.html?id="${id}"><img src="${game.images[0].src}" class="img-product"</a>
          <div class="sub-content">
            <a href="product.html?id=${id}">${game.name}</a>
            <p class="price">${game.price_html}</p>
            <button class="button add-to-cart" data-game="${game.name}">Add to cart</button>
          </div>
        </div>`;
    }
  }
  /*} catch (error) {
    console.log("ERROR:" + error);
    mainSection.innerHTML = errorMessage();
  }*/
}

getProducts("https://10.0.0.20/wordpress/wp-json/wc/store/products");