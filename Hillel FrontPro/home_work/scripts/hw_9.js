let ladder = {
  step: 0,
  up: function () { // підніматиме вас на одну сходинку
    step = ++this.step
    return this
  },
  down: function () { // опускатиме вас на одну сходинку
    step = --this.step
      return this
  },
  showStep: function () {
  step = this.step // показує поточну сходинку
  console.log(step)
  return this
  }
};

ladder.up().up().down().showStep(); 
