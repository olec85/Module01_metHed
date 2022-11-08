'use strict';
const randomazer = (amount, n, m, str) => {
  let result =[];
  let d = m > n ? m - n + 1 : n - m + 1;
  console.log(d);
  let d1 = m > n ? n:m;
  console.log(d1);
  while(result.length < amount) {
    result.push(Math.floor(Math.random() * (d) + (d1)));
  }  
  return str == 'even' ? result.filter(el => el % 2 == 0) : result.filter(el => el % 2 !== 0);

};
console.log(randomazer(40, 15, -25, 'odd'));
