'use strict';

let randomNumber = generateNumber();
let currentScore = getScore();
let result = '';

console.log(`Game started`);

// Start a fresh game
function freshGame() {
  // Generate a random number
  randomNumber = generateNumber();
  // Reset the game result
  result = '';
  // Set the interface
  updateScore(20);
  toggleNumber(`hide`);
  updateMessage(`Start guessing...`);
  backgroundChange(`default`);
  console.log(`Game reset`);
}

// Generate a random number between 1 and 20
function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Grab the score from .score
function getScore() {
  return Number(document.querySelector('.score').innerHTML);
}

// Calculate highscore
function updateHighScore(score) {
  // Get current value of .highscore
  const highScore = Number(document.querySelector('.highscore').innerHTML);
  // If score > .highscore value, replace highscore innerHTML
  if (score > highScore) {
    document.querySelector('.highscore').innerHTML = score;
  }
}

// Update score
function updateScore(score) {
  currentScore = score;
  document.querySelector('.score').innerHTML = score;
}

// Update message
function updateMessage(message) {
  document.querySelector('.message').innerHTML = message;
}

// Show/Hide number
function toggleNumber(toggle) {
  if (toggle === `show`) {
    document.querySelector('.number').innerHTML = randomNumber;
  } else {
    document.querySelector('.number').innerHTML = `?`;
  }
}

// Change background colour to green on win
function backgroundChange(result) {
  // If result is blank, return to dark
  if (result === `win`) {
    document.body.setAttribute(`class`, `win`);
  } else {
    document.body.removeAttribute(`class`);
  }
}

// Capture form submission
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector('.guess').value);
  // Make sure the user has guesses left
  if (currentScore !== 0) {
    // Make sure player hasn't already one
    if (result !== `Win`) {
      if (guess !== randomNumber) {
        // Reduce score by 1
        updateScore(currentScore - 1);
        // Show message with hint
        if (guess > randomNumber) {
          updateMessage(`📈 Too high!`);
        } else {
          updateMessage(`📉 Too low!`);
        }
      } else {
        result = `Win`;
        toggleNumber(`show`);
        updateHighScore(currentScore);
        updateMessage(`🎉  Correct number!`);
        backgroundChange(`win`);
      }
    } else {
      updateMessage(`🙈  You've already won!`);
    }
    console.log(`Player guessed ${guess}`);
  } else {
    // Player is out of guesses
    updateMessage(`😭 You're out of guesses`);
    toggleNumber(`show`);
    result = `Loss`;
  }
});

// On "Again!" click, create a fresh game
document.querySelector(`.again`).addEventListener(`click`, function () {
  freshGame();
});

// Logging/Debugging
//console.log(`Number: ${randomNumber}, Score: ${currentScore}`);
