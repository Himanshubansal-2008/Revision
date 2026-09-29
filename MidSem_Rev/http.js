const http = require('http')


const server = http.createServer((req,res) => {
    console.log(req.method);
    console.log(req.url);
    req.writeHead = (300,{"content-type":"text/plain"})

    res.end("HEllo")
})

server.listen(3000)
