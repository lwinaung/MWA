var http = require('http');
var fs = require('fs');
http.createServer(function(req, res){
    //----------Read Data with fs.readFile-----------
    /*fs.readFile('./glassfish-5.0.zip', (err, data)=>{
        if(err) throw err;
        res.end(data);
    })*/
    
    //----------Read Data with fs.createReadStream-----------
    var rs = fs.createReadStream('./glassfish-5.0.zip').pipe(res);
}).listen(9999);