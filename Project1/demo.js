'use strict';

// console.log(document.querySelector('.guess').textContent);
// document.querySelector('.guess').textContent = 'Correct Number !!!!';

// document.querySelector('.number').textContent = 15;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.numberbox').value = 23;
// console.log(document.querySelector('.numberbox').value);

let selectNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = selectNumber;

let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.numberbox').value);

  //when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = 'No Number!!';

    // When Player wins
  } else if (guess === selectNumber) {
    document.querySelector('.message').textContent = 'Correct Number !!';

    document.querySelector('body').style.backgroundColor = '#60b347';
    // document.querySelector('.number').style.width = '30rem';

    // When guess is too high
  } else if (guess > selectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }

    // When guess is too Low
  } else if (guess < selectNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too Low !!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'you lost the game';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  selectNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = 'Start guessing !!';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.numberbox').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
});
