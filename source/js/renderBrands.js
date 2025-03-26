function renderBrands() {
    let container = document.querySelector('.modules__container');

    let itemWrapper = document.createElement('div');
    itemWrapper.className = 'modules__brands-item-wrapper';
        
    container.appendChild(itemWrapper);
    }

export default renderBrands;
