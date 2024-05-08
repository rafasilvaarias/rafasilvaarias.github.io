let mainComputerScreen = document.getElementById("mainComputerScreen");
let sideComputerScreen = document.getElementById("sideComputerScreen");
let windowWidth = window.innerWidth;
let windowHeight = window.innerHeight;

let margin;

function placeScreens() {

    windowWidth = window.innerWidth;
    windowHeight = window.innerHeight;

    margin = (windowWidth * 0.008) **2;

    mainComputerScreen.style.top = (windowHeight - mainComputerScreen.clientHeight) / 2 + "px";
    mainComputerScreen.style.left = margin + "px";
    sideComputerScreen.style.top = (windowHeight - sideComputerScreen.clientHeight) / 2 + "px";
    sideComputerScreen.style.right = margin + "px";
}

document.addEventListener("DOMContentLoaded", placeScreens);
window.addEventListener("resize", placeScreens);