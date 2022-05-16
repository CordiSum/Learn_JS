"use strict";
const persone = {
  name: 'Dimas',
  age: 35,

  get userAge() {
    return this.age
  },

  set userAge(num) {
    this.age = num
  }
}



console.log(persone.userAge);
console.log(persone.userAge = 34);