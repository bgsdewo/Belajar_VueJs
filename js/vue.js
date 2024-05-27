//Materi Reactive Data pada VueJs



var app = new Vue({
    el:'#apps',
    data: {
        maximum:50,
        products:null,
    },
    mounted:function() {
        fetch('https://hplussport.com/api/products/order/price')
        .then(Response => Response.json())
        .then(data => {
            this.products = data;
        });
    }
})

//Materi Cara Binding Data ke dalam Attribute HTML
// v-bind -> menggunakan itu cara binding data ke HTML
// Tanpa pake {{ }} atau ada cara cepatnya
// :src="image" v-bind:alt="name">


//Materi Membuat Perulangan di dalam VueJS
//v-for="item in products" menggunakan itu ketika kita mempunyai 
// objek yang bersarang seperti di var dataProduct
// yang artinya variabel temporarynya itu item dan kita ingin mendapatkan
// data itu didalam property apa (in products),disini kita make didalam products

//Materi Fungsi Kondisi di dalam VueJS
// jadi di VueJs juga bisa menggunakan pengkondisian if else
// misalnya dengan menggunakan v-if="item.price >= Number(maximum)"

//Materi Menangani Input Data dari User
// v-model="maximum",menggunakan itu kita bisa menghandel inputan user


//Materi Mengenal Lifecyle Hooks VueJS