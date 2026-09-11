const http = require('http');
const {readData,addData} = require('./index')


const server = http.createServer((req,res) => {
    if (req.url=="/items" && req.method=="GET"){
        res.writeHead(200, {"content-type":"application/json"})
        res.end(JSON.stringify(readData()))
    }
    if (req.method=="POST" && req.url=="/items"){
        addData({
            id: "23erghfg",
            itemName: "sADFGHJH",
            type: "Found"
        })
        res.writeHead(201,{"content-type":"text/plain"})
        res.end("Added")
        
    }
});
server.listen(3004);