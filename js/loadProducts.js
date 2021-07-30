let jsonProducts = '{"products": [{"id": 1, "name": "Lemon", "price": 7.6, "imgUrl": "./img/lemon.jpg"}, {"id": 2, "name": "Cauliflower", "price": 1.2, "imgUrl": "./img/cauliflower.jpg"},	{"id": 3, "name": "Corn", "price": 2.0, "imgUrl": "./img/corn.jpg"}, {"id": 4, "name": "Cucumber", "price": 4.5, "imgUrl": "./img/cucumber.jpg"}, {"id": 5, "name": "Kiwi", "price": 10.0, "imgUrl": "./img/kiwi.jpg"},	{"id": 6, "name": "Lime", "price": 9.6, "imgUrl": "./img/lime.jpg"}, {"id": 7, "name": "Peach", "price": 15.5, "imgUrl": "./img/peach.jpg"}, {"id": 8, "name": "Pumpkin", "price": 3.3, "imgUrl": "./img/pumpkin.jpg"}]}';
let productsObj = JSON.parse(jsonProducts); // {}
let productsArr = productsObj.products; // []

let products = '<h2>Most popular products</h2>';

for (let i = 0; i < productsArr.length; i++) {
    products += `<article id="${productsArr[i].id}">` +
                    `<img src="${productsArr[i].imgUrl}" alt="${productsArr[i].name}" class="jsProductImg"/>` +
                    `<h3>${productsArr[i].name}</h3>` +
                    `<p class="my-15">$${productsArr[i].price.toFixed(2)}</p>` +
                    `<button class="button button--wide js-add-to-cart">Add to cart</button>` +
        `</article>`;
}

document.getElementById('jsProducts').innerHTML = products;