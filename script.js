"use strict";

let BurgerBar = document.getElementById("burgerBar");

BurgerBar.addEventListener("click", function () {
  this.classList.toggle("active");
});

const dataArray = [
  {
    id: 1,
    imgUrl: "IMG/image26.png",
  },
  {
    id: 2,
    imgUrl: "IMG/image26.png",
  },
  {
    id: 3,
    imgUrl: "IMG/image26.png",
  },
  {
    id: 4,
    imgUrl: "IMG/image26.png",
  },
];

const arrowLeft = document.getElementById("arrow-left");
const arrowRight = document.getElementById("arrow-right");
const MainContent = document.getElementById("slider-content");

function divtag() {
  const divEl = document.createElement("div");
  return divEl;
}
function imgTag(item) {
  const tagEl = document.createElement("img");
  tagEl.src = item.imgUrl;
  return tagEl;
}
let sliderIndex = 0;

function SetSlider() {
  MainContent.innerHTML = " ";
  console.log(dataArray[sliderIndex]);
  const slideItem = divtag();
  const imgItem = imgTag(dataArray[sliderIndex]);
  slideItem.appendChild(imgItem);
  MainContent.appendChild(slideItem);
}
SetSlider();
function arrowLeftClick() {
  if (sliderIndex == 0) {
    sliderIndex = dataArray.length - 1;
    SetSlider();
    return;
  }
  sliderIndex--;
  SetSlider();
}
function arrowRightClick() {
  if (sliderIndex == dataArray.length - 1) {
    sliderIndex = 0;
    SetSlider();
    return;
  }
  sliderIndex++;
  SetSlider();
}
arrowLeft.addEventListener("click", arrowLeftClick);
arrowRight.addEventListener("click", arrowRightClick);

setInterval(() => {
  arrowRightClick();
}, 4000);
var splide = new Splide(".splide");
splide.mount();
