// Task 6.1
// Створіть об'єкт, що містить інформацію про користувача, таку як ім'я, вік, місце проживання тощо. 
// Створіть метод об'єкту для отримання та відображення цих даних.

const user = {
  name: "Semen",
  age: 18,
  city: "Dnipro",
  hobby: "Music",

  showInfo: function() {
    console.log("Имя: " + user.name);
    console.log("Возраст: " + user.age);
    console.log("Место жительства: " + user.city);
    console.log("Хобби: " + user.hobby);
  }
}

user.showInfo()

// Task 6.2
// Маєте масив чисел. Використовуйте вже існуючі методи масиву для створення нового масиву, 
// в якому лише парні числа з оригінального масиву.

const arrayNumbers = []

for (let i = 1; i <=20; i++) {
  arrayNumbers.push(i)
}

const arrayEvenNumbers = arrayNumbers.filter((arrayNumbers) => arrayNumbers % 2 === 0)

console.log(arrayEvenNumbers);

// Task 6.3
// Створіть об'єкт, який матиме одну властивість з масивом об'єктів. Які представляють контакти у вашій контактній книзі. 
// Кожен об'єкт має містити ім'я, номер телефону та адресу електронної пошти. 
// Додайте метод для пошуку контакту за ім'ям та метод для додавання нових контактів.


let contactsBook = {
  contacts: [
    { name: "Valera",
      phone: "099-999-99-90",
      email: "valeragmail.com" 
    },
    { name: "Vasya",
      phone: "099-999-99-91",
      email: "vasya@gmail.com" 
    },
    { name: "Oleg",
      phone: "099-999-99-92",
      email: "oleg@gmail.com" 
    }
  ],

  findContact: function(name) {
    for (let i = 0; i < this.contacts.length; i++) {
      if (this.contacts[i].name === name) {
        console.log("Contact found: " + ` Name: ${this.contacts[i].name}, Phone: ${this.contacts[i].phone}, Email: ${this.contacts[i].email} ` )
        return
      }
    }
    console.log("Contact not found");
  },

  addContact: function(name, phone, email) {
    this.contacts.push(
      {
        name: name,
        phone: phone,
        email: email
      }
    )
    console.log("Contact added successfully");
  }
}

contactsBook.findContact("Vasya")
contactsBook.addContact("Freddy", "099-000-00-00", "freddy@gmail.com")
contactsBook.findContact("Freddy");
contactsBook.findContact("Bogdan");
