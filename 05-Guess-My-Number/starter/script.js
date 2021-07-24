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
  return Number(document.querySelector('.score').textContent);
}

// Calculate highscore
function updateHighScore(score) {
  // Get current value of .highscore
  const highScore = Number(document.querySelector('.highscore').textContent);
  // If score > .highscore value, replace highscore innerHTML
  score > highScore
    ? (document.querySelector('.highscore').textContent = score)
    : null;
}

// Update score
function updateScore(score) {
  currentScore = getScore(); // Mutate currentScore variable
  document.querySelector('.score').textContent = score;
}

// Update message
function updateMessage(message) {
  document.querySelector('.message').textContent = message;
}

// Show/Hide number
function toggleNumber(toggle) {
  toggle === `show`
    ? (document.querySelector('.number').textContent = randomNumber)
    : (document.querySelector('.number').textContent = `?`);
}

// Change background colour to green on win
function backgroundChange(result) {
  // If result is blank, return to dark
  result === `win`
    ? document.body.setAttribute(`class`, `win`)
    : document.body.removeAttribute(`class`);
}

// Capture form submission
document.querySelector(`.check`).addEventListener(`click`, function () {
  const guess = Number(document.querySelector('.guess').value);
  // Check if there is a value
  if (guess) {
    // Make sure the user has guesses left
    if (currentScore > 1) {
      // Make sure player hasn't already one
      if (result !== `Win`) {
        if (guess !== randomNumber) {
          // Reduce score by 1
          updateScore(currentScore - 1);
          // Show message with hint
          guess > randomNumber
            ? updateMessage(`📈 Too high!`)
            : updateMessage(`📉 Too low!`);
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
  } else {
    updateMessage(`🧐 You must enter a number between 1 and 20!`);
  }
});

// On "Again!" click, create a fresh game
document.querySelector(`.again`).addEventListener(`click`, function () {
  freshGame();
});
