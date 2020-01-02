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
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
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