const sound = new Audio("/sounds/click.wav");

const type = [];
type[0] = new Audio("/sounds/type1.wav");
type[1] = new Audio("/sounds/type2.wav");
type[2] = new Audio("/sounds/type3.wav");
type[3] = new Audio("/sounds/type4.wav");

document.addEventListener("click", function() {
    //console.log(sound); 
    sound.play();
});

document.addEventListener("keydown", function() {
    const rand = Math.floor(Math.random() * 4);
    //console.log(type[rand]); 
    type[rand].play();
});

document.addEventListener("DOMContentLoaded", function() {
    //console.log(sound); 
    sound.play();
});