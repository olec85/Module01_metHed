'use strict'

 const allStudents = ['Иванов', 'Петров', 'Сидоров', 'Кузнецов', 'Смирнов', 'Попов', 'Соколов'];
 const failedStudents = ['Сидоров', 'Смирнов', 'Попов'];
 
function filter(allStudents, failedStudents) {
    return allStudents.filter((item) => !failedStudents.includes(item));
    
}

console.log(filter(allStudents, failedStudents));
