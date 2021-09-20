'use strict';

function User(name, id) {
	this.name = name;
	this.id = id;
	this.human = true;
	this.hello = function() {
		console.log(`Hello ${this.name}`);
	}
}

User.prototype.exit = function() {
	console.log(`Пользователь ${this.name} вышел` );
}

const a = new User("Dima", 33)
const b = new User("Alona", 33)

a.exit()

a.hello();
b.hello();


console.log(a, b);

