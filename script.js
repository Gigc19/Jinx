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
    imgUrl: "IMG/c1.webp",
  },
  {
    id: 3,
    imgUrl: "IMG/arrrr.webp",
  },
  {
    id: 4,
    imgUrl: "IMG/arra1.png                                           ",
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
  tagEl.style.width = "1300px";
  tagEl.style.height = "300px";
  tagEl.style.objectFit = "cover";
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

fetch("https://fakestoreapi.com/products", {
  method: "GET",
})
  .then(function (responseUser) {
    return responseUser.json();
  })
  .then(function (responseData) {
    responseData.forEach((item) => {
      let img = document.createElement("img");
      img.src = item.image;
      document.getElementById("photos").appendChild(img);
    });
  })
  .catch(function (error) {
    console.log(error);
  });
