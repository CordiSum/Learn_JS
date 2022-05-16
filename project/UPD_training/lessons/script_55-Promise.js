"use strict";

// console.log('Запрос данных...');

// const req = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Подготовка");
  
//     const product = {
//       name: 'TV',
//       price: '2010'
//     };
  
//     resolve(product);
//   }, 2000);
// });

// req.then((product) => {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       product.status = 'order';
//       // reject()
//       resolve(product);
//     }, 2000)
//   }).then(data => {
//     data.modify = true
//     return data    
//   }).then((data) => {
//     console.log(data)
//   }).catch(() => {
//     console.error("Произошла ошибка");
//   }).finally(() => {
//     console.log("Finally");
//   })
// })

const test = time => {
  return new Promise(resolve => {
    setTimeout(() => resolve(), time)
  })
}

// test(1000).then(() => console.log('1000 ms'))
// test(1000).then(() => console.log('2000 ms'))

// выводит в консоль после того как все промисы отработали
// Promise.all([test(1000), test(2000)]).then(() => {
//   console.log('All');
// })

// выводит в консоль после того как любой из промисов отработал
Promise.race([test(1000), test(2000)]).then(() => {
  console.log('All');
})