"use strict";

// // setTimeout
// // setInterval

// function timeoutAction() {
//   console.log("hello");
// }

// console.log("before timeout");
// setTimeout(timeoutAction, 1000);
// console.log("after timeout");

// let i = 0;
// function intervalHandler() {
//   if (i === 5) {
//     return clearInterval(intervalId);
//   }
//   console.log(++i);
// }

// const intervalId = setInterval(intervalHandler, 1000);

// function deleteButton() {
//   const oferBtn = document.querySelector("button");
//   oferBtn.remove();
// }

// setTimeout(deleteButton, 5000);

// const colorBtn = document.querySelector(".btn");

// function changeColor(e) {
//   setTimeout(() => {
//     e.target.style.color = "green";
//   }, 2000);
// }

// colorBtn.onclick = changeColor;

let time = new Date(0);
let intervalId = null;

const timeEl = document.querySelector(".time");
const [startBtn, stopBtn, resetBtn] = document.querySelectorAll(
  ".btn-container > button"
);
updateTime(time);

function startBtnHandler() {
  function tick() {
    const DELAY = 100;
    time.setMilliseconds(time.getMilliseconds() + DELAY);
    updateTime(time);
  }
  if (!intervalId) {
    intervalId = setInterval(tick, DELAY);
  }
}

startBtn.onclick = startBtnHandler;

function stopBtnHandler() {
  clearInterval(intervalId);
  intervalId = null;
}

stopBtn.onclick = stopBtnHandler;

function resetBtnHandler() {
  time = new Date(0);
  updateTime(time);
}

resetBtn.onclick = resetBtnHandler;

function updateTime(time) {
  timeEl.textContent = `${time.getMinutes()}:${time.getSeconds()}.${time.getMilliseconds()}`;
}
