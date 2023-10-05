const btn = document.getElementById("btn");

function clickHandler(e) {
  btn.textContent = "Hello my friends";
}

btn.onclick = clickHandler;

btn.addEventListener("click", clickHandler);

const btnHello = document.getElementById("btnHello");

function clickHandler1(e) {
  btnHello.style.color = "green";
}

btnHello.onclick = clickHandler1;

btnHello.addEventListener("click", clickHandler1);

const img1 = document.querySelector("img");

function moveMouse(e) {
  img1.src =
    "https://www.thespruce.com/thmb/S9J1dsV0kRgFhSg8yMDDka_bOtQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/questions-and-answers-about-mice-2656489-hero-96bd6fb462934430a1c1dfb03662af3d.jpeg";
  img1.alt = "mouse";
}

img1.mousemove = moveMouse;
img1.addEventListener("mousemove", moveMouse);
