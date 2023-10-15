class Counter {
  constructor(counter) {
    this._counter = counter;
  }
  dec() {
    this._counter--;
  }
  inc() {
    this._counter++;
  }
}

const [decBtn, incBtn] = document.getElementsByClassName("btn");
const counterEl = document.querySelector("#counter");

const count = new Counter(0);
updateView();

function decCount(e) {
  count.dec();
  updateView();
}

decBtn.addEventListener("click", decCount);

function incCounter(e) {
  count.inc();
  updateView();
}
incBtn.addEventListener("click", incCounter);

function updateView() {
  counterEl.textContent = count._counter;
}
