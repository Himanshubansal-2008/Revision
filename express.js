// const express = require('express')
// const app = express()


// // app.use((req,res,next) => {
// //     console.log("sdsds")
// //     next() //ye nhi lgayenge toh aage wale get nhi chalenge
// // })

// // or 

// // let logger = (req,res,next) => {
// //     console.log("sdsds")
// //     next() //ye nhi lgayenge toh aage wale get nhi chalenge
// // }
// // app.use(logger)

// or 
// app.get('/',logger,  (req,res) => {// ab ye logger sirf isi route pr lgega
//     res.send("Ddsfd")
// })

// app.get('/', (req,res) => {
//     res.send("Ddsfd")
// })
// app.listen(3000)






// --------POST------------

const express = require('express')
const app = express()

app.use(express.text())
// app.use(express.json())

app.post('/', (req,res) => {
    console.log(req.body)
    res.send("Okay")
})

app.listen(3000)



 