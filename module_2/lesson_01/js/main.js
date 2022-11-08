'use strict';

let items = document.querySelector('.items');
let item = document.querySelectorAll('.item');

items.insertBefore(item[1], item[0]);//two
items.insertBefore(item[4], item[0]);//five
items.insertBefore(item[2], item[4]);//three
items.insertBefore(item[3], item[4]);//four
items.insertBefore(item[5], item[0]);//six
items.insertBefore(item[0], item[4]);//one

// const propsList = document.querySelectorAll('.props__list');
// const propsItem = document.querySelectorAll('.props__item');

 
// const itemFour = document.querySelectorAll('.item_four');Типы и грамматическ
// const itemOne = document.querySelectorAll('.item_one');//Познакомьтесь, Java
// const itemTwo = document.querySelectorAll('.item_two');//ES6 и не только
// const itemThree = document.querySelectorAll('.item_three');//Замыкания и объ
// const itemFive = document.querySelectorAll('.item_five');//Область видимости
// const itemSix = document.querySelectorAll('.item_six');//Асинхронная обработ



// 