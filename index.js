<<<<<<< HEAD
class GoodsItem {
    constructor(title, price) {
      this.title = title;
      this.price = price;
    }
    render() {
      return `<div class="goods-item"><h3>${this.title}</h3><p>${this.price}</p><button class="basket">Купить</button></div>`;
    }
}

class GoodsList {
    constructor() {
      this.goods = [];
    }
    fetchGoods() {
      this.goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
      ];
=======
const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

function makeGETRequest(url) {
    return new Promise((resolve, reject) => {
        let xhr;
        if (window.XMLHttpRequest) {
            xhr = new window.XMLHttpRequest();
        }
        else {
            xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
        }
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                const body = JSON.parse(xhr.responseText);
                resolve(body);
            }
        };
        xhr.onerror = function (err) {
            reject(err);
        }
        xhr.open('GET', url);
        xhr.send();
    });
};
class GoodsItem {
    constructor(title = 'Без имени', price = '') {
        this.title = title;
        this.price = price;
    }
    render() {
        return `<div class="goods-item">
                    <h3 class="title goods-title">${this.title}</h3>
                    <p>${this.price} ₽</p>
                </div>`;
    }
}
class GoodsList {
    constructor() {
        this.goods = [];
    }
    fetchGoods() {
        return makeGETRequest(`${API_URL}/catalogData.json`).then((goods) => {
            this.goods = goods;
        });
    }
    sumItem() {
        let summa = 0;
        this.goods.forEach(good => {
            summa += good.price
        });
        return summa;
>>>>>>> Lesson_4
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
<<<<<<< HEAD
          const goodItem = new GoodsItem(good.title, good.price);
          listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
    sumItems() {
        let summa = 0;
        this.goods.forEach(good => {summa += good.price});
        return summa;
    }     
}

class basket {
    addBasket() {
        //Метод добавляет в корзину товар.
    }
    removeBasket() {
        //Метод удаляет товар из корзины.
    }
}

class basketItems {
    allItemsBasket() {
        //Метод отображает все товары в корзине.
    }
    sumItemsBasket () {
        //Метод считает сумму товаров в корзине.
    }
}

const list = new GoodsList();

list.fetchGoods();
list.render();
list.sumItems();
=======
            const goodItem = new GoodsItem(good.product_name, good.price);
            listHtml += goodItem.render();
        });
        document.querySelector('.goods-list').innerHTML = listHtml;
    }
}
class Cart extends GoodsList {
    constructor(props) {
        super(props);
    }
    clean() {}
    incGood() {}
    decGood() {}
}
class CartItem extends GoodsItem {
    constructor(props) {
        super(props);
    }
    delete() {}
}
const list = new GoodsList();
list.fetchGoods().then(() => {
    list.render();
});
>>>>>>> Lesson_4
