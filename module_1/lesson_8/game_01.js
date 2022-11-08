'use strict'

function searchNumber (min, max) {
    
    let randomNumber = Math.floor(Math.random() * (max- min + 1)) + min;
    cycleStart: while( true ) {
        let userNumber =  +prompt(`Введите число`);
        if (+ userNumber) {
            if (+ userNumber < randomNumber ) {
                alert(`Больше`);
            }
            else if (+ userNumber > randomNumber) {
                alert(`Меньше`);  
            }
            else if (+ userNumber == randomNumber)  {
                alert(`Правильно!`);
                
                if(confirm(`Продолжить игру?`)) {
                    searchNumber (1, 1000)
                }
                else {
                    break;
                }
                
            }
        }
        else if(+ userNumber == 0 && userNumber !== null) {
            continue cycleStart;
        }
        else if(userNumber == null) {
            break;
        }
    }
}
searchNumber(1 , 100);
