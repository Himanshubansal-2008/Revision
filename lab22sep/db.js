require("dotenv/config") ;
const  { PrismaPg } = require("@prisma/adapter-pg");
const { PrismaClient } = require("@prisma/client");

const connectionString = require(`${process.env.DATABASE_URL}`);

const adapter = new PrismaPg({ connectionString });
const prisma = new PrismaClient({ adapter });

module.exports =  { prisma };