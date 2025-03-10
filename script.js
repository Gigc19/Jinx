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
    if (!responseUser.ok) {
      throw "server error";
    }
    return responseUser.json();
  })
  .then(function (responseData) {
    const items = document.querySelectorAll("#Item");
    responseData.forEach((item, index) => {
      if (index < items.length) {
        let img = document.createElement("img");
        img.src = item.image;
        img.style.width = "150px";
        img.style.height = "150px";
        items[index].appendChild(img);
      }
    });
  })
  .catch(function (error) {
    if (error === 404) {
      let pDescr = document.createElement("p");
      pDescr.textContent = "Server Error";
      document.querySelector(".itemOne").appendChild(pDescr);
    }
    console.log(error);
  });

const ARROWLEFT = document.getElementById("ARROW_LEFT");
const ARROWRIGHT = document.getElementById("ARROW_RIGHT");
const MAINCONTENT = document.getElementById("SLIDER_CONTENT");

ARROWLEFT.addEventListener("click", function () {});

const FormEl = document.getElementById("formElement");

FormEl.addEventListener("submit", function (e) {
  e.preventDefault();
  let errors = {};
  const UserNameValue = document.getElementById("inputia").value;
  if (UserNameValue === "") {
    errors.username = "Username Field cannot be emptty";
  }
  const Checkbox = document.getElementById("agreeCheck").checked;
  if (!Checkbox) {
    errors.check = "you must agrre our terms and conditionsss";
  }
  console.log(errors);

  this.querySelectorAll(".error-text").forEach((el) => {
    el.textContent = " ";
  });
  for (let item in errors) {
    console.log(item);
    let pErrorEl = document.getElementById("error-" + item);
    if (pErrorEl) {
      pErrorEl.textContent = errors[item];
    }
  }
  if (Object.keys(errors).length === 0) {
    this.submit();
  }
});

let emailEl = document.getElementById("email");

function emailValidation() {
  const emailValue = document.getElementById("email").value;
  const errorEmail = document.getElementById("text-email");
  let emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (emailValue.match(emailPattern)) {
    errorEmail.textContent = "your email is valid";
    errorEmail.style.color = "green";
  } else {
    errorEmail.textContent = "your email is Invalid";
    errorEmail.style.color = "red";
  }

  if (emailValue === "") {
    errorEmail.innerHTML = "";
  }
}
emailEl.addEventListener("keydown", emailValidation);

