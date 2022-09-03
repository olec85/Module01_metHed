'use strict'

function reverseString(str) {
    let splitString = str.split(" ");
    let reverseArray = splitString.reverse();
    let joinArray = reverseArray.join(" ");
  
    return joinArray;
  } 
  
  reverseString("Привет мир");//что то тут не то и ошибки нет чтобы понять  чо не хватает