//Задание 1
// let str = "Привет, мир!"
// str = str.toUpperCase();
// console.log(str);

//Задание 2
// function searchStart(array,str) {
//     array = array.map(item => item.toLowerCase());

//     let result = [];
//     result = array.filter(item => item.startsWith(str.toLowerCase()));
//     return result;
// }
//
// console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));

//Задание 3
// let number = 32.58884;

// console.log('До меньшего целого',Math.floor(number));
// console.log('До большего целого',Math.ceil(number));
// console.log('До ближайшего целого',Math.round(number));

//Задание 4
// const array = [52, 53, 49, 77, 21, 32];
// console.log('Наименьшее число', Math.min(...array));
// console.log('Наибольшее число', Math.max(...array));

//Задание 5
// function getRandomNumber() {
//     return Math.round(Math.random() * (10 - 1) + 1);
// }
// console.log(getRandomNumber());

//Задание 6
// function getRandomArrNumbers(number) {
//     let array = [];
//     array.length = Math.floor(number / 2);

//     for (let index = 0; index < array.length; index++) {
//         array[index] = Math.round(Math.random() * number);
//     }
//     return array;
// }
// console.log(getRandomArrNumbers(12));

//Задание 7
// function getRandomNumber(minValue, maxValue) {
//     return Math.round(Math.random() * (maxValue - minValue) + minValue);
// }
// console.log(getRandomNumber(-2,4));

//Задание 8
// let currentDate = new Date("3/6/2023");
// console.log(currentDate);

//Задание 9
// let currentDate = new Date();
// currentDate.setDate(currentDate.getDate() + 73);
// console.log(currentDate);

//Задание 10
// function formatTime(time) {
//     if (time < 10) {
//         time = "0" + time;
//     }
//     return time;
// }

// function showDate(date) {
//   const days = [
//     "Воскресенье",
//     "Понедельник",
//     "Вторник",
//     "Среда",
//     "Четверг",
//     "Пятница",
//     "Суббота",
//   ];
//   const months = [
//     "Январь",
//     "Февраль",
//     "Март",
//     "Апрель",
//     "Май",
//     "Июнь",
//     "Июль",
//     "Август",
//     "Сентябрь",
//     "Октябрь",
//     "Ноябрь",
//     "Декабрь",
//   ];

//   let fullDate =
//     "Дата: " +
//     date.getDate() +
//     " " +
//     months[date.getMonth()] +
//     " " + date.getFullYear()+
//     " - это " +
//     days[date.getDay()] +
//     ".";

//   let fullTime =
//     "Время: " +
//     date.getHours() +
//     ":" +
//     formatTime(date.getMinutes()) +
//     ":" +
//     formatTime(date.getSeconds());

//     return fullDate + '\n' + fullTime;
// }

// let myDate = new Date();

// console.log(showDate(myDate));

//Задание 11
function memorizeTheWords() {
  let words = [
    "Яблоко",
    "Груша",
    "Дыня",
    "Виноград",
    "Персик",
    "Апельсин",
    "Мандарин",
  ];

  words = words.sort(() => Math.random() - 0.5);
  alert(words);

  let firstWord = prompt("Какое слово было первым?").toLowerCase();
  let lastWord = prompt("Какое слово было последним?").toLowerCase();

  if (
    firstWord === words[0].toLowerCase() &&
    lastWord === words[words.length - 1].toLowerCase()
  ) {
    alert("Вы угадали оба слова!");
  } else if (
    firstWord === words[0].toLowerCase() ||
    lastWord === words[words.length - 1].toLowerCase()
  ) {
    alert("Вы были близки к победе!");
  } else {
    alert("Вы ответили неверно");
  }
}
