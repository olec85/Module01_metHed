'use strict'

const cart = {
    items:[],
    totalPrice:0,
    count:0,

    getTotalPrice() {
        return this.totalPrice;
        },

    add(name, price, amount = 1) {
        this.items.push({
            name,
            price,
            amount,
        });
        this.increaseCount(amount);
        this.calculateItemPrice();
        },

    increaseCount(number) {
        this.count += number;
    },

    calculateItemPrice() {
        this.totalPrice = this.items.reduce((sum,{price,amount}) => {
            return sum+=price*amount;
        }, 0)
    },

     clear() {
        this.items=[];
        this.count = 0;
        this.totalPrice = 0;
     },

     print() {
        console.log(JSON.stringify(this.items));
        console.log(this.getTotalPrice());
     },
};

cart.add('Notebook', 50000, 3,);
cart.add('Macbook', 150000, 2,);
cart.add('Keyboard', 15000, 2,);
cart.print();









