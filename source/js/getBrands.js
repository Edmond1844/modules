function brandsArray(url) {
    let itemWrapper = document.querySelector('.modules__brands-item-wrapper');
    fetch(url)
    .then(res => res.json())
    .then((productsItem) => {    
        productsItem.forEach((item) => {
            let cardProduct = document.createElement('div');
            cardProduct.textContent = item.brandsName;

            itemWrapper.append(cardProduct)
        })
    })
    .catch(error => {
        console.error('Ошибка при загрузке данных:', error);
    });  
}
export default brandsArray;
