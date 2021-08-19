const container = document.querySelector(".products");

async function getSearchResults(url) {

  try {
    const response = await fetch(url);
    const products = await response.json();
    console.log(products);

    for (let i = 0; i < products.length; i++) {
      const game = products[i];
      let id = game.id;

      const categories = game.categories;

      for (let j = 0; j < categories.length; j++) {
        const category = categories[j];

        document.querySelector("h1").innerHTML = j + " results for 'action'";

        if (category.name === "Action") {
          console.log(j);

          container.innerHTML +=
            `<div class="product_item">
            <a href="product.html?id=${id}"><img src="${game.images[0].src}"></a>
            <div>
              <a href="product.html?id=${id}" class="prod_name">${game.name}</a>
              <div class="products_buy">
                <p class="price">${game.price_html}</p>
                <div><button class="button add-to-cart" data-game="${game.name}">buy</button></div>
              </div>
            </div>
          </div>`;
        }
      }
    }
  } catch (error) {
    console.log("ERROR: " + error);
    container.innerHTML = errorMessage();
  }
}

getSearchResults("https://gamehub-maria.digital/wp-json/wc/store/products");

/*
list = array.
document.querySelector(".sortButton").addEventListener("click", function() {
  list.sort((a,b) => a-b);
  container.innerHTML = list;
});

let peopleList = [
    {name: "Sally", age: 25},
    {name: "Bob", age: 19},
    {name: "Willis", age: 67},
    {name: "Georgina", age: 34}
];
const peopleDiv = document.querySelector('.people');

function createHTML(peopleList){
    peopleDiv.innerHTML = "";
    peopleList.forEach(function(person){
    peopleDiv.innerHTML += `<div><h3>${person.name}</h3><p>${person.age}</p></div>`;
})
}

createHTML(peopleList);

document.querySelector('.sort').addEventListener("click", function(){
    peopleList.sort((a,b) => (a.name > b.name) ? 1 : -1);
    createHTML(peopleList);
})
*/