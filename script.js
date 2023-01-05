
let hamburgerButton = document.getElementById("hamburger");
let menu = document.getElementById("nav-bar");
let hamBarTop = document.getElementById("top");
let hamBarMiddle = document.getElementById("middle");
let hamBarBottom = document.getElementById("bottom");

hamburgerButton.onclick = function(){
    menu.classList.toggle("nav-bar-appear");
    hamBarTop.classList.toggle("ham-bar-top");
    hamBarBottom.classList.toggle("ham-bar-bottom");
    hamBarMiddle.classList.toggle("ham-bar-middle");
};