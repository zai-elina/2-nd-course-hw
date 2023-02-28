//Задание 1
// const findMinNumber = (a, b) => a < b ? a: b;
// console.log(findMinNumber(6,6));

//Задание 2
// const checkEven = number => number % 2 == 0? 'Число четное':  'Число нечетное';
// console.log(checkEven(9));

//Задание 3
// function calcSquare(number) {
//     console.log(number**2);
// }
// calcSquare(7);

// function calcSqrt(number) {
//     let result = Math.sqrt(number);
//     if (isNaN(result)){
//         return "Число должно быть положительным";
//     }
//     return result;
// }

// console.log(calcSqrt(49));

//Задание 4
// function showMessage() {
//   const age = +prompt("Сколько вам лет?");
//   if (age < 0) {
//     alert("Вы ввели неправильное значение");
//   } else if (age <= 12) {
//     alert("Привет, друг!");
//   } else {
//     alert("Добро пожаловать!");
//   }
// }
// showMessage();

//Задание 5
// function multiply(a, b) {
//   if (isNaN(a) || isNaN(b)) {
//     return "Одно или оба значения не являются числом";
//   }
//   return a * b;
// }
// console.log(multiply(2, "a"));

//Задание 6
// function findCube(number) {
//   if (isNaN(number)) {
//     return "Переданный параметр не является числом";
//   }

//   return `${number} в кубе равняется ${number ** 3}`;
// }

// for (let i = 0; i <= 10; i++) {
//   console.log(findCube(i));
// }

//Задание 7
function displayTheTimeOfYear(monthNumber) {
  if (isNaN(monthNumber) || monthNumber < 0 || monthNumber > 12) {
    return "Такого номера месяца не существует";
  } else if ((monthNumber >= 1 && monthNumber <= 2) || monthNumber === 12) {
    return "Зима";
  } else if (monthNumber >= 3 && monthNumber <= 5) {
    return "Весна";
  } else if (monthNumber >= 6 && monthNumber <= 8) {
    return "Лето";
  } else if (monthNumber >= 9 && monthNumber <= 11) {
    return "Осень";
  }
}
console.log(displayTheTimeOfYear("о"));
