const mongodb = require('mongodb');
const express = require("express");
const bodyParser = require("body-parser");
const router = express.Router();
const app = express();
var cors = require('cors');

app.use(cors());

const url = 'mongodb://localhost:27017'; // für lokale MongoDB
const mongoClient = new mongodb.MongoClient(url);

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//einfügen des gespielten schlagzeuges in datenbank
router.post("/handle", (request, response) => {
  console.log(request.body);
  try {
    //verbindet zur Datenbank
    connectToDatabase();
    //greift erst auf Datenbank "Drumrec" zu und dann auf collection "History"-> Tabelle
    //bindet json objekt ein
    mongoClient.db('Drumrec').collection('History').insertOne(request.body);
    response.sendStatus(200);
  }
  catch (e) {
    response.sendStatus(404);
  }
});

//Collection von History wird zurückgegeben
router.get("/history", (request, response) => {
  try {
    connectToDatabase();
    mongoClient.db("Drumrec").collection("History").find({}).toArray(function (err, result) {
      if (err) throw err;
      response.send(result);
    });
  }
  catch (e) {
    response.sendStatus(404);
  }
});

//löscht eintrag anhand der id die übergeben wird
router.get("/del", (request, response) => {
  try {
    var id = request.query.id;
    console.log(id);
    if (id == null) {
      response.sendStatus(204);
      return;
    }
    connectToDatabase();
    var myquery = { "_id": mongodb.ObjectID(id) }
    
    //anhand von der übergebenden id löschen wir den eventuell gefundenen eintrag
    mongoClient.db("Drumrec").collection("History").deleteOne(myquery, function (err, obj) {
      if (err) throw err;
      console.log("1 document deleted");
      response.sendStatus(202);
    });
  }
  catch (e) {
    response.sendStatus(404);
  }
});

app.use("/", router);

//ob verbindung hergestellt werden kann
async function testDataBaseConnection() {
  try {
    connectToDatabase();
    //gibt aus welche collections in Drumrec exisitieren
    let collections = await mongoClient.db('Drumrec').listCollections().toArray();
    console.log("Connected successfully to server");
    console.log(collections);
  }
  catch(e){
    console.log(e);
  }
}

//verbindet zur datenbank
async function connectToDatabase() {
  try {
    await mongoClient.connect();
  }
  catch (e) {
    console.log(e);
   }
}

//ruft test auf, ob verbindung hergestellt werden kann
testDataBaseConnection().catch(console.dir);

//startet server auf port 3000
app.listen(3000, () => {
  console.log("Started on PORT 3000");
})