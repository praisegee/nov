"use strict";

const body = document.body;
const guess = document.querySelector(".guess");
const checkBtn = document.querySelector(".check");
const againBtn = document.querySelector(".again");
const rightNumber = document.querySelector(".number");
const message = document.querySelector(".message");
const score = document.querySelector(".score");
const highscore = document.querySelector(".highscore");

const correctNumber = 13;
let point = 10;

function checkGuess(guess) {
  if (Number(guess) === correctNumber) return true;
  return false;
}

function handleCorrectNumber() {
  body.style.backgroundColor = "green";
  score.innerText = point;
  highscore.innerText += point;
  message.innerText = "Correct!";
  rightNumber.innerText = correctNumber;
}

function handleWrongNumber() {
  body.style.backgroundColor = "red";
  score.innerText = 0;
  message.innerText = "Wromg!";
}

function handleSubmit() {
  if (checkGuess(guess.value)) return handleCorrectNumber();
  return handleWrongNumber();
}

checkBtn.addEventListener("click", handleSubmit);

// alert(checkGuess(13));
