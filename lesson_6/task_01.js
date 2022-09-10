'use strict'
//еаблица умножения
for (let i = 1;i < 10;i++) {
    console.log('--------');
    for (let y = 1;y < 10;y++) {
        console.log(`${i} x ${y} = ${i * y}`);
    }
}

// таблицу степеней от 1 до 10

for (let j = 1;j < 11;j++) {
    console.log('-----');
    for (let x = 1;x < 11;x++) {
        console.log(`${j} x ${x} = ${j ** x}`);
    }
}