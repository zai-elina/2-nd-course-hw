//Задание 1
// const mult = (array) => array.reduce((mult, item) => mult * item, 1);

// const sum = (array) => array.reduce((sum, item) => sum + item);

// function getResult(array, callback) {
//   let result;
//   result = callback(array);

//   return result;
// }

// console.log(getResult ([3, 4, 1, 9], mult));
// console.log(getResult ([3, 4, 1, 9], sum));


//Задание 2
// function getSortedArrayObj(users) {
//   for (let i = 0; i < users.length - 1; i++) {
//     for (let j = 0; j < users.length - i - 1; j++) {
//       if (users[j].age > users[j + 1].age) {
//         let temp = users[j];
//         users[j] = users[j + 1];
//         users[j + 1] = temp;
//       }
//     }
//   }

//   return users;
// }

// const users = [
//   { name: "Jon", age: 22 },
//   { name: "Richard", age: 18 },
//   { name: "Anton", age: 32 },
//   { name: "Lida", age: 23 },
//   { name: "Bob", age: 44 },
// ];
// console.log(getSortedArrayObj(users));


//Задание 3
// const reversArr = array => array.reverse();

// const toNumberArr = array => {
//   array = array.map(value => +value).filter(value => !isNaN(value));
//   return array;
// };

// const each = (array,callback) => {
//   return callback(array);
// };

// const arr1 = [1, '4', 9, 'two'];
// console.log(each(arr1, reversArr));

// const arr2 = [1, '4', false, 9, 'two'];
// console.log(each(arr2, toNumberArr));


//Задание 4
// function getdate(){
//   const interval = setInterval(() => {
//     let date = new Date();
//     console.log(date);
//   }, 3000);

//   setTimeout(() => {
//     clearInterval(interval);
//     console.log('30 секунд прошло');
//   },30000);
// }

// getdate();


//Задание 5
function calling(callback) {
  console.log('Звоню!');
};

function beeps(callback) {
  setTimeout(() => {
      console.log('Идут гудки...');
      callback();
  }, 1000);
}

function talk() {
  console.log('Разговор')
}

calling();
beeps(talk);