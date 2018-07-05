const express = require('express');
const mongoDBClient = require('mongodb').MongoClient; 
var app = express();
// const col = "locations"; // const util = require('util');
var db;
const locationRoutes = require('./routes/locations');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', function (req, res, next) {
  req.db = db; //This will pass this particular global object on EACH REQUEST
  return next();
}, locationRoutes);

mongoDBClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('geospatial_locations')
  app.listen(3000, () => {
    console.log('listening on 3000 with Database: ', db.databaseName)
  })
})

//WAYS to do only in app.js without using routers
/*
//My WAY
mongoDBClient.connect('mongodb://localhost:27017/', (err, client) => {
  if (err) return console.log(err)
  db = client.db('geospatial_locations')
  app.listen(3000, () => {
    console.log('listening on 3000 with Database: ' , db.databaseName)
  })
})

app.get('/', (req, res) => {
  db.collection(col).find().toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result);
  })
})
*/

//Professor's WAY
/*const connectPromise = util.promisify(mongoDBClient.connect);
var db
connectPromise('mongodb://localhost:27017/')
  .then(function (client) {
    db = client.db('geospatial_locations');
  }).catch(e => console.log(e));

app.use((req, res, next) => {
  req.db = db;
  next();
})
app.get('/', (req, res) => {
  db.collection(col).find().toArray((err, result) => {
    if (err) return console.log(err)
    res.json(result);
  })
})
app.listen(3000, () => {
  console.log('listening on 3000')
  })
*/