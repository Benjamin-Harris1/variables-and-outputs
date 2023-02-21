"use strict";

let number = 0;

window.addEventListener("load", start);

function start() {
  document.querySelector("#btn-increment").addEventListener("click", plus);
  document.querySelector("#btn-decrement").addEventListener("click", minus);
}

function plus() {
  number = number + 1;
  displayNumber();
}

function minus() {
  number = number - 1;
  displayNumber();
}

function displayNumber() {
  document.querySelector("#number").textContent = number;
}
