let field = document.querySelector('.playing-field');
let square;
let randomColor; //индекс массива color 

let arrayColor = ['transparent', 'red', 'green', 'blue'];
let arrSquares = [];

function getRandomColor(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

class ObjSquare {
  constructor(id, color, point) {
    this.id = id;
    this.color = color;
    this.point = point;
  }
};

class Filed {
  constructor() {
    
  }
  render() {
    for (let i = 1; i <= 100; i++) {
      randomColor = getRandomColor( 0, arrayColor.length);
      square = new ObjSquare(i + 1, arrayColor[randomColor], randomColor)
      field.insertAdjacentHTML('afterbegin', 
        `<div id="${square.id}" class="square ${square.color}" value="${square.point}"></div>`
      )
      console.log(randomColor);
    }
  }
}

const filed = new Filed();

let renderObjSquare = filed.render();

// суммирование баллов


field.addEventListener("click", function(event) { // навешиваем один обработчик на родительский элемент
  
  let squares = document.querySelectorAll('.square')
  console.log(squares.indexOf(event.target)); // в свойстве `target` будет содержаться непосредственно тот элемент, по которому кликнули
});


export default renderObjSquare;