// // Task 4.1

let answer = prompt("What is your name?", "")
alert("Hello," + answer +  "! How are you?")

// // Task 4.2
let number = prompt("Enter a three-digit number", "")

let strNum = String(number)
let num1 = strNum[0], num2 = strNum[1], num3 = strNum[2]

if (num1 === num2 && num2 === num3) {
  alert("all numbers are the same")
} else if (num1 === num2 || num1 === num3 || num2 === num3 ) {
  alert("there are identical numbers")
} else {
  alert("not the same numbers")
}

// // Task 4.3

let year = prompt("Сколько тебе лет", "")
let city = prompt("В каком городе ты живешь?", "")
let sport = prompt("Твой любимый спорт?", "")

if (year === null) {
  year = "Ты не хочешь указывать свой возраст, ну и ладно"
} else {
  year = "Тебе " + year
}

if (city === "Киев") {
  city = ", ты живешь в столице Украины"
} else if (city === "Вашингтон") {
  city = ", ты живешь в столице Америки"
} else if (city === "Лондон") {
  city = ", ты живешь в столице Англии"
} else if (city === null) {
  city = ", не хочешь указывать город, ну и ладно"
} else {
  city = ", ты живешь в городе " + city
}

if (sport === "футбол" || sport === "Футбол") {
  sport = ". Хочешь быть как Месси?"
} else if (sport === "баксетбол" || sport === "Баксетбол") {
  sport = ". Хочешь быть как Майкл Джордан?"
} else if (sport === "бокс" || sport === "Бокс") {
  sport = ". Хочешь быть как Усик, тренируйся!"
} else if (sport === null) { 
  sport = ". По тебе видно, что ты не интересуешься спортом!"
} else {
  sport = ". " + sport + ", замечательный выбор!"
}



alert(year + city + sport )

// // Task 4.4

let numOrStr = prompt('input number or string');

switch (true) {
	case (numOrStr === null):
		console.log('ви скасували');
		break;
	case (numOrStr.trim() === ''):
		console.log('Empty String');
		break;
	case (isNaN( +numOrStr)):
		console.log(' number is Ba_NaN');
		break;
	default:
		console.log('OK!');
		break;
}

console.log(numOrStr)

