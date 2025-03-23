import productsArray from "./fetch.js";
// import renderProducts from "./renderProducts.js";

    let container = document.createElement('div');
    container.className = 'modules__container';
    
    let itemWrapper = document.createElement('div');
    itemWrapper.className = 'modules__item-wrapper';
    
    container.appendChild(itemWrapper);
    document.body.appendChild(container);

productsArray('http://localhost:3001/products');
