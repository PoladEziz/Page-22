let phoneDiv = document.querySelector(".phone-div");
let burgerBtn = document.querySelector(".phone-btn-1");
let xBtn = document.querySelector(".x-btn");
burgerBtn.addEventListener("click", mainFunction);
function mainFunction() {
  phoneDiv.style.display = "flex";
  burgerBtn.style.display = "none";
  xBtn.style.display = "block";
}
xBtn.addEventListener("click", xBtnFunction);
function xBtnFunction() {
  phoneDiv.style.display = "none";
  burgerBtn.style.display = "block";
  xBtn.style.display = "none";
}
