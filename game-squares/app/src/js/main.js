import 'webp-in-css/polyfill';
import {renderObjSquare} from './squares';



document.addEventListener('DOMContentLoaded', () => {

  const start = document.querySelector('.start');
  const newGame = document.querySelector('.new-game');
  const points = document.querySelector('.points');
  const timerWrap = document.querySelector('.timer-wrap');
  const tableTop = document.querySelector('.table-top');




  // start timer
  start.addEventListener('click', () => {
    countdown();
  })

  // timer
  let timer;
  let playTime = 3;

  // let seconds = Math.floor((playTime / 1000) % 60);
  // let minutes = Math.floor((playTime / 1000 / 60) % 60);

  function countdown() {
    timerWrap.innerHTML = playTime;
    playTime--;
    if (playTime < 0) {
      clearTimeout(timer)
      console.log('0');
    } else {
      timer = setTimeout(countdown, 1000)
    }
  }
});  