'use strict';

// Grab all instances of open and close triggers
const modalOverlay = document.querySelectorAll(`.modal, .overlay`);
const showTriggers = document.querySelectorAll(`.show-modal`);
const hideTriggers = document.querySelectorAll(`.close-modal, .overlay`);

// Function to toggle modal show/hide modal & overlay
const toggleModal = function (state) {
  for (let i = 0; i < modalOverlay.length; i++) {
    state === `show`
      ? // Remove hidden class from modal and overlay to show them
        modalOverlay[i].classList.remove(`hidden`)
      : // Add hidden class from modal and overlay to hide them
        modalOverlay[i].classList.add(`hidden`);
  }
};

// Show modal & overlay on showTriggers click
showTriggers.forEach(element => {
  element.addEventListener(`click`, function () {
    toggleModal(`show`);
  });
});

// Hide modal & overlay on hideTriggers click
hideTriggers.forEach(element => {
  element.addEventListener(`click`, function () {
    toggleModal(`hide`);
  });
});

// On press escape key, close the modal
document.addEventListener(`keydown`, function (e) {
  if (e.key === `Escape` && !modal.classList.contains(`hidden`)) {
    toggleModal(`hide`);
  }
});
