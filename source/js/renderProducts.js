function renderProducts() {
    let container = document.querySelector('.modules__container');

    let itemWrapper = document.createElement('div');
    itemWrapper.className = 'modules__products-item-wrapper';
        
    container.appendChild(itemWrapper);
    }

export default renderProducts;
