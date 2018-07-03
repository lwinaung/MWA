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
        let decrypted = '';

        const db = client.db(dbName);
        db.collection('cryptoCol').findOne({}, function (err, doc) {
            decipher.write(doc.message, 'hex');
            decipher.end();
            decipher.on('readable', () => {
                const data = decipher.read();
                if (data)
                    decrypted += data.toString('utf8');
            });
            decipher.on('end', () => {
                res.send(decrypted);
                console.log("Decrypted Data ......." + decrypted);
                client.close();
                res.end();
            });
        });
    })
})
app.listen(port, () => { console.log("listening port 3000 .......") });