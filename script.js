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



var kick = new Audio("sounds/kick.mp3");
var becken1 = new Audio("sounds/becken1.mp3");
var becken2 = new Audio("sounds/becken2.mp3");
var becken3 = new Audio("sounds/becken3.mp3");
var snare = new Audio("sounds/snare.mp3");
var hihat = new Audio("sounds/hihat.mp3");

/*document.getElementById("kick").addEventListener("click", function() {
  kick.play();
  console.log("kick");
});*/

document.getElementById("becken1").addEventListener("click", function(event) {
    becken1.play();
    console.log(event.currentTarget);
    addPic(event.currentTarget.cloneNode());
});

document.getElementById("becken2").addEventListener("click", function(event) {
    becken2.play();
    console.log("becken2");
    addPic(event.currentTarget.cloneNode());
});

document.getElementById("becken3").addEventListener("click", function(event) {
    becken3.play();
    console.log("becken3");
    addPic(event.currentTarget.cloneNode());
});

document.getElementById("snare").addEventListener("click", function(event) {
  snare.play();
  console.log("snare");
  addPic(event.currentTarget.cloneNode());
});

document.getElementById("hihat").addEventListener("click", function(event) {
  hihat.play();
  console.log("hihat");
  addPic(event.currentTarget.cloneNode());
});

function addPic(img){
  console.log(img);
  played.append(img);
}