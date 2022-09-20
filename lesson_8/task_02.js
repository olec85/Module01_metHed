'use strict'

function randomNumber(min, max){
    const r = Math.random()*(max-min) + min
    return Math.floor(r)
}
for (let i = 0; i < 100; i++) {
    console.log(randomNumber(0, 100))
  }