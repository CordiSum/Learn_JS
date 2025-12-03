// 11.1. Таблиця піфагора
// Вивести таблицю Піфагора (10×10), таблиця повинна бути створена динамічно

function createPifagorTable(size) {
  const table = document.createElement('table')

  for (let row = 1; row <= size; row++) {
    const tr = document.createElement('tr')
    table.appendChild(tr)

    for (let col = 1; col <= size; col++) {
      const td = document.createElement('td')

      td.textContent = row * col
      tr.appendChild(td)
    }
  }
  
  document.body.appendChild(table)

}

createPifagorTable(10)

// 11.2. Кнопка зміни кольору
// Є блок із текстом на сторінці та кнопка. 
// При натисканні на кнопку текст змінює колір. 
// При повторному натисканні – повертається попередній колір

const textWrapper = document.querySelector('.wrapper')
const btn = document.querySelector('#btn')

btn.addEventListener('click', function() {
  if (textWrapper.classList.contains('active')) {
    textWrapper.classList.remove('active')
  } else {
    textWrapper.classList.add('active')
  }
})


// 11.3. Отримання випадкового зображення
// Покласти в папку будь-які зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5.jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg. 
// Вивести зображення, отримане випадковим чином (Math.random)

const images = [
  'https://images.pexels.com/photos/32165705/pexels-photo-32165705.jpeg',
  'https://images.pexels.com/photos/34973702/pexels-photo-34973702.jpeg',
  'https://images.pexels.com/photos/6408280/pexels-photo-6408280.jpeg',
  'https://images.pexels.com/photos/24284368/pexels-photo-24284368.jpeg',
  'https://images.pexels.com/photos/2915957/pexels-photo-2915957.jpeg',
  'https://images.pexels.com/photos/32647726/pexels-photo-32647726.jpeg',
  'https://images.pexels.com/photos/16795713/pexels-photo-16795713.jpeg',
  'https://images.pexels.com/photos/31665649/pexels-photo-31665649.jpeg',
  'https://images.pexels.com/photos/10002505/pexels-photo-10002505.jpeg',
  'https://images.pexels.com/photos/10761017/pexels-photo-10761017.jpeg'
]

function showRandomImage() {
  const randomIndex = Math.floor((Math.random() * images.length))
  const imgTag = document.querySelector('#random-image')

  imgTag.src = `${images[randomIndex]}`
}

showRandomImage()

