'use strict'

  const isPrime = (number) => {
    for (let i = 2; i < number; i++) {
    if(!(number % i)) {
    return false;
    }
    }
    return true;
    }
    
    console.log(isPrime(151));

// Напишите функцию isPrime.

// Она принимает число и возвращает true, если число является простым, а в ином случае false.



// Простое число - целое положительное число, имеющее ровно два различных натуральных делителя - единицу и самого себя.

// Например, 5 - простое число, так как делится без остатка только на 1 и на себя.

// 151, 911, 1987 - так же простые числа

// Используйте цикл for в функции

