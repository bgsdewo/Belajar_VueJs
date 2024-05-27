//Materi Reactive Data pada VueJs

var products = {
    "name": "T-Shirt Putih",
    "price": 150000,
    "description": "T-shirt putih berbahan katun yang nyaman dipakai sehari-hari.",
    "image": "https://via.placeholder.com/150?text=T-Shirt+Putih"
}

var app = new Vue({
    el:'#apps',
    data:products
})

//Materi Cara Binding Data ke dalam Attribute HTML
// v-bind -> menggunakan itu cara binding data ke HTML
// Tanpa pake {{ }} atau ada cara cepatnya
// :src="image" v-bind:alt="name">
