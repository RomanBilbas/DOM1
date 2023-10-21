// const btns = document.querySelectorAll("button");
// function btnClickHandler(e) {
//   console.log(e.target.dataset.host);
// }
// btns[0].onclick = btnClickHandler;
// btns[1].onclick = btnClickHandler;

// btns.forEach((b) => (b.onclick = btnClickHandler));

const colorButton = document.querySelectorAll("div > button");
function changeColor(e) {
  document.body.style.backgroundColor = e.target.dataset.color;
}
colorButton.forEach((b) => (b.onclick = changeColor));
