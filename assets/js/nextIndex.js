const btn = document.getElementById("clickBtn");
console.log(btn);

const clickHandler = function (event) {
  console.log("Btn was clicked");
};

btn.onclick = clickHandler;

// btn.onclick = null;
//------------------------------------
const loginBtn = document.getElementById("loginBtn");
function loginBtnHandler(e) {
  alert("Log in in process");
}

loginBtn.addEventListener("click", loginBtnHandler);

function loginMouseMoveHandler(e) {
  console.log("click me!");
}

loginBtn.addEventListener("mousemove", loginMouseMoveHandler);
//--------------------------------------

const hellloWorld = document.getElementById("Hello");

function clickMe(e) {
  console.log("Hello World");
}

hellloWorld.addEventListener("click", clickMe);
