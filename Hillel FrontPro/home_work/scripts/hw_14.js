// Пишемо свій слайдер зображень, який повинен:

// Відображати зображення та кнопки Next, Prev з боків від зображення.
// При кліку на Next - показуємо наступне зображення.
// При кліку на Prev - попереднє
// При досягненні останнього зображення - ховати кнопку Next. Аналогічно з першим зображенням і кнопкою Prev
// Кількість слайдів може бути будь-якою
// Додати можливість навігації через точки під слайдами

let currentIndex = 0

const slider = document.querySelector('.slider')
const btnPrev = document.querySelector('.slider__btn--prev')
const btnNext = document.querySelector('.slider__btn--next')
const slideTrack = document.querySelector('.slider__track')
const slides = slideTrack.children
const dots = slider.querySelectorAll('.dot')

const countSlide = slides.length
let track = 0

// ================== КНОПКИ ==================

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    currentIndex--
    update()
  }
})

btnNext.addEventListener('click', () => {
  if (currentIndex < countSlide - 1) {
    currentIndex++
    update()
  }
})

// ================== ТОЧКИ ==================

dots.forEach((dot, index) => {
  dot.addEventListener('click', () => {
    currentIndex = index
    update()
  })
})

// ================== ОБНОВЛЕНИЕ ==================

function update() {
  updateSlider()
  updateDots()
  updateButtons()
}

// двигаем слайды
function updateSlider() {
  const slideWidth = slides[0].offsetWidth
  track = currentIndex * slideWidth
  slideTrack.style.transform = `translateX(-${track}px)`
}

// обновляем активную точку
function updateDots() {
  dots.forEach(dot => dot.classList.remove('active'))
  dots[currentIndex].classList.add('active')
}

// скрытие next, prev 
function updateButtons() {
  if (currentIndex === 0) {
    btnPrev.style.display = 'none'
  } else {
    btnPrev.style.display = ''
  }

  if (currentIndex === countSlide - 1) {
    btnNext.style.display = 'none'
  } else {
    btnNext.style.display = ''
  }
}

// ================== ИНИЦИАЛИЗАЦИЯ ==================
update()