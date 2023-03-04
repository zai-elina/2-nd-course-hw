//Задание 1
// const array = [1, 5, 4, 10, 0, 3];
// for (let item of array) {
//   console.log(item);
//   if (item == 10) {
//     break;
//   }
// }

//Задание 2
// const array = [1, 5, 4, 10, 0, 3];
// console.log(array.indexOf(4));

//Задание 3
// console.log([1, 3, 5, 10, 20].join(' '));

//Задание 4
// const matrix = [];
// let m = 3;
// let n = 3;
// for (let row = 0; row < m; row++) {
//     matrix[row] = [];
//     for (let column = 0; column < n; column++) {
//        matrix[row][column] = 1;
//     }
// }
// console.log(matrix);

//Задание 5
// const array = [1, 1, 1];
// const newArray = array.concat([2, 2, 2]);
// console.log(newArray);

//Задание 6
// const array = [9, 8, 7, 'a', 6, 5];
// array.sort((a,b) => a - b);
// array.pop();
// console.log(array);

//Задание 7
// const array = [9, 8, 7, 6, 5];
// let number = +prompt('Введите число от 1 до 10');
// if(array.includes(number)){
//     alert('Число содержится в массиве');
// } else{
//     alert('Числа нет в массиве');
// }

//Задание 8
// console.log('abcdef'.split('').reverse().join(''));

//Задание 9
// const array = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];
// const newArray = [];
// for (let row of array) {
//   for (let item of row) {
//     newArray.push(item);
//   }
// }
// console.log(newArray);

//Задание 10
// const array = [];
// array.length = 10;
// for (let index = 0; index < array.length; index++) {
//   array[index] = Math.floor(Math.random() * 10 + 1);
// }
// console.log(array);


// for (let index = 0; index < array.length - 1; index++) {
//     let sum = array[index] + array[index + 1];
//     console.log(`Сумма элемента ${array[index]} и ${array[index + 1]} : ${sum}`);
// }

//Задание 11
// const array = [];
// array.length = 10;
// for (let index = 0; index < array.length; index++) {
//   array[index] = Math.floor(Math.random() * 11);
// }
// console.log(array);

// const evenElements = array.filter(item => item % 2 == 0);
// console.log(evenElements);

//Задание 12
const array = [];
array.length = 6;
for (let index = 0; index < array.length; index++) {
    array[index] = Math.floor(Math.random() * 10 + 1);
}
console.log(array);

let sum = array.reduce((result,item) => result + item );
let average = sum / array.length;
console.log(average.toFixed(2));