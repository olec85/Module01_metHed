'use strict'

const cart = {
    items:[ {id: 1, title: 'Notebook'},
            {id: 2, title: 'Mouse'},
            {id: 3, title: 'Keyboard'},
            {id: 4, title: 'Gamepad'},
        ],
    totalPrice:0,
    count:0,

    getTotalPrice() {
        return this.totalPrice;
        },
        add:{
            name:'',
            price:0,
            count:1,
        },

    increaseCount() {
        return this.items;
    },

    calculateItemPrice() {
        return this.totalPrice
    },
     clear() {
        return this.clear.count
     },
     print() {
        return this.print.count
     },
};

console.log(print);









