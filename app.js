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
const showLike = (e) => {
  if (e.target.style.backgroundImage == 'url("img/like_hover.png")') {
    e.target.style.backgroundImage = 'url("img/like.png")';
    e.target.style.backgroundColor = "rgba(255, 255, 255, 0.25)";
  } else {
    e.target.style.backgroundImage = 'url("img/like_hover.png")';
    e.target.style.backgroundColor = "#2c71b8";
  }
};
likeBtns.forEach((like) => {
  like.addEventListener("click", showLike);
});
