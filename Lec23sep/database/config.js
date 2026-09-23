const { PrismaPg } = require('@prisma/adapter-pg');
const { PrismaClient } = require('@prisma/client');
const {config} = require('dotenv')
config()

const pg = new PrismaPg({
    connectionString: process.env.DATABASE_URL
});

const prisma = new PrismaClient({
    adapter: pg
}) ;

// or 
// const adapter = new PrismaPg();
// const prisma = new PrismaClient({
//     adapter
// }) ;




module.exports = { 
    prisma
}