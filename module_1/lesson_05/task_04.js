'use strict'
const calculate = (totalSum, amount, promocode) => {
    if(amount > 10) {
        totalSum*= 0.97
    } else if (totalSum > 30000) {
        totalSum *= 0.85
    } else if (promocode == "METHED") {
        totalSum *= 0.9
    } else if(promocode == "G3H2Z1") {
        totalSum -= 500
    }
}//но только если сумма  корзины после предыдущих скидок превышает 2000р-как это до изобразить??


