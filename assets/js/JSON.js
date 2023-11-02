"use strict";

//JSON

// const obj = {
//   number: 1,
//   string: "string",
//   array: [1, 2, false],
//   boolean: true,
//   null: null,
//   plainObject: { prop: 10 },
//   getNumber() {
//     return this.number;
//   },
// };

// const objJson = JSON.stringify(obj);

// const parsObj = JSON.parse(objJson);

// fetch(weatherUrl)
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => console.log(data));
// console.log("next line");

const weatherUrl =
  "https://api.open-meteo.com/v1/forecast?latitude=47.8517&longitude=35.1171&current_weather=true&timezone=auto"
    .then((response) => response.json())
    .then((data) => generateWeather(data))
    .catch((err) => console.log(err));

function generateWeather({
  current_weather: { temperature },
  current_weather_units: { tempUnit },
}) {
  const currentTemperatureEl = document.createElement("div");
  currentTemperatureEl.textContent = `${temperature} ${tempUnit}`;
  currentTemperatureEl.style.color = calcColorTemperature(temperature);
  document.body.append(currentTemperatureEl);
}

function calcColorTemperature(temperature) {
  if (temperature < 0) {
    return "blue";
  } else if (temperature === 0) {
    return "black";
  } else if (temperature > 0 && temperature < 40) {
    return "green";
  } else {
    return "red";
  }
}
