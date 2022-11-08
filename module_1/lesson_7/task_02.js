'use strict'

const allСashbox = [4500, 3210, 650, 1250, 7830, 990, 13900, 370];

const getValue = (arr) => {
    return Math.floor(arr.reduce((sum, cur) => sum + cur) / arr.length);
}
console.log(getValue(allСashbox));//вычесляем средний чек за день



