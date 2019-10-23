var http = require("http");

var url = require("url");

var server = http.createServer(function (req,res) {
    var data = url.parse(req.url,true).query;
    res.write(JSON.stringify(data));
    res.end();
    console.log(data)
});

server.listen(3000)