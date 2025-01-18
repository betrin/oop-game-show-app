/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Game.js */

class Game {
  constructor () {
    this.missed = 0;
    this.phrases = [
      new Phrase('Beat around the bush'), 
      new Phrase('A piece of cake'), 
      new Phrase('The harder I work the luckier I get'),
      new Phrase('Curiosity killed the cat'),
      new Phrase('Bite the bullet') 
    ];
    this.activePhrase = null;
  }

  /**
  * Selects random phrase from phrases property
  * @return {Object} Phrase object chosen to be used
  */
  getRandomPhrase() {
    const randomIndex = Math.floor(Math.random()* this.phrases.length)
    return this.phrases[randomIndex];
  }

  /**
  * Begins game by selecting a random phrase and displaying it to user
  */
  startGame() {
    const phrase = game.getRandomPhrase();
    phrase.addPhraseToDisplay();
    this.activePhrase = phrase;
    startScreen.style.display = "none";
  }

  /* parent Interaction method which will distribute func and date around other classes
  */
  handleInteraction (letter) {
    // let pressedKey = e.target.innerHTML;
      const buttonPressed = Array.from(allowedKeys).find((button) => button.innerHTML === letter);
      buttonPressed.classList.add('chosen');
    if (this.activePhrase.checkLetter(letter)){
      this.activePhrase.showMatchedLetter(letter);
      if (game.checkForWin()) {
        this.gameOver();
      }
    } else {
      buttonPressed.classList.add('wrong');
      game.removeLife();
    }
  }

  /**
  * Checks for winning move
  * @return {boolean} True if game has been won, false if game wasn't
  won
  */
  checkForWin() {
    var hiddenLetters = phraseContainer.querySelectorAll('.hide');
    if (hiddenLetters.length > 0) {
      // Not win
      return false;
    } else {
      return true;
    }
  };

  /**
  * Increases the value of the missed property
  * Removes a life from the scoreboard
  * Checks if player has remaining lives and ends game if player is out
  */
  removeLife() {
    this.missed += 1;
    if (this.missed > 4) {
      this.gameOver();
    } else {
      let lives = scoreboard.getElementsByTagName('img');
      let heartIndex = 5 - this.missed; 
      lives[heartIndex].src = './images/lostHeart.png';
    }
  };

  gameOver() {
      // Win 
    if(this.missed < 5) {
      startScreen.style.display = "flex";
      startScreen.classList.remove('lose');
      startScreen.classList.add('win');
      gameOverMessage.innerHTML = 'Congratulation, you won!';
    } else {
      // Lose 
      startScreen.style.display = "flex";
      startScreen.classList.remove('win');
      startScreen.classList.add('lose');
      gameOverMessage.innerHTML = 'Game Over, want to try again?';
    }
    
    // RESET the keys
    phraseList.innerHTML = '';
    allowedKeys.forEach(key => {
      if (key.classList.contains('chosen')) {
        key.classList.remove('chosen');
        key.classList.remove('wrong');
      }
    })
    
    // RESET the lives
    let lives = scoreboard.querySelectorAll('img[src="./images/lostHeart.png"]');
    lives.forEach(live => {
      live.src = './images/liveHeart.png';
    })
  }

}

