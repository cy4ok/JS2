const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
function makeGetRequest(url) {
  return new Promise((resolve, reject) => {
        let xhr;
        if (XMLHttpRequest) {
            xhr = new XMLHttpRequest();
        } else {
            xhr = new ActiveXObject('Microsoft.XMLHTTP');
        }

        xhr.onreadystatechange = function() {            
            if (xhr.readyState === 4 && xhr.status === 200) {
                const body = JSON.parse(xhr.responseText);
                resolve(body);
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
                reject({
                    error: xhr.status,
                });
            }
        };

        xhr.open('GET', url);
        xhr.send();
    });
}

makeGetRequest('https://jsonplaceholder.typicode.com/todos/1')
    .then(res => console.log(res))
    .catch(err => console.error(err));

class GoodsItem {
    constructor(title = 'Без имени', price = '') {
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
    fetchGoods(cb) {
    makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = goods;
            cb();
        });
    }
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
          const goodItem = new GoodsItem(good.product_name, good.price);
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
list.fetchGoods(() => {
    list.render();
});
