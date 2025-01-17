/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const allowedKeys = document.getElementById('qwerty');
const btnReset = document.getElementById('btn__reset');
const phraseContainer = document.getElementById('phrase');
const phraseList = phraseContainer.querySelector('ul');
const startScreen = document.getElementById('overlay');
const gameOverMessage = document.getElementById('game-over-message');
const scoreboard = document.getElementById('scoreboard');
// const allowedKeys = allowedKeysContainer.querySelectorAll('button');
var  game;

  // Start / Reset button
btnReset.addEventListener('click', function (e) {
  game = new Game();
  game.startGame();
}) 

//On screen Button click event
allowedKeys.addEventListener('click', function (e) {
  game.handleInteraction(e);
})

// Bind keyboard key press to call on screen button click event
document.addEventListener('keydown', (e) => {
  if (/[a-zA-Z]/.test(e.key)) {
    const letter = e.key.toLowerCase();
    const buttonPressed = Array.from(allowedKeys.querySelectorAll('.key')).find((button) => button.innerHTML === letter);
    if (buttonPressed) {
      buttonPressed.click();
    }
  }
});

// game.gameOver();
// game.removeLife()