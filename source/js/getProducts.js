import renderProducts from "./renderProducts.js";
function productsArray(url) {
    // let itemWrapper = document.querySelector('.modules__products-item-wrapper');
    fetch(url)
    .then(res => res.json())
    .then((productsItem) => {    
        productsItem.forEach((item) => {
            // let cardProduct = document.createElement('div');
            // cardProduct.textContent = item.productName;

            // itemWrapper.append(cardProduct)
            renderProducts();
        })
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });  
}
export default productsArray;

