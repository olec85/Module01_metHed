'use strict'
//defineProperty  метод позволяющий указывать настройки для свойств

const car = {
    car: 'mini',
    model:'cooper',
    price:30000,
};

Object.defineProperty(car, 'fullName', {
    configurable: true,//для запрета конфигурирование надо поставить false
    enumerable: true,//запрещает этерировать если поставить значение false
    writable: true,//запрещает перезаписывать значение
    get() {
        return `${this.car} ${this.model}`;
    },//
    set(val) {
        this.comment = value;
    },//записывает значение,что либо получаем
})
console.log(car);
console.log(Object.keys(car));
console.log(Object.values(car));
console.log(Object.entries(car));