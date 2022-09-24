'use strict';

function randomNumber(min, max, n, m) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}
for (let i = 0; i < 100; i++) {
  console.log(randomNumber(0, 100));
}//а как сюда вписать диапазон для массива и  Учтите, что n и m могут быть отрицательными, а также может быть n > m или n < m.

