'use strict';

const randomazer = (amount, n, m) => {
  let result =[];
  let d = m > n ? m - n + 1 : n - m + 1;
  console.log(d);
  let d1 = m > n ? n:m;
  console.log(d1);
  while(result.length < amount) {
    result.push(Math.floor(Math.random() * (d) + (d1)));//
  }  
  return result;

};
console.log(randomazer(40, 15, -25));
