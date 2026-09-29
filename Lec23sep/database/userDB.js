const {prisma} = require('./config')

const createUser = async() => {
    // const user = await prisma.user.create({
    // data: {
    //     email: "elsa@prisma.io",
    //     name: "Elsa Prisma",
    // },
    // });

    const user = await prisma.user.create({
        data: {
            name: "Himanshu",
            email: "dsdsfdfdds",
            age: 18
        }
    })
    console.log(user)
    return user
}
createUser()