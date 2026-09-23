npm i -D dotenv
npx prisma generate
npm i @prisma/adapter-pg


prismapg is constructor function


schema.prisma me 
output ko comment kiya because jb prisma ka client npx prisma generate krenge toh ye output wla bhi run krega toh generate naam ka folder bna dega
and chnge provider = "prisma-client" to prisma-client-js




const prisma = new PrismaClient()  isko btana pdta h ki db driver kya h hame npm i @prisma/adapter-pg run krni pdti h