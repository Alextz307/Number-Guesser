'use strict';

let score = 20;
let highScore = 0;

const generateRandom = () => Math.trunc(Math.random() * 20) + 1;

let secretNumber = generateRandom();

const guessElement = document.querySelector('.guess');
const numberElement = document.querySelector('.number');
const bodyElement = document.querySelector('body');
const scoreElement = document.querySelector('.score');

const displayMessage = message => (document.querySelector('.message').textContent = message);

document.querySelector('.check').addEventListener('click', () => {
  const value = Number(guessElement.value);

  if (!value) {
    displayMessage('⛔️ No number!');
    score -= 1;
  } else if (value === secretNumber) {
    displayMessage('🎉 Correct number!');

    bodyElement.style.backgroundColor = '#60b347';

    numberElement.style.width = '30rem';
    numberElement.textContent = secretNumber;

    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else {
    displayMessage(value < secretNumber ? '📉 Too low!' : '📈 Too high!');
    score -= 1;
  }

  scoreElement.textContent = score;

  if (score === 0) {
    displayMessage('😥 You lost the game!');
  }
});

document.querySelector('.again').addEventListener('click', () => {
  numberElement.style.width = '15rem';
  numberElement.textContent = '?';

  bodyElement.style.backgroundColor = '#222';

  displayMessage('Start guessing...');

  guessElement.value = '';

  score = 20;
  scoreElement.textContent = score;

  secretNumber = generateRandom();
});
