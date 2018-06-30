const url = require("url");
const http = require("http");
const { fork } = require("child_process");
const fs = require("fs");

http.createServer((req, res) => {
    const childProcess = fork('homework4_1_child.js');
    const myUrl = url.parse('http://localhost:4000/?url=path/to/my/file.txt', true);
    // const urlQuery = myUrl.query;
    const filepath = myUrl.query.url;
    childProcess.send(filepath);
    childProcess.on('message', (data) => {
        console.log('child process on...' );
        res.writeHead(200, { 'Content-Type': filepath });
        console.log("Data from child: " + data);;
        res.end(data);
    })
}).listen(4000);