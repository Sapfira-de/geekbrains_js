//Создаем класс для списка товаров 
class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    this._fetchGoods();
    this.#render();
  }
//метод для заполнения списка goods
  _fetchGoods() {
    this.#goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }


 #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }

  calcAllGoods() {
    let totalPrice = 0;
    this.goods.forEach((product) => {
        if(product.price !== undefined) {
            totalPrice += product.price;
            console.log(product.price);
        }
    });
    let totalGoodsPrice = "Все товары на сумму $" + totalPrice;
    document.querySelector('.products-total').innerHTML = totalGoodsPrice;
  }

/*render() {
  let listHtml= '';
  this.#goods.forEach(({id, title, price}) => {
    const goodItem = new GoodsItem(id, title, price);
    list.Html += goodItem.render();
  });
  document.querySelector(' .products').innerHTML = listHtml;
}
  calcAllGoods() {
    let totalPrice = 0;
    this.goods.forEach(({id, title, price}) => {
      sum += price;
          
    });
    console.log('Суммарная стоимость товаров равна ' + totalPrice);
  }*/
  
}
//Создаем класс для товара.
class ProductItem {
  constructor(product, img='https://placehold.it/200x150') {
    this.title = product.title;
    this.price = product.price;
    this.id = product.id;
    this.img = img;
  }
  
  getGoodHTML() {
    return `<div class="product-item" data-id="${this.id}">
              <img src="${this.img}" alt="Some img">
              <div class="desc">
                  <h3>${this.title}</h3>
                  <p>${this.price} \u20bd</p>
                  <button class="buy-btn">Купить</button>
              </div>
            </div>`;
  }
}

//Создаем класс корзина Cart
class Cart {
  constructor () {
      this.goods = [];
  }
  //метод добавления товара в корзину
  addCartItem(cartItem) {
      this.goods.push(cartItem);
  }
  
const list = new ProductList();


// const products = [
//   {id: 1, title: 'Notebook', price: 20000},
//   {id: 2, title: 'Mouse', price: 1500},
//   {id: 3, title: 'Keyboard', price: 5000},
//   {id: 4, title: 'Gamepad', price: 4500},
// ];
//
// const renderProduct = (item, img='https://placehold.it/200x150') => `<div class="product-item" data-id="${this.id}">
//               <img src="${img}" alt="Some img">
//               <div class="desc">
//                   <h3>${item.title}</h3>
//                   <p>${item.price} \u20bd</p>
//                   <button class="buy-btn">Купить</button>
//               </div>
//           </div>`;
//
// const renderProducts = list => {
// document.querySelector('.products').insertAdjacentHTML('beforeend', list.map(item => renderProduct(item)).join(''));
// };
//
// renderProducts(products);
