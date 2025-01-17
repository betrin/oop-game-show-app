/* Treehouse FSJS Techdegree
 * Project 4 - OOP Game App
 * Phrase.js */

class Phrase {
  constructor (phrase) {
    this.phrase = phrase.toLowerCase();
  }


  /**
  * Display phrase on game board
  */
  addPhraseToDisplay() {
    var splitLetters = this.phrase.split('');
    let hiddenHTML = '';
    
    splitLetters.forEach(letter => {
      if (letter !== ' ') {
        hiddenHTML += `<li class="hide letter ${letter}">${letter}</li>`;
      } else {
        hiddenHTML += `<li class="space">${letter}</li>`;
      }
    });

    phraseList.insertAdjacentHTML('beforeend', hiddenHTML);
  }

  /**
  * Checks if passed letter is in phrase
  * @param (string) letter - Letter to check
  */
  checkLetter(e) {
  
    const currentLetter = e.target.innerHTML;
    if (game.activePhrase.phrase.includes(currentLetter)){
      this.showMatchedLetter(currentLetter);
      e.target.classList.add('chosen');
      game.checkForWin();
    } else {
      e.target.classList.add('wrong');
      game.removeLife();
    }
  }

  /**
  * Displays passed letter on screen after a match is found
  * @param (string) letter - Letter to display
  */
  showMatchedLetter(letter) {
    let matched = phraseContainer.querySelectorAll(`.${letter}`);
    matched.forEach(matchedLetter => {
        matchedLetter.classList.remove('hide');
        matchedLetter.classList.add('show');
      }
    );
  };

  // get checkLetter() {
  //   return this.phrase.contains(letter);
  // }
}

// STOPPED AT FIGURING OUT WHERE TO RUN CHECK FOR WIN