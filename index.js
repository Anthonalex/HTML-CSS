var menuBtnBurger = document.querySelector(".menu-btn-burger");
var mainNav = document.querySelector(".main-nav");
var menu = document.querySelector(".burger-menu-img");

mainNav.style.right = "-250px";

menuBtnBurger.addEventListener("click", function () {
  if (mainNav.style.right === "-250px") {
    mainNav.style.right = 0;
    menu.src = "./imgs/close.png"
  } else {
    mainNav.style.right = "-250px";
    menu.src = "./imgs/menu.png"
  }
});

// All animations will take exactly 500ms
var scroll = new SmoothScroll('a[href*="#"]', {
	speed: 1000,
	speedAsDuration: true
});