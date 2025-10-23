//Task 1
console.log(1, typeof 1)
console.log('Hello', typeof 'Hello')
console.log('1234567890n', typeof 1234567890n)
console.log('{}', typeof {})
console.log('true', typeof true)
console.log('null', typeof null)
console.log('undefined', typeof undefined)
console.log('Symbol(ID)', typeof Symbol('ID'))

//Task 2
const  divBio = document.querySelector('#bio')

let name = prompt('Ваше имя?', '')
let age = prompt('Ваш возраст?', ' ')
let city = prompt('Город проживания', )

divBio.insertAdjacentHTML('afterBegin', `Меня зовут <b>${name}</b>, мне <b>${age}</b> я с города <b>${city}</b>`);


// Task 3 
const number = 10369
const numStr = String(number)
const arraySplit = numStr.split('')
const addSpace = arraySplit.join(' ')
console.log(addSpace)

