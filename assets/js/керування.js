const body = document.body;
const section = document.querySelector("section");
const button = document.querySelector("button");

function btnClickHandler(e) {
  // console.log(e);
  console.log(this);
  console.log(e.target);
  console.log(e.currentTarget);

  this.style.backgroundColor = "yellow";
}

button.addEventListener("click", btnClickHandler);
section.addEventListener("click", btnClickHandler);
body.addEventListener("click", btnClickHandler);
