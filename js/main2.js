class ProductsList {
    constructor(container = '.products') {
        this.container = container;
        this.goods = [];
        this._fetchProducts();
    }

    _fetchProducts() {
        this.goods = [{
                id: 1,
                title: 'Notebook',
                price: 2000,
                img: './img/notebook.png'
            },
            {
                id: 2,
                title: 'Mouse',
                price: 20,
                img: './img/mouse.png'
            },
            {
                id: 3,
                title: 'Keyboard',
                price: 200,
                img: './img/keyboard.jpg'
            },
            {
                id: 4,
                title: 'Gamepad',
                price: 50,
                img: './img/gamepad.jfif'
            },
        ];
    }
    render() {
        const block = document.querySelector(this.container);
        for (let product of this.goods) {
            const productObj = new ProductItem(product);
            block.insertAdjacentHTML('beforeend', productObj.render())
        }
    }

}

class ProductItem {
    constructor(product) {
        this.title = product.title;
        this.price = product.price;
        this.id = product.id;
        this.img = product.img;
    }

    render() {
        return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img" width="300" height="300">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductsList();
list.render();


class Cart {
    constructor(boxCart = '.cart-container') {
        this.boxCart = boxCart;
        this.cartList = [];
        this.clearCart();
        this.sumPrice();
    }

    sumPrice(cartList) {
        return product.price += product.price;
    }

}

class ItemCart extends ProductItem {

}