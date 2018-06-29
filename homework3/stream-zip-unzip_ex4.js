var fs = require('fs');
var filename = "/source.txt", zipfile = "/source.txt.gz",
    decompressfile = "/destination.txt";

var zlib = require('zlib'), path = require('path'),
    filePath = path.join(__dirname, zipfile),
    decompressfilePath = path.join(__dirname, decompressfile);

var gzip = zlib.createGzip(), gunzip = zlib.createGunzip();

function compressfile() {
    var readable = fs.createReadStream(__dirname + filename);
    var compressed = fs.createWriteStream(__dirname + zipfile);
    readable.pipe(gzip).pipe(compressed);
}

function decompressfilefunction() {
    var destreadable = fs.createReadStream(__dirname + zipfile);
    var decompressed = fs.createWriteStream(__dirname + decompressfile);
    destreadable.pipe(gunzip).pipe(decompressed);
}

fs.readFile(filePath, { encoding: 'utf-8' }, function (err, data) {
    if (data) {
        fs.readFile(decompressfilePath, { encoding: 'utf-8' }, function (err, data) {
            if (!data) {
                console.log("Decompress the file.");
                decompressfilefunction()
            }
            else {
                console.log("Already decompressed the file.");
            }
        });
    }
    else {
        console.log("Make zip file.");
        compressfile();
    }
});
