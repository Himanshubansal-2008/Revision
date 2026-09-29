// Do npm init -y
//npm i express
// npm i dotenv (if u r using it)

const express = require('express')
const dotenv = require('dotenv')
dotenv.config()
// now u can use dotenv as process.env.NAME
const app = express()

app.get('/',(req,res) => {
    
})
app.listen(port,() => {
    console.log("MKB")
})
