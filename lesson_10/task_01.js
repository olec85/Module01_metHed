'use strict';

const cart = {
  items: [],
  totalPrice: 0,
  count: 0,

  // getTotalPrice() {
  //   return this.totalPrice;
  // },

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
  //   this.totalPrice = this.items.reduce((sum, {price, amount}) =>
  //     sum += price * amount, 0);
        return this.items.reduce((sum, {price, amount}) =>
        sum += price * amount, 0);
   },

  get totalPrice() {
    return this.calculateItemPrice()
  },

  clear() {
    this.items = [];
    this.count = 0;
    // this.totalPrice = 0;
  },

  print() {
    console.log(JSON.stringify(this.items));
    // console.log(this.getTotalPrice());
    console.log(this.totalPrice);
  },
};

cart.add('Notebook', 50000, 3);
cart.add('Macbook', 150000, 2);
cart.add('Keyboard', 15000, 2);
cart.print();

// Продолжим работу с cart.js
// Обнаружена уязвимость  нашем функционале
// Если после добавления последнего товара присвоить к totalPrice любое значение,
// например
// cart.totalPrice = 10;
// то при выводе print() общая стоимость корзины будет равна 10
// Чтобы это предотвратить, необходимо свойство totalPrice сделать геттером который будет возвращать результат вызова метода calculateItemPrice
// метод getTotalPrice больше не нужен
// calculateItemPrice переделать таким образом, чтобы сумму он возвращал, а не записывал в свойство totalPrice
// Вызов метода calculateItemPrice оставить только у геттера totalPrice