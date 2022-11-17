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

let divRec = document.getElementById(flexbox-panel)
let instrument = document.createElement(div1, div2, div3, div4, div5, div6, div7);
instrument.addEventListener("click", clickInstrument);

function clickInstrument(img){
    document.getElementByClassName("parent");
    let recBox = documentCreateElement(img);
    divRec.append(img);
}
