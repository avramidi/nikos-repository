var kick = new Audio("sounds/kick.mp3");
var becken1 = new Audio("sounds/becken1.mp3");
var becken2 = new Audio("sounds/becken2.mp3");
var becken3 = new Audio("sounds/becken3.mp3");
var snare = new Audio("sounds/snare.mp3");
var hihat = new Audio("sounds/hihat.mp3");

let history = [];

/*document.getElementById("kick").addEventListener("click", function() {
  kick.play();
  console.log("kick");
  addToHistory(1);
});*/

//bei click auf die drums wird ein ton abgespielt und bild in die history gegeben
document.getElementById("becken1").addEventListener("click", function (event) {
  becken1.play();
  console.log(event.currentTarget);
  addPic(event.currentTarget.cloneNode());
  addToHistory(2);
});
document.getElementById("becken2").addEventListener("click", function (event) {
  becken2.play();
  console.log("becken2");
  addPic(event.currentTarget.cloneNode());
  addToHistory(3);
});
document.getElementById("becken3").addEventListener("click", function (event) {
  becken3.play();
  console.log("becken3");
  addPic(event.currentTarget.cloneNode());
  addToHistory(4);
});
document.getElementById("snare").addEventListener("click", function (event) {
  snare.play();
  console.log("snare");
  addPic(event.currentTarget.cloneNode());
  addToHistory(5);
});
document.getElementById("hihat").addEventListener("click", function (event) {
  hihat.play();
  console.log("hihat");
  addPic(event.currentTarget.cloneNode());
  addToHistory(6);
});

//fügt bild in Gespielt hinzu
function addPic(img) {
  console.log(img);
  played.append(img);
}

//id wird in die history gepusht
function addToHistory(id) {
  history.push(id);
  console.log(history);
}

//speichert den namen zu der gespielten history
function saveData() {
  const inputField = document.getElementById('historyName');
  if (inputField.type === "hidden" || inputField.value==="") {
    inputField.type = 'text';
  }
  else {

    let xhr = new XMLHttpRequest();
    //baut request auf an server
    xhr.open("POST", "http://localhost:3000/handle");
    xhr.setRequestHeader("Accept", "application/json");
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        console.log(xhr.status);
        console.log(xhr.responseText);
      }
    }
    
    //holt Datum
    var currentdate = new Date(); 
    var datetime =  currentdate.getDate() + "/"
                    + (currentdate.getMonth()+1)  + "/" 
                    + currentdate.getFullYear() + " @ "  
                    + currentdate.getHours() + ":"  
                    + currentdate.getMinutes() + ":" 
                    + currentdate.getSeconds();
    
    //json objekt zusammenbauen
    let data = `{
      "Name" : "`+ inputField.value+`",
    "History": "`+ history + `",
    "Date":"`+ datetime +`"
    }`;

    //json objekt wird an server gesendet
    xhr.send(data);

    //inputField wird wieder auf hidden gesetzt, value wird gelöscht
    inputField.type = 'hidden';
    inputField.value = "";
    //history unter schlagzeug wird gecleared
    clearHistory();
  }
}

//funktion um history unter schlagzeug zu clearen
function clearHistory() {
  const myNode = document.getElementById("played");
  myNode.innerHTML = '';
  history = [];
}