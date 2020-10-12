const products = [
  {title: 'Notebook', price: 20000},
  {title: 'Mouse', price: 1500},
  {title: 'Keyboard', price: 5000},
  {title: 'Gamepad', price: 4500},
];

const renderProduct = (title, price, img = '') => {
  return `<div class="product-item">
            <img src="${img}" alt="">
            <h3>${title}</h3>
            <p>${price}</p>
            <button class="by-btn">Добавить в корзину</button>
          </div>`;
};

const renderProducts = (list) => {
  const productList = list.map(item => renderProduct(item.title, item.price));
  document.querySelector('.products').innerHTML = productList.join('');
  // Если в метод join в качестве необязательного параметра разделителя ставим любой символ (либо не ставим вообще), 
  //то между элементами будет выводится символ/запятая (по умолчанию). В данном случае сепаратор указан пустым, ничего не выводится.
};

renderProducts(products);

//не знаю, что можно сократить даже...