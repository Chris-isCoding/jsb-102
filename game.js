import { entry, findTreasure } from './findTreasure.js';

const forest = document.querySelectorAll('.tree');

function restartGame() {
  // function to restart the game
  const current = document.querySelector('.treasure');
  current.classList.remove('treasure');
  // set all divs to '🎄' and add event listener to them to find the treasure
  forest.forEach((ele) => (ele.innerHTML = '🎄'));

  entry.addEventListener('pointerover', findTreasure);
  hideTreasure();
}

function hideTreasure() {
  // function to hide the treasure
  const randomNumber = Math.floor(Math.random() * forest.length);
  forest[randomNumber].classList.add('treasure');
}

export { restartGame, hideTreasure };
