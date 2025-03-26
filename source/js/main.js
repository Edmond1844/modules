import renderProducts from "./renderProducts.js";
import renderBrands from "./renderBrands.js";
import productsArray from "./getProducts.js";
import brandsArray from "./getBrands.js";


let container = document.createElement('div');
container.className = 'modules__container';

document.body.appendChild(container);

renderProducts();
renderBrands();
productsArray('http://localhost:3001/products')
brandsArray('http://localhost:3001/brands');