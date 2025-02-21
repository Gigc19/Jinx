"use strict";

let BurgerBar = document.getElementById("burgerBar");

BurgerBar.addEventListener("click", function () {
  this.classList.toggle("active");
});
