'use strict'

function chooseYears(n, m) {
const yearArray = [];
for (let i = n; i <= m; i++) {
    yearArray.push(i);
}
  const result = [];
  yearArray.forEach((year) => {
    if (getLeapYear(year)) {
      result.push(year);
    }
  });
  return result;
}
function getLeapYear(year) {
  if ((year % 4 === 0 && year % 100 !== 0) || (year % 100 === 0 && year % 400 === 0)) {
    return year;
  } else {
    return false;
  }
}
document.writeln(chooseYears(1900, 2022));
