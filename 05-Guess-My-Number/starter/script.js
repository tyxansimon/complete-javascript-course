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
  console.log(`Game reset`);
}

// Generate a random number between 1 and 20
function generateNumber() {
  return Math.trunc(Math.random() * 20) + 1;
}

// Grab the score from .score
function getScore() {
  return Number(document.getElementsByClassName('score')[0].innerHTML);
}

// Calculate highscore
function updateHighScore(score) {
  // Get current value of .highscore
  const highScore = Number(
    document.getElementsByClassName('highscore')[0].innerHTML
  );
  // If score > .highscore value, replace highscore innerHTML
  if (score > highScore) {
    document.getElementsByClassName('highscore')[0].innerHTML = score;
  }
}

// Update score
function updateScore(score) {
  currentScore = score;
  document.getElementsByClassName('score')[0].innerHTML = score;
}

// Update message
function updateMessage(message) {
  document.getElementsByClassName('message')[0].innerHTML = message;
}

// Show/Hide number
function toggleNumber(toggle) {
  if (toggle === `show`) {
    document.getElementsByClassName('number')[0].innerHTML = randomNumber;
  } else {
    document.getElementsByClassName('number')[0].innerHTML = `?`;
  }
}

// Capture form submission
function checkGuess(e) {
  const guess = Number(document.getElementsByClassName('guess')[0].value);
  // Make sure the user has guesses left
  if (currentScore !== 0) {
    // Make sure player hasn't already one
    if (result !== `Win`) {
      if (guess !== randomNumber) {
        // Reduce score by 1
        updateScore(currentScore - 1);
        // Show message with hint
        if (guess > randomNumber) {
          updateMessage(`Too high!`);
        } else {
          updateMessage(`Too low!`);
        }
      } else {
        toggleNumber(`show`);
        updateHighScore(currentScore);
        updateMessage(`You guessed it!`);
        result = `Win`;
      }
    } else {
      updateMessage(`You've already won, dingus!`);
    }
    console.log(`Player guessed ${guess}`);
  } else {
    // Player is out of guesses
    updateMessage(`You're out of guesses :(`);
    toggleNumber(`show`);
    result = `Loss`;
  }
}

// Logging/Debugging
//console.log(`Number: ${randomNumber}, Score: ${currentScore}`);
