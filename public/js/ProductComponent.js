Vue.component('products', {
    data() {
        return {
            catalogUrl: '/catalogData.json',
            filtered: [],
            products: [],
        }
    },
    mounted() {
        this.$parent.getJson(`/api/products`)
            .then(data => {
                for (let item of data) {
                    item.imgPath = `img/${item.id_product}.jpg`;
                    this.$data.products.push(item);
                    this.$data.filtered.push(item);
                }
            });
    },
    methods: {
        filter(userSearch) {
            let regexp = new RegExp(userSearch, 'i');
            this.filtered = this.products.filter(el => regexp.test(el.product_name));
        }
    },
    template: `<div class="products">
                    <product v-for="item of filtered"
                    :product="item"
                    @add-product="$parent.$refs.cart.addProduct"></product>
                </div>`
});
Vue.component('product', {
    props: ['product', 'img'],
    template: `
            <div class="product-item">
                <img :src="product.img_product" alt="some img" width="450" height="250">
                <div class="desc">
                <h3 class="forDesc">{{product.product_name}}</h3>
                <p class="forDesc">{{product.price}} $</p>
                    <button class="buy-btn forDesc" @click="$emit('add-product', product)">buy</button>
                </div>
            </div>
    `
})