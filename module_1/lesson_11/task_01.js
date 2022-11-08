
const rectangle  = {
    width:5,
    height:5,
    set changeWidth(a) {
        this.width = a
    },
    set changeHeight(b) {
        this.height = b
    },
    get perim() {
        return (this.width + this.height) * 2
    },
    get plosh() {
        return(this.width * this.height)
    }
}
rectangle.changeWidth = 10;
rectangle.changeHeight = 10;
console.log(rectangle.width);
console.log(rectangle.perim);
console.log(rectangle.plosh);




// Создать объект rectangle, который описывает ширину и высоту (свойства width и height) прямоугольника
// Объект должен иметь 2 сеттера для записи ширины и высоты и два геттера для получения периметра и площади прямоугольника

// Сеттеры могут принимать только числа
// Геттеры возвращают строку число + "см"
// пример "40см"

// По умолчанию значения высоты и ширины заданы 5 см



