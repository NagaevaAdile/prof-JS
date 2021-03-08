const API = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses';

class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = []; //массив товаров
        this.allProducts = []; //массив объектов
        this._getProducts()
            .then(data => { //data - объект js
                this.goods = [...data];
                this.render()
            })
    }

    _getProducts() {
        return fetch(`${API}/catalogData.json`)
            .then(result => result.json())
            .catch(error => {
                console.log(error);
            })
    }
    calcSum() {
        return this.allProducts.reduce((accum, item) => accum += item.price, 0);
    }
    render() {
        const block = document.querySelector(this.container);

        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            this.allProducts.push(productObj);
            block.insertAdjacentHTML('beforeend', productObj.render());
        }
    }
}

class ProductItem {
    constructor(product, img = 'https://placehold.it/200x150') {
        this.title = product.product_name;
        this.price = product.price;
        this.id = product.id_product;
        this.img = img;
    }
    render() {
        return `<div class="product__item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} $</p>
                    <button class="buy__btn">Купить</button>
                </div>
            </div>`
    }
}

let list = new ProductsList();
list.render();


let APICart = 'https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/getBasket.json';

class Cart {
    constructor(cartContainer = '.cart__container') {
        this.cartContainer = cartContainer;
        this.cart = [];
        this.goods = [];
        this.allProducts = [];

        this._getProducts()
            .then(result => {
                this.goods = [...result.contents];
                this.renderCart()
            })
    }

    _getProducts() {
        return fetch(`${API}/getBasket.json`)
            .then(result => result.json())
    }

    renderCart() {
        const cartBlock = document.querySelector(this.cartContainer);

        for (let el of this.goods) {
            const cartObj = new CartItem(el);
            this.allProducts.push(cartObj);
            cartBlock.insertAdjacentHTML('beforeend', cartObj.renderItemCart())
        }
    }
}


class CartItem {
    constructor(el) {
        this.title = el.product_name;
        this.price = el.price;
        this.id = el.id_product;
        this.quantity = el.quantity;

    }
    renderItemCart() {
        return `<div class="cart__item" data-id="${this.id}">
                        <h3>${this.title}</h3>
                        <p>Price: ${this.price} $</p>
                        <p>Quantity: ${this.quantity}</p>
                </div>`
    }
}


let cartList = new Cart();
cartList.renderCart();



let btnCart = document.querySelector('.btn__cart');
let escCart = document.querySelector('.btn__esc');
let cartBox = document.querySelector('.cart__container');

btnCart.addEventListener('click', () => {
    cartBox.style.display = 'block';
});

escCart.addEventListener('click', () => {
    cartBox.style.display = 'none';
})