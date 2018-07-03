const express = require('express');
const app = express();
const port = 3000;

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
const dbName = "homework7";

const crypto = require('crypto');
const decipher = crypto.createDecipher('aes256', 'asaadsaad');

app.get('/secret', function (req, res) {
    MongoClient.connect(url, function (err, client) {
        const db = client.db(dbName);
        db.collection('cryptoCol').findOne({}, function (err, doc) {
            const encrypted = doc.message;
            if (encrypted) {
                let decrypted = decipher.update(encrypted, 'hex', 'utf8');
                decrypted += decipher.final('utf8');
                res.send(decrypted);
                console.log(decrypted);
            }
            client.close();
            res.end();
        });
    })
})
app.listen(port, () => { console.log("listening port 3000 .......") });
