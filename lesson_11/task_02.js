
function task_02 (arr) {
    const t = Math.round(Math.random() * 11)
    arr.push(t);
    const sum = arr.reduce((s, el) => el + s, 0)
    if (sum > 50) return arr
    else return task_02 (arr)
}
console.log(task_02([1,2,3]));








// Напишите рекурсивную функцию, которая принимает один параметр массив,  генерирует целое число от 0 до 10 включительно и добавляет его в массив.

// Каждый раз после добавления нового числа проверяет сумму элементов массива, если она меньше 50 запускается снова передавая себе массив. Если сумма больше 50-ти, то функция возвращает этот массив.