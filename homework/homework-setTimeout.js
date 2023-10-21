"use strict";

function printNumbers(from, to, interval) {
  let i = from;

  const timeInteval = setInterval(() => {
    console.log(i);
    if (i >= to) {
      clearInterval(timeInteval);
    } else {
      i++;
    }
  }, interval);
}
printNumbers(1, 100, 1000);
