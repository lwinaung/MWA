const express = require('express');
var router = express.Router();
const mongoDBClient = require('mongodb').MongoClient;
// var db;
const col = "locations";

// mongoDBClient.connect('mongodb://localhost:27017/', (err, client) => {
//   if (err) return console.log(err)
//   db = client.db('geospatial_locations')
//   console.log("Connected to database...." + db);
// })

/* GET locations listing. */
router.get('/', function (req, res, next) {
  req.db.collection(col).find().toArray((err, result) => {
    if (err) return console.log(err)
    res.status(200).json(result);
    res.end();
  })
})

router.post('/', function (req, res) {
  req.db.collection(col).save(req.body, (err, result) => {
    if (err) res.status(500).json(err);
    res.status(200).json({ msg: "Successfully Inserted." })
  });
  console.log(req.body);
})

router.delete('/:id', function (req, res) { //req.params.id  <<OR>> Can pass data at body and get req.body.id
  //req.db.collection(col).remove({_id: parseInt(req.params.id)}, function (err, result) {  //<<OR>>
  req.db.collection(col).findOneAndDelete({ _id: parseInt(req.params.id) }, (err, result) => {
    console.log(JSON.stringify(result));
    if (err) res.status(500).json(err);
    if (result.value != null) {
      console.log("ID " + result._id);
      req.db.collection(col).find().toArray((err, obj) => {
        res.status(200).json({ msg: "Successfully Deleted", obj });
      })
    }
    else {
      res.status(200).json("Data is not found.");
    }
  })
})

module.exports = router;
