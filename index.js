const API_URL = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';
function makeGETRequest(url, callback) {
    let xhr;
    if (window.XMLHttpRequest) {
        xhr = new window.XMLHttpRequest();
    } else {
        xhr = new window.ActiveXObject('Microsoft.XMLHTTP');
    }

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const body = JSON.parse(xhr.responseText);
            callback(body)
        }
    };
    xhr.open('GET', url);
    xhr.send();
}

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
    fetchGoods(cb)  {
        makeGETRequest(`${API_URL}/catalogData.json`, (goods) => {
            this.goods = goods;
            cb();
        });
    }
        sumItem() {
        let summa = 0;
        this.goods.forEach(good => {summa += good.price});
        return summa;
    }     
    render() {
        let listHtml = '';
        this.goods.forEach(good => {
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
list.fetchGoods(() => {
    list.render();
});
