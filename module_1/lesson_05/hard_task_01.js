'use strict'


let nomberOne = +prompt('Введите первое число');
let nomberTwo = +prompt('Введите второе число');

var gcd;
while (nomberOne!=nomberTwo) {
  if (nomberOne>nomberTwo) {
    nomberOne = nomberOne -nomberTwo;
  }
  else {
    nomberTwo = nomberTwo - nomberOne;
  }
}
gcd = nomberOne;
console.log(gcd);//похоже на правду???