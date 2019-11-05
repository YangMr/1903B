var http = require("http");
var url = require("url");

var server = http.createServer((req,res)=>{
  res.setHeader("Access-Control-Allow-Origin","*")
   var data = url.parse(req.url,true).query;
   res.write(JSON.stringify(data));
   res.end();
});

server.listen(3001);
