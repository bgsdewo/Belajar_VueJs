var app = new Vue({
    el: '#app',
    data: {
        maximum: 50,
        products: null,
        cart: [],
        style: {
            label: 'font-weight-bold mr-2',
            inputWidth: '60px',
            sliderStatus: false
        }
    },
    mounted: function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(response => response.json())
        .then(data => {
            this.products = data;
        });
    },
    computed: {
        sliderState:function(){
            return this.style.sliderStatus ? 'd-flex' : 'd-none'
        }
    },
    filters: {
        currentFormat: function (value) {
            return 'Rp' + Number.parseFloat(value).toFixed(2)
        }
    },
    methods: {
        before:function (el) {
           el.className = 'd-none'
        },
        enter:function (el) {
            var delay = el.dataset.index * 100
            setTimeout(function(){
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeInLeft'
            },delay)
        },
        leave:function (el) {
            var delay = el.dataset.index * 100
            setTimeout(function(){
                el.className = 'row d-flex mb-3 align-items-center animate__animated animate__fadeOutRight'
            },delay)
        },
        addItem: function (product) {
            this.cart.push(product);
        }
    }
});
console.log("Finish chapter 3")
//enter-active-class="animate__animated animate__fadeInLeft" leave-active-class="animate__animated animate__fadeOut"