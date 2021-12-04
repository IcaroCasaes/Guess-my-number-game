'use strict';

/*
console.log(document.querySelector('.message').textContent);
';

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value;
*/

let secretNumber = Math.trunc(Math.random() * 30) + 1;
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const setBackgroundColor = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //when there's no guess
  if (!guess) {
    displayMessage('⛔ No number inserted!');

    //when player is correct
  } else if (guess === secretNumber) {
    displayMessage('🥳 You got it!');
    setBackgroundColor('#60b347');
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(
        guess > secretNumber
          ? '📈 Lower your guess!'
          : '📉 You gotta go highier!'
      );
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 you lost the game.');
      setBackgroundColor('#ad2f2f');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secretNumber = Math.trunc(Math.random() * 30) + 1;

  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';

  setBackgroundColor('#222');
  document.querySelector('.number').style.width = '15rem';
});
