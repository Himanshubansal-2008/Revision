const  { prisma } = require("./db");

async function main() {
  // Create a new user with a post
  const user = await prisma.user.create({
    data: {
      email: "alice@prisma.io",
    }
  });
  console.log("Created user:", user);

  // Fetch all users with their posts
  const allUsers = await prisma.user.findMany();
  console.log("All users:", JSON.stringify(allUsers, null, 2));
}

main()