// 'use strict';
// ////////////70
// console.log(document.querySelector('.message').textContent); //to select html elements; with second property we can read what's in .message in console bar
// document.querySelector('.message').textContent = 'Correct Answer';
// console.log(document.querySelector('.message').textContent);

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

//////////////// 73   HANDLING CLICK EVENTS
//generating a random number
//math.random gives a random number between 0 and 1
let secretNumber = Math.trunc(Math.random() * 20) + 1; //without + 1 it will only number upto 19.9999999
let score = 20;
let highscore = 0; //first score will be highscore as it will be greater than zero

document.querySelector('.check').addEventListener('click', function () {
  //click = type of the event
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  //if we didn't put a value in input and pressed the button then the value will be 0; which is a falsy value so when there is a falsy value in the input we will display 'No number' in the .message for which we have written a if statement in which the argument is true by using ! not equal to symbol to invert the value to true as initally it was a falsy value (0)
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ No number!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Correct Number!';

    document.querySelector('.number').textContent = secretNumber;
    //manipulating css
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    //implementing high score
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈 Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }
}); //two arguments are passed 1st click which is the type of event 2nd what will happen when the button is clicked ? A function will run which will save the value of .guess in variable
// 2nd argument is a event handler which will handle the event once it takes place
//note we didn't called the function; javascript called the function itself once the event we were listening for takes place

////////////////////////////////////////////////////////////////////////////    CODING CHALLENGE 1

document.querySelector('.again').addEventListener('click', function () {
  // window.location.reload(true);to reload//this won't save the highscore
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
