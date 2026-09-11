// To download Express do the following commands: 
// --> npm init -y 
// --> npm i express 
// --> npm i dotenv          (for env)


const express = require("express");
const app = express();

// If want to use ENV then
const dotenv = require('dotenv')
dotenv.config() //(.env me PORT=3000 likhdo)
console.log(process.env.PORT)


app.get('/', (req,res) => {
    res.send("TMKB")
}) 
// same like get u can use others

app.listen(3000, () => {
    console.log("Server running");
});

// --------POST------------

// const app = express()
// app.use(express.text())
// // app.use(express.json())
// app.post('/', (req,res) => {
//     console.log(req.body)
//     res.send("Okay")
// })
// app.listen(3000)


//------------

app.get("/users/:id", (req, res) => {
    console.log(req.params.id);
    res.send("User");
});


// Middlewares 

app.use((req, res, next) => {
    console.log("Middleware");
    next(); // if next use nhi kroge toh niche jitne bhi routes likhenge to work nhi krege
});


// app.use(express.json()); // mainly used on post , when we get JSON