/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * app.js */

const allowedKeys = document.querySelectorAll('.key');
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
Array.from(allowedKeys).forEach(key => {
  key.addEventListener('click', function (e) {
    const keyVal = key.textContent;
    game.handleInteraction(keyVal);
  })
})


// Bind keyboard key press to call on screen button click event
document.addEventListener('keydown', (e) => {
  if (/[a-zA-Z]/.test(e.key)) {
    const letter = e.key.toLowerCase();
    const buttonExists = Array.from(allowedKeys).find((button) => button.innerHTML === letter);
    if (buttonExists){
      game.handleInteraction(letter);
    }
   
  }
});

// game.gameOver();
// game.removeLife()