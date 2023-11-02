const randomFoto = "https://dog.ceo/api/breeds/image/random";
genereteAll();
function genereteAll() {
  const newDiv = document.createElement("div");
  const createImgEl = createImg();
  const createBtnEL = a(createImgEl);
  document.body.append(newDiv);
  newDiv.append(createBtnEL, createImgEl);
  loadImg(createImgEl);
}

function a(createImgEl) {
  const newBtn = document.createElement("button");
  newBtn.textContent = "qwerty";
  function clickBtn() {
    loadImg(createImgEl);
  }
  newBtn.addEventListener("click", clickBtn);
  return newBtn;
}
function createImg() {
  const imgEl = document.createElement("img");
  return imgEl;
}
function loadImg(createImgEl) {
  fetch(randomFoto)
    .then((response) => response.json())
    .then((data) => {
      const imgSrc = data.message;
      createImgEl.src = imgSrc;
    })
    .catch((err) => console.log(err));
}

const catInfo = "https://catfact.ninja/fact";
generationFactOfCats();
function generationFactOfCats() {
  const info = document.createElement("p");
  info.textContent = loadFacts(info);
  const btnEl = createBtn(info);
  document.body.append(info, btnEl);
  loadFacts(info);
}

function createBtn(info) {
  const btn2 = document.createElement("button");
  btn2.textContent = "qwerty";
  btn2.addEventListener("click", () => loadFacts(info));
  return btn2;
}
function loadFacts(info) {
  fetch(catInfo)
    .then((response) => response.json())
    .then((data) => {
      const infoFacts = data.fact;
      info.textContent = infoFacts;
    })
    .catch((err) => console.log(err));
}
