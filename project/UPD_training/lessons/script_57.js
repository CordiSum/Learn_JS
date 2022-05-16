"use strict";

// filter
// ======

// const names = ['Dimas', 'Alyona', 'Daniel', 'Alex', 'Alexandra'];

// const shortNames = names.filter(function(name) {
//   return name.length > 5
// })

// console.log(shortNames);

// answer
// ======

// let answers = ['DImas', 'AlyOna', 'Daniel', 'Alex', 'AlexANdra'];

// answers = answers.map(item => item.toLowerCase())

// console.log(answers);

// every/some
// ======

// const some = [4, 'ads', 'wdasd1']
// // совпадает хоть один элемент из массива
// // console.log(some.some(item => typeof(item) === 'number'));
// // если все совпадают
// console.log(some.every(item => typeof(item) === 'number'));

// reduce
// ======

// const arr = [4, 5, 1, 3, 2, 6]

// const res = arr.reduce((sum, current) => sum + current)

// console.log(res);


const obj = {
  dimas: 'persone',
  alyona: 'persone',
  daniel: 'persone',
  cat: 'animal'
}

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0])

console.log(newArr);