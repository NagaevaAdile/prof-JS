const products = [{
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
//Функция для формирования верстки каждого товара
const renderProduct = (...products) => {
    return `<div class="product-item">
                <img src="${products[2]}" alt="" width="300" height="300">
                <h3>${products[0]}</h3>
                <p>${products[1]}</p>
                <button class="buy-btn">Buy</button>
            </div>`
};
const renderPage = list => {
    const productsList = list.map(item => renderProduct(item.title, item.price, item.img));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);