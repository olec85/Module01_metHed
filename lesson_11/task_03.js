
'use strict';

const cart = {
  items: [], // пустой массив - это товары
  totalPrice: 0, // общая стоимость корзины
  count: 0, // количество товаров
  discount:0,
  set setDiscount(promocode) {
    if ('METHED') {
        discount + 15
    }
  }

  getTotalPrice() {
    return this.totalPrice;
  }, // метод для получения общей стоимости товара

  add(name, price, amount = 1) {
    this.items.push({
      name, // название товара
      price, // цену товара
      amount, // количество товара (опциональный параметр, по умолчанию 1 товар)
    });// добавить товар
    this.increaseCount(amount);//
    this.calculateItemPrice();//
  }, // тот метод формирует объект из полученных
  // параметров и добавляет его в свойство items

  increaseCount(number) {
    this.count += number;// Принимает один параметр(число)
    // Увеличивает свойство count на это число
  },

  calculateItemPrice() {
    this.totalPrice = this.items.reduce((sum, {price, amount}) =>
      sum += price * amount// пересчитывает стоимость всей корзины с помощью
      // метода reduce и записывает значение в totalPrice
    , 0);
  },

  clear() {
    this.items = [];
    this.count = 0;
    this.totalPrice = 0;
  }, // oчищает полностью нашу корзину, возвращает все значения в изначальные

  print() {
    console.log(JSON.stringify(this.items));// Выводит в консоль
    // JSON строку из массива items
    console.log(this.getTotalPrice());// выводит общую стоимость корзины
  },
};

cart.add('Notebook', 50000, 3);
cart.add('Macbook', 150000, 2);
cart.add('Keyboard', 15000, 2);
cart.print();// вызываем метод print для вывода информации в консоль

// Задача #2
// Продолжим работу в cart.js из предыдущего урока 
// Методы объекта cart не должны обращаться к объекту по имени
// В объект cart добавьте сеттер setDiscount и свойство discount
// Сеттер setDiscount будет принимать promocode
// если promocode будет строка METHED, то в discount будет добавляться значение 15 
// если promocode будет строка NEWYEAR, то в discount будет добавляться значение 21
// метод calculateItemPrice должен учитывать скидку равную процентному значению discount