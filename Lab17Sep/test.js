import express from 'express'
const app = express()
import pg from 'pg'
import dotenv from 'dotenv'
dotenv.config()
const { Pool } = pg

const pool = new Pool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME

})

// try{
//     // await pool.query("INSERT into usertable(title,deadline) VALUES('Creating dash','2026-09-21')")
//     let res = await pool.query('SELECT * from usertable')
    
//     console.log(res.rows) //kucch time ke liye terminal run krega then break krega 

// }catch(err){
//     console.log(err)
// }





app.get('/', async function getData(req,res) {
    try {
        let resp = await pool.query('SELECT * FROM usertable');
        // console.log(resp.rows)
        res.json(resp.rows);
        
    } catch (err) {
        console.log(err);
    }
})
app.listen(3003,() => {console.log("Running")})


















// import  {Client}  from 'pg'
// import  dotenv  from 'dotenv'
// dotenv.config()


// const client = new Client({
//     host: process.env.DB_HOST,
//     port: process.env.DB_PORT,
//     user: process.env.DB_USER,
//     password: process.env.DB_PASS,
//     database: process.env.DB_NAME
// })

// await client.connect()
// console.log("running")
// await client.end()