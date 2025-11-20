// Task 8.1
// Написати функцію, яка приймає 1 параметр. 
// Та скадае значення з тим, що передали перший раз і т. д. 
// Все це із замиканнями, наприклад:
function createAdder() {
  let x = 0

  return function(y) {
    x += y
    return x
  }
}

const sum = createAdder()

console.log(sum(4)); // 4
console.log(sum(6)); // 10
console.log(sum(10)); // 20
console.log(sum(7)); // 27

// Task 8.2
// Створити функцію для розрахунку добутку двох чисел, що викликається так: name(5)(2). 
// Функція повинна повертати результат (у середині функції не має бути консоль лога!)

function name(x) {
  return function(y) {
    return x * y
  }
}

console.log(name(5)(2))
console.log(name(2)(3))

// Task 8.3
// Цикл на кожній ітерації пропонує через prompt ввести число більше 100 (але максимум 10 ітерацій циклу). 
// Якщо відвідувач ввів число менше ста – попросити ввести ще раз, і таке інше. 
// Якщо користувач вводить більше ста, текст або цикл закінчує всі ітерації, то функція виводить в консоль останній введення користувача і завершує функцію.

function askNum() {
  let lastNum = null

  for (let i = 0; i < 10; i++) {
    let numInput = prompt("Ввести число больше 100")
    let number = Number(numInput)
    
    if (numInput === null) {      
      console.log("Нажали отмена")
      return lastNum
    }
    lastNum = numInput

    if (number > 100) {
      console.log("Вы ввели число: " + number)
      return number
    }    
  }
  console.log("Закончились попытки, последнее введенное число: " + lastNum)
  return lastNum
}

askNum()