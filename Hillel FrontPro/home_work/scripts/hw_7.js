// Task 7.1
// Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 
// 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". 
// Вихідний рядок та символи для видалення задає користувач.

let words = prompt("Введите слова, например:", "Привет, мир!")
let arrLetters = prompt("Введите буквы через запятую, которые хотите удалить со слов, например: ", "р, е").split(",")
arrLetters = arrLetters.map(item => item.trim())
let result = ''

function removeLetter(words, letters) {
  for (const chart of words) {
    if (!letters.includes(chart)) {
      result += chart
    }
  }

  return result
}

removeLetter(words, arrLetters)
console.log("Результат выполнения функции: ", result)


// Task 7.1 Используем reduce()
const words = prompt("Введите слова, например:", "Привет, мир!")
const arrLetters = prompt("Введите буквы через запятую, которые хотите удалить, например: ", "р,т").split(",").map(item => item.trim())

function removeLetter(words, letters) {
  return words.split('').reduce((acc, char) => {
    if (!letters.includes(char)) {
      acc += char
    }
    return acc
  }, '')
}

let filtered = removeLetter(words, arrLetters)
console.log("Выполненный результат:", filtered)


// Дано масив з елементами різних типів. 
// Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.
// Task 7.2

let arr = [1, 2, 3, 'a', 'b', 'c', 'd', 5, 6, 'e', 7];

function average(arr) {
  let sum = 0
  let count = 0

  for (let item of arr) {
    if (typeof item === 'number') { 
      sum = sum + item
      count++
    }
  }

  if (count === 0) {
    return 0
  }

  let average = sum / count
  return average
}

let result = average(arr);
console.log(result)

// Task 7.2 Вариант с использованием reduce()
const arr = [1, 2, 3, 'a', 'b', 'c', 'd', 5, 6, 'e', 7];

const average = arr => {  
  const result = arr.reduce((acc, item) => {
    if (typeof item === "number") {
      acc.sum += item
      acc.count++
    } 
    return acc
  }, {sum: 0, count: 0})

  return result.count === 0 ? 0 : result.sum / result.count
}

let result = average(arr)
console.log(result)

//Task 7.3
//Реалізуйте функцію removeElement(array, item), щоб видалити елемент item з масиву array.


const array = [1,2,3,4,5,6,7,8,9]
let newArray = []

function removeElement(array, item) {
  newArray = array.filter(i => i !== item)
}

removeElement(array, 4)
console.log(newArray)