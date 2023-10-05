const slides = [
  {
    src: "https://images.pexels.com/photos/624015/pexels-photo-624015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape1",
  },
  {
    src: "https://images.pexels.com/photos/1287145/pexels-photo-1287145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape2",
  },
  {
    src: "https://images.pexels.com/photos/371589/pexels-photo-371589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape3",
  },
  {
    src: "https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "landscape4",
  },
];
let currentSlideIndex = 0;

const slideImg = document.querySelector("img");
updateSlideImg(currentSlideIndex);

const [prevBtn, nextBtn] = document.querySelectorAll(".navBtn");
function nextSlidesHandler() {
  // if (currentSlideIndex < slides.length - 1) {
  //   currentSlideIndex++;
  // } else {
  //   currentSlideIndex = 0;
  // }
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  updateSlideImg(currentSlideIndex);
}
nextBtn.addEventListener("click", nextSlidesHandler);

function prevSlideHandler() {
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  updateSlideImg(currentSlideIndex);
}

prevBtn.addEventListener("click", prevSlideHandler);

function updateSlideImg(currentSlideIndex) {
  slideImg.src = slides[currentSlideIndex].src;
  slideImg.alt - slides[currentSlideIndex].alt;
}
