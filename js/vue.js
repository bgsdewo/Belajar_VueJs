new Vue({
    el: '#app',
    data: {
        maximum: 50,
        products: [],
        cart: [],
        style: {
            label: ['font-weight-bold', 'mr-2'],
            inputWidth: 60
        }
    },
    computed: {
        filteredProducts() {
            return this.products.filter(item => item.price <= this.maximum);
        }
    },
    mounted() {
        fetch('https://hplussport.com/api/products/order/price')
            .then(response => response.json())
            .then(data => {
                this.products = data;
            });
    },
    methods: {
        addItem(product) {
            this.cart.push(product);
        }
    }
});