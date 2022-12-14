let header = document.createElement("header");
let heading = document.createElement("h1");
heading.textContent = "DRUMREC.";
document.body.insertBefore(header, document.body.firstChild);

let nav =document.createElement("nav");
nav.id = "menu";
header.append(heading, nav);
let a1 = document.createElement("a");
let a2 = document.createElement("a");
a1.href = "index.html";
a2.href = "aufnahmen.html";
a1.textContent = "Schlagzeug";
a2.textContent = "Aufnahmen";


nav.append(a1, a2);



//var kick = new Audio("kick.mp3");
var becken1 = new Audio("sounds/becken1.mp3");
var becken2 = new Audio("sounds/becken2.mp3");
var becken3 = new Audio("sounds/becken3.mp3");
var snare = new Audio("sounds/snare.mp3");
var hihat = new Audio("sounds/hihat.mp3");


document.getElementById("becken1").addEventListener("click", function() {
    becken1.play();
    console.log("becken1");
});

document.getElementById("becken2").addEventListener("click", function() {
    becken2.play();
    console.log("becken2");
});

document.getElementById("becken3").addEventListener("click", function() {
    becken3.play();
    console.log("becken3");
});

document.getElementById("snare").addEventListener("click", function() {
  snare.play();
});

document.getElementById("hihat").addEventListener("click", function() {
  hihat.play();
  console.log("hihat");
});
