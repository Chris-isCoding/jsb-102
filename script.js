import { entry, findTreasure } from './findTreasure.js';

import { hideTreasure, restartGame } from './game.js';

// wait for the window to load before hiding the treasure
window.addEventListener('load', hideTreasure);

// create a restart button
const restartButton = document.createElement('button');

restartButton.id - 'restartGame';
restartButton.innerText = 'Restart game';
restartButton.style.cursor = 'pointer';
restartButton.style.fontSize = '2rem';
document.body.appendChild(restartButton);

// add event listeners to the entry div and the restart button
entry.addEventListener('pointerover', findTreasure);
restartButton.addEventListener('pointerdown', restartGame);
