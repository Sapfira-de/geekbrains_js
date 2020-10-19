const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

// Переделать в ДЗ не использовать fetch а Promise
// Запрос / ответ на промисах
function getRequest(url, cb) {
  return new Promise((resolve, reject) => {
      // console.log('Работает промис');
      let xhr = window.XMLHttpRequest ? new window.XMLHttpRequest() : new window.ActiveXObject;
      xhr.open("GET", url, true);
      xhr.onload = () => resolve(cb(xhr.responseText));
      xhr.onerror = () => reject(xhr.statusText);
      xhr.send();
    });
}


// –--------------------------------
// функция для вызова добавления в корзину
function addCart(id) {
  cart.addToCart(id);
};
// функция для вызова удаления из корзины
function deleteProduct(id) {
  cart.deleteFromCart(id);
};
// функция для вызова рендера корзины
function viewCart() {
  cart.render();
};

// Класс корзины
class Cart {
  constructor() {
      this.cartProducts = [];
  }

 // Добавление в корзину 
 addToCart(id) {
  let toCart;
  list.products.forEach(function(product) {
      if(id == product.id) {
          toCart = {
              id: product.id,
              title: product.title,
              price: product.price,
              img: product.img
          }
      }
  });
  this.cartProducts.push(toCart);
  this.cartCount();
}

// Удаление товара из корзины 
deleteFromCart(id) {
  let getIdElement;
  this.cartProducts.forEach(function(product, i) {
      let thisId = product.id;
      if(id == thisId) {
          getIdElement = i;
      }
      
  });
  this.cartProducts.splice(getIdElement, 1);
  this.render();
  this.cartCount();
}

// Стоимость товаров в корзине... =(
calcAllProducts() {
  let totalPrice = 0;
  this.cartProducts.forEach((product) => {
      if (product.price !== undefined) {
          totalPrice += product.price;
      }
  });
  let totalProductsAnswer = "Сумма товаров в корзине: $" + totalPrice;
  document.querySelector('.products').innerHTML = totalProductsAnswer;
}

// Считаем количество товаров
cartCount() {
  let count = this.cartProducts.length;
  document.getElementById('cart').innerHTML = ' (' + count + ')';
}

// Рендер содержимого корзины. Не могу понять, то ли верно делаю, то ли нет.
render() {
  let readHtml = '';
  this.cartProducts.forEach((product) => {
      const productItem = new CartItem(product.id, product.title, product.price, product.img);
      readHtml += productItem.render();
  })
  document.querySelector('.products').innerHTML = readHtml;
  this.calcAllProducts();
}
}




class ProductList {
  #goods;

  constructor(container = '.products') {
    this.container = container;
    this.#goods = [];
    this._allProducts = [];

    // this._fetchGoods();
    this.#getProducts().then((data) => {
      this.#goods = [...data];
      // this.#goods = Array.from(data);
      this.#render();
    });

    console.log(this.sum());
  }

  // _fetchGoods() {
  //   getRequest(`${API}/catalogData.json`, (data) => {
  //     console.log(data);
  //     this.#goods = JSON.parse(data);
  //     this.#render();
  //     console.log(this.#goods);
  //   });
  // }

  #getProducts() {
    return fetch(`${API}/catalogData.json`)
        .then(response => response.json())
        .catch((error) => {
          console.log(error);
        });
  }

  sum() {
    return this.#goods.reduce((sum, { price }) => sum + price, 0);
  }

  #render() {
    const block = document.querySelector(this.container);

    for (let product of this.#goods) {
      const productObject = new ProductItem(product);

      this._allProducts.push(productObject);

      block.insertAdjacentHTML('beforeend', productObject.getGoodHTML());
    }
  }
}

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

const list = new ProductList();
const cart = new Cart();
