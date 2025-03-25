import productsArray from "./getProducts.js";

    function renderProducts() {
        let container = document.createElement('div');
        container.className = 'modules__container';
        
        let itemWrapper = document.createElement('div');
        itemWrapper.className = 'modules__item-wrapper';
        
        container.appendChild(itemWrapper);
        document.body.appendChild(container);

        productsArray('http://localhost:3001/products');
    }

export default renderProducts;
