npm init -y
npm i --save-dev prisma@7.10.0 or npm i -D  prisma@7                --save-dev means going to save it as developer dependencu
npm i @prisma/client
npx prisma init

prisma is ORM
prismapg is constructor function

npx prisma migrate dev --name commit_msg(generally first init rehta h)
isko chlane se prisma me migration folder bn jaayega -- if db me kuch pehle se h toh work nhi krega ,db empty krni pdegi



Postgres ------> Prisma
table ----> models
columns -----> Fields
Row ----------> Object

schema.prisma me 
output ko comment kiya because jb prisma ka client npx prisma generate krenge toh ye output wla bhi run krega toh generate naam ka folder bna dega
and chnge provider = "prisma-client" to prisma-client-js