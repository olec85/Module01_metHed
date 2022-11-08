'use strict';

const randomazer = (amount) => {
  let result =[];
  while(result.length < amount) {
    result.push(Math.floor(Math.random() * (100 + 1)));
  } 
  return result
}
console.log(randomazer(4));

// Напишите функцию генератор  массива случайных чисел в файле task01.js

// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;
