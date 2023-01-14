// add to cart
const productCountsEl = document.getElementById("products-count");
const addToCartBtns = document.querySelectorAll(".add-cart");
productCountsEl.textContent = 0;
for (let i = 0; i < addToCartBtns.length; i++) {
  addToCartBtns[i].addEventListener("click", function () {
    productCountsEl.textContent = +productCountsEl.textContent + 1;
  });
}

// Likes
const likeBtns = document.querySelectorAll(".img-like");
// const showLike = (e) => {
//   if (e.target.style.backgroundImage == 'url("img/like_hover.png")') {
//     e.target.style.backgroundImage = 'url("img/like.png")';
//     e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
//   } else {
//     e.target.style.backgroundImage = 'url("img/like_hover.png")';
//     e.target.style.backgroundColor = "#2c71b8";
//   }
// };
// likeBtns.forEach((like) => {
//   like.addEventListener("click", showLike);
// });

likeBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    // if (btn.classList.contains("liked")) {
    //   btn.classList.remove("liked");
    // } else {
    //   btn.classList.add("liked");
    // }
    btn.classList.toggle("liked");
  });
});

//!Modal
const moreDetailsBtns = document.querySelectorAll(".more-details");
let modal = document.querySelector(".modal");
let closeBtn = document.querySelector(".btn-close");

moreDetailsBtns.forEach((item) => item.addEventListener("click", openModal));
closeBtn.addEventListener("click", closeModal);

function openModal() {
  modal.classList.add("show");
  //modal.classList.remove("hide");
}

function closeModal() {
  modal.classList.remove("show");
  //modal.classList.add("hide");
}
modal.addEventListener("click", function (e) {
  if (e.target === modal) {
    closeModal();
  }
});

document.querySelector(".submit-form").addEventListener("click", function (e) {
  e.preventDefault();
});

//! Slider
$(".slider-block").slick({
  dots: true,
});

//! Scroll

// function showModalByScroll() {
//   if (window.scrollY >= document.body.scrollHeight / 2) {
//     openModal();
//     window.removeEventListener("scroll", showModalByScroll);
//   }
// }

// window.addEventListener("scroll", showModalByScroll);

setTimeout(openModal, 5000);
//setInterval(openModal, 5000);

//?INITIALIZE AOS
AOS.init();

// let audi = {
//   model: "A40",
//   color: "black",
//   year: 2020,
// };

// class Car {
//   constructor(model, color, year) {
//     this.model = model;
//     this.year = year;
//     this.color = color;
//     // this.hi = function () {
//     //   console.log("Hi" + this.model);
//     // };
//   }
//   hi = function () {
//     console.log("Hi" + this.model);
//   };
// }
// let audi = new Car("A4", "black", 2008);
// let lexus = new Car("ES250", "white", 2010);
// let bmw = new Car("328", "grey", 2020);

//! Product-quantity
const inrecementBtns = document.querySelectorAll(".increment-btn");
const derecementBtns = document.querySelectorAll(".decrement-btn");
const productsCount = document.querySelectorAll(".product-quantity input");

function Counter(incrementBtn, decrementBtn, inputField) {
  this.domRefs = {
    incrementBtn,
    decrementBtn,
    inputField,
  };

  this.toggleButtonState = function () {
    let count = +this.domRefs.inputField.value; // uznali znachenie count
    this.domRefs.decrementBtn.disabled = count <= 1;
    this.domRefs.incrementBtn.disabled = count >= 10;
  };

  this.toggleButtonState();

  this.increment = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value + 1;
    this.toggleButtonState();
  };
  this.decrement = function () {
    this.domRefs.inputField.value = +this.domRefs.inputField.value - 1;
    this.toggleButtonState();
  };

  this.domRefs.incrementBtn.addEventListener(
    "click",
    this.increment.bind(this)
  );
  this.domRefs.decrementBtn.addEventListener(
    "click",
    this.decrement.bind(this)
  );
}
const counters = [];
productsCount.forEach((item, i) => {
  counters[i] = new Counter(inrecementBtns[i], derecementBtns[i], item);
});
//const counter1 = new Counter(inrecementBtns, derecementBtns, productsCount);
