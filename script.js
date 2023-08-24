'use strict';
const randomNo = function () {
  return Math.trunc(Math.random() * 6) + 1;
};

const switchPlayer = function () {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

var player0 = document.querySelector('.player--0');
var player1 = document.querySelector('.player--1');
var score0 = document.getElementById('score--0');
var score1 = document.getElementById('score--1');
var current0 = document.getElementById('current--0');
var current1 = document.getElementById('current--1');
var dice = document.querySelector('.dice');
var btnNew = document.querySelector('.btn--new');
var btnRoll = document.querySelector('.btn--roll');
var btnHold = document.querySelector('.btn--hold');
var currScore = 0;
var activePlayer = 0;
var scores = [0, 0];
var playing = true;

score0.textContent = 0;
score1.textContent = 0;
dice.classList.add('hidden');

btnRoll.addEventListener('click', function () {
  if (playing) {
    var n = randomNo();
    dice.classList.remove('hidden');
    dice.src = `dice-${n}.png`;
    if (n !== 1) {
      currScore += n;
      document.getElementById(`current--${activePlayer}`).textContent = currScore;
    } else {
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    scores[activePlayer] += currScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];
    if (scores[activePlayer] >= 100) {
      current0.textContent = 0;
      current1.textContent = 0;
      playing = false;
      dice.classList.add('hidden');
      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  document.querySelector(`.player--${activePlayer}`).classList.remove('player--winner');
  document.querySelector(`.player--${activePlayer}`).classList.add('player--active');
  currScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  playing = true;
  score0.textContent = 0;
  score1.textContent = 0;
  dice.classList.add('hidden');
});
