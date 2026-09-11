const express = require('express')
const path = require('path')
const app = express()
const bookRouter = require('./routers/bookRouter')

const pathToFile = path.join(__dirname, 'db.json')


app.use('/books',bookRouter)
// app.get('/', (req,res) => {
//     fs.readFileSync(pathToFile, (err,data) => {
//         if (err){
//             res.status(400).send("Not Foiund")
//             return
//         }
//         res.send(data)
//     })
// })

app.listen(3000)