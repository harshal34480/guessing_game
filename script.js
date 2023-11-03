// Genrate random Number from 1 to 20
let randomNumber = Math.trunc(Math.random() * 20);
let score = 20;
let highscore = 0;

function message(msg) {
  document.querySelector('.message').textContent = msg;
}

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  randomNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  message('Start guessing...');
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
// document.querySelector('.number').textContent = randomNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  // when there is no number
  if (!guess) {
    document.querySelector('.message').textContent = '⛔No Number';
  }
  //  when guess is equal to random number
  else if (guess === randomNumber) {
    message('✅Correct Number');
    document.querySelector('.number').textContent = randomNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      message(guess > randomNumber ? '📈Too high' : '📉Too low');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '👎You lose  the game';
      document.querySelector('.score').textContent = score;
    }
  }
  // when guess is less than random number
  // else if (guess < randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too low';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lose  the game';
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
  // // when guess is greater than random number
  // else if (guess > randomNumber) {
  //   if (score > 1) {
  //     document.querySelector('.message').textContent = '📈Too High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = '👎You lose  the game';
  //     document.querySelector('.score').textContent = score;
  //   }
  // }
});
