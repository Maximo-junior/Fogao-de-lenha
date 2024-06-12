var products = [
    {
        "photo": "img/Prato01.png",
        "name": "Prato da casa",
        "price": 21.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Prato02.png",
        "name": "Prato da casa sem feijão",
        "price": 20.87,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/double-cb.png",
        "name": "Burguer Caseiro",
        "price": 18.97,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/fries.png",
        "name": "Porção de Fritas",
        "price": 12.88,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/Prato03.png",
        "name": "Feijoada",
        "price": 25.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/salad.png",
        "name": "Salada",
        "price": 7.79,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/cola.png",
        "name": "Coca Cola",
        "price": 5.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/lipton.png",
        "name": "Coca com limão",
        "price": 6.99,
        "active": false,
        "quantity": 1
    },
    {
        "photo": "img/water.png",
        "name": "Água",
        "price": 2.99,
        "active": false,
        "quantity": 1
    }
];
 
const SelfServiceMachine = {
    data() {
        return {
            products:window.products
        }
    },
    methods:{
        total: function(){
            var total = 0;

            this.products.forEach(function(item){
                if(item.active){
                    total += item.price * item.quantity
                }
            })
            return total.toFixed(2)
        }
    }

};

Vue.createApp(SelfServiceMachine).mount('#app');