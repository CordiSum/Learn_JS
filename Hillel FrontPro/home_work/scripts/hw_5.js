// Task 5.1
let str = ''
for (let i = 20; i <= 30; i += 0.5) {
  str += i + ' ';
}

console.log(str.trim());



// Task 5.2 
const exchange_rate = 26

for (let i = 10; i <= 100; i += 10) {
  console.log(exchange_rate * i)
}


// Task 5.3
let number = +prompt('Введите целове число',)

if (Number.isInteger(number)) {

  for (let i = 1; i <= 100; i++) {
    if (i * i <= number) {
      console.log(i)
    }
  }
} else {
  alert('Вы ввели не целое число, введите целое например 18',)
  location.reload();
}

// Task 5.4

let primeNum = +prompt('Введите число',)
let isPrime = true
let i = 2

if (primeNum <= 1) isPrime = false
if (primeNum === 2) isPrime = true

while (i <= primeNum / 2) {
  if (primeNum % i === 0) {
    isPrime = false
    break;
  }
  i += 1
}

if (isPrime) {
  alert(primeNum + ' — простое число');
} else {
  alert(primeNum + ' — НЕ простое число');
}



