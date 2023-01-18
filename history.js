//anfrage an server
function httpGet(theUrl) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.open("GET", theUrl, false); 
    xmlHttp.send(null);
    return xmlHttp.responseText;
}

//sucht anhand von der nummer das passende bild
function getPic(number) {
    console.log(number);
    switch (number) {
        case 1: return "kick.png";
        case 2: return "becken1.png";
        case 3: return "becken2.png";
        case 4: return "becken3.png";
        case 5: return "snaredrum.png";
        case 6: return "hihat.png";
    }
}

//wenn seite geladen wird
window.onload = function () {
    let data = httpGet("http://localhost:3000/history"); //speichert history in data
    data = JSON.parse(data); //konvertiert zu json format
    console.log(data);
    
    var table = "";
    for (var i in data) {

        //erstellt array mit den gespielten nummern aus History array und löscht kommata
        const historyArray = data[i].History.split(",");
        var images = [];

        //speichert alle bilder der gespielten nummern in images array
        for (var j in historyArray) {
            var pic = getPic(parseInt(historyArray[j]));
            console.log(pic);
            images.push(`<img src="images/` + pic + `" width="40" height="40"/>`)
        }
        console.log(images);
        var id = new String(data[i]._id);

        //löschen-button für jeden gespielten eintrag
        var btn = `<a href="?id=` + id + `">Delete</a>`
        table += "<tr>";
        
        //baut tabelle in aufnahmen aus der datenbank zusammen
        table += "<td>" + data[i].Name + "</td>"
            + "<td>" + images + "</td>"
            + "<td>" + data[i].Date + "</td>"
            + "<td>" + btn + "</td>";
        table += "</tr>";
    }
    //fügt inhalt in tabellen body ein
    document.getElementById("drumrecHistory").innerHTML = table;

    //querystring = jetzige url
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    
    //prüft ob url parameter id existiert
    const delId = urlParams.get('id')

    deleteHistory(delId);
};


function deleteHistory(id) {
    console.log(id);
    
    //wenn button nicht gedrückt, dann ist id = null
    if(id==null){
        return;
    }

    //ruft /del funktion auf server auf
    let response = httpGet("http://localhost:3000/del?id="+id);
    console.log(response);
    //refresh seite wenn löschen im server erfolgreich war
    if(response=="Accepted"){
       window.location.href = "http://127.0.0.1:5500/aufnahmen.html";
    }
}
