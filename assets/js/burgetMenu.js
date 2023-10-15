const burgerBtn = document.querySelector(".burgerMenuBtn");
const burgetMenuContainer = document.querySelector(".burgerMenuContainer");
function burgetClickHandler(e) {
  burgetMenuContainer.classList.toggle("burgerMenuContainerHide");
  burgetMenuContainer.classList.toggle("burgerMenuContainerActive");
  e.stopPropagation();
}
burgerBtn.addEventListener("click", burgetClickHandler);

function bodyClickHandler() {
  burgetMenuContainer.classList.add("burgerMenuContainerHide");
  burgetMenuContainer.classList.remove("burgerMenuContainerActive");
}

document.body.addEventListener("click", bodyClickHandler);
