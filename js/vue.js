//Materi Reactive Data pada VueJs

var dataProduct = {
    products: [
        {
            "id": "1",
            "name": "T-Shirt Putih",
            "price": 150000,
            "description": "T-shirt putih berbahan katun yang nyaman dipakai sehari-hari.",
            "image": "https://via.placeholder.com/150?text=T-Shirt+Putih"
        },
        {
            "id": "2",
            "name": "Kemeja Flanel",
            "price": 250000,
            "description": "Kemeja flanel dengan pola kotak-kotak klasik. Cocok untuk acara kasual.",
            "image": "https://via.placeholder.com/150?text=Kemeja+Flanel"
        },
        {
            "id": "3",
            "name": "Jaket Denim",
            "price": 350000,
            "description": "Jaket denim dengan potongan modern. Tahan lama dan stylish.",
            "image": "https://via.placeholder.com/150?text=Jaket+Denim"
        }
    ]
}; 

var app = new Vue({
    el:'#apps',
    data:dataProduct
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