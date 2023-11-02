// const myName = "Роман";

// const sum = (a, b) => {
//   return a + b;
// };

// sum();

// const numbers = [1, 3, 5, 6, 8, 2, 9, 24, 16, 7, 98];

// numbers.forEach(function (number) {
//   if (number % 2 === 0) {
//     console.log(number);
//   }
// });

// const myFriends = {
//   name: "Anton",
//   age: 23,
//   city: "Kiev",
// };
// console.log(myFriends);

// const btn = document.createElement("button");
// document.body.append(btn);
// btn.textContent = "click me";
// function clickHandler() {
//   alert("hello world");
// }
// btn.addEventListener("click", clickHandler);

// function findEvenNumbers(numbers) {
//   const evenNumbers = numbers.filter((number) => number % 2 === 0);
//   return evenNumbers;
// }
// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 13, 14, 15, 16];
// const evenNumbers = findEvenNumbers(numbers);
// console.log(evenNumbers);

// function a(year) {
//   const age = new Date().getFullYear() - year;
//   return age;
// }
// const year = 1972;
// const age = a(year);
// console.log(age);

// const student = {
//   name: "Roman",
//   firstName: "Bilbas",
//   age: 21,
//   evaluations: {
//     english: 9,
//     math: 9,
//     chemistry: 8,
//   },
// };
// console.log(student);

// function findMinMax(arr) {
//   if (arr.lenght === 0) {
//     return;
//   }
//   const min = Math.min(...arr);
//   const max = Math.max(...arr);

//   console.log(`${min}`);
//   console.log(`${max}`);
// }
// const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// findMinMax(number);

// function textToUpperCase(text) {
//   return console.log(text.toUpperCase());
// }
// const inputText = "werwerjnfdjbgiejgoeirfmckcmopfdkerogjwkdlfmsdlkfj";

// textToUpperCase(inputText);

// function temperature(celsius) {
//   return (celsius * 9) / 5 + 32;
// }

// console.log(temperature(213));

// const numbers = [1, 2, 3, 4, 5];
// function calculateSum(numbers) {
//   let sum = 0;
//   numbers.forEach(function (numbers) {
//     sum += numbers;
//   });
//   return sum;
// }

// console.log(calculateSum(numbers));

// const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// function multi(numbers1) {
//   let mul = 1;
//   numbers1.forEach(function (numbers1) {
//     mul *= numbers1;
//   });
//   return mul;
// }
// console.log(multi(numbers1));

function arithmeticMean(number) {
  let sum = 0;
  number.forEach((number) => {
    sum += number;
  });
  return sum / number.length;
}
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(arithmeticMean(number));

function a(a) {
  return a % 2 === 0;
}
const b = 15;
const c = 2;
console.log(a(b));

function degree(b, c) {
  return b ** c;
}
console.log(degree(b, c));

function maxNumber(arr) {
  const max = Math.max(...arr);
  console.log(`${max}`);
}

maxNumber(number);

function isPrime(number) {
  if (number <= 1) {
    return false;
  }

  for (let i = 2; i < number.length; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}
