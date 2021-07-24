'use strict';

// Build arrays to store each player's variables
const players = [
  {
    score: 0,
    current: 0,
  },
  {
    score: 0,
    current: 0,
  },
];

// Store active player and eventual winner
let activePlayer = 0;
let gameWon = false;

// Grab interface elements
const dice = document.querySelector(`.dice`);
const rollButton = document.querySelector(`.btn--roll`);
const holdButton = document.querySelector(`.btn--hold`);
const newButton = document.querySelector(`.btn--new`);

// Start a fresh game
function freshGame() {
  // Reset all properties for both players
  for (let i = 0; i < players.length; i++) {
    // Update the players array
    players[i].score = 0;
    players[i].current = 0;
    // Update the interface with new array values
    document.querySelector(`#score--${i}`).textContent = 0;
    document.querySelector(`#current--${i}`).textContent = 0;
  }
  // Player 1 always starts the game
  activePlayer = 0;
  // If game won, replace player--winner class with player--active, as a lazy fix for a bug.. doesn't make any difference to the user
  if (gameWon) {
    document.querySelector(`.player--winner`).classList.add(`player--active`);
    document.querySelector(`.player--active`).classList.remove(`player--winner`);
  }
  togglePlayer(true);
  // Reset the winner
  gameWon = false;
}

freshGame();

// Roll dice
rollButton.addEventListener(`click`, function () {
  // If game hasn't been won yet
  if (gameWon === false) {
    // Generate number between 1 and 6
    const randomNumber = Math.trunc(Math.random() * 6) + 1;
    // Show dice image on img.dice
    dice.setAttribute(`src`, `dice-${randomNumber}.png`);
    // If randomNumber !== 1
    if (randomNumber !== 1) {
      // Add randomNumber to .current--activePlayer
      changeCurrent(randomNumber);
    } else {
      // Else toggle player
      togglePlayer();
    }
  }
});

// Change current
function changeCurrent(newCurrent) {
  // Add old and new currents together
  const currentSum = players[activePlayer].current + newCurrent;
  // Change on the backend
  players[activePlayer].current = currentSum;
  // Change on interface
  document.querySelector(`#current--${activePlayer}`).textContent = currentSum;
}

// Toggle player
function togglePlayer(reset = false) {
  // If we're not manually resetting the game, continue to dynamically toggle player
  if (!reset) {
    // Reset score to 0 on interface and backend
    document.querySelector(`#current--${activePlayer}`).textContent = 0;
    players[activePlayer].current = 0;
    // Toggle activePlayer
    activePlayer = activePlayer === 1 ? 0 : 1;
  }
  // Change .player--active
  document.querySelector(`.player--active`).classList.remove(`player--active`);
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--active`);
}

// Hold current score
holdButton.addEventListener(`click`, function () {
  // If game hasn't been won yet
  if (gameWon === false) {
    // Add .score--activePlayer
    const newScore = players[activePlayer].current;
    changeScore(newScore);
  }
});

// Change score
function changeScore(newScore) {
  // Add old and new scores together
  const scoreSum = players[activePlayer].score + newScore;
  // Change on the backend
  players[activePlayer].score = scoreSum;
  // Change on interface
  document.querySelector(`#score--${activePlayer}`).textContent = scoreSum;
  console.log(`Player ${activePlayer + 1} scores ${newScore} points`);
  // If score >= 100, we have a winner!
  if (scoreSum >= 20) {
    winner();
  } else {
    // Otherwise toggle player
    togglePlayer();
  }
}

// Declare a winner
function winner() {
  // Disable functions - incase some tricky git knows how to use the console
  gameWon = true;
  // Update the interface
  document.querySelector(`.player--active`).classList.remove(`player--active`);
  document.querySelector(`.player--${activePlayer}`).classList.add(`player--winner`);
  console.log(`Player ${activePlayer + 1} wins!`);
}

// Create a new game
newButton.addEventListener(`click`, function () {
  freshGame();
});
