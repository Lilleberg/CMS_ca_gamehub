const productContainer = document.querySelector(".main-content");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

if (!id) {
  location.href = "index.html";
}

const url = "https://gamehub-maria.digital/wp-json/wc/store/products" + id;

async function getProduct() {

  try {
    const response = await fetch(url);
    const results = await response.json();
    console.log(results);

    document.title = `Game Hub | ${results.name}`;
    productContainer.innerHTML +=
      `<div class="page-title">
        <h1>${results.name}</h1>
        <p>${results.category}<p>
      </div>
      <div class="game-info>">
        <img src="#" alt="Product image of ${results.name}">
        <h2>Information</h2>
        <p>${results.userDescription}</p>
      </div>
      <div class="payment-info">
        <p class="price">${results.price}</p>
        <button class="button add-to-cart" data-game="CoD: Black Ops" data-cost="150">Add to cart</button>
        <div>
          <p>Payment methods</p>
          <p>Credit card</p>
          <p>Debit card</p>
          <p>Vipps</p>
        </div>
      </div>
      <div class="about-seller">
        <div>
          <h3>About seller</h3>
          <p>${results.seller}</p>
        </div>
        <div class="member-since">
          <p>Member since:</p>
          <p>09.07.2017</p>
        </div>
        <div>
          <p class="rating">Rating</p>
          <div class="rating star">
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star"></i></p>
            <p><i class="fas fa-star-half-alt"></i></p>
          </div>
        </div>
        <div class="message">
          <p><i class="fas fa-comment-alt"></i></p>
          <p>Message seller</p>
        </div>
      </div>`;
  } catch (error) {
    console.log("ERROR:" + error);
    mainSection.innerHTML = errorMessage();
  }
}