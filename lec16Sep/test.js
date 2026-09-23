// const dotenv = require('dotenv') //nhi use kr rhe ecause type module kr diya h
// const {Client} = require('pg') //Here client is constructor function (constructor function means jiske aage new keyword lgane se object milta h)
import dotenv from 'dotenv';
import {Client} from 'pg'
dotenv.config()


const client = new Client({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
})

//bina function ke await use krna h toh type me module krlo
await client.connect()
await client.end()