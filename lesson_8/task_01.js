'use strict'

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
for (let i = 0; i < 100; i++) {
    console.log(randomNumber(0, 100))
  }





// Напишите функцию генератор  массива случайных чисел в файле task01.js

// Функция принимает один обязательный параметр это количество элементов в массиве
// И возвращает массив со случайными числами от одного до 100 включительно;