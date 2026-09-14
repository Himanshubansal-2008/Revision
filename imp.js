// Big size file ko Read krna --------->
// ans - Stream open krna(Chunks me load krna)

const fs = require('fs')

const stream = fs.createReadStream(pathtoFile,{'encoding':'utf-8',"highWaterMark":2})     //highwatermark se chunk ka size increase decrease hoga 2 ,eans 2byter
let rows = 0
stream.on("data", (chunk) => {     //by default 64kb data aata h
    rows+= chunk.split("\n").length-1
})
stream.on("end",() => {
    console.log(rows)
})
// rows will be length of that file