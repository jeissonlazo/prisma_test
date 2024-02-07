// const { PrismaClient } = require('@prisma/client');
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
async function main() {
  const user = await prisma.user.update({
    where: {
      email: 'jeisson@gmail.com'
    },
    data: {
      email: 'jeisson@prism.com'
    }
  })
  console.log(user)
}

main()
  .catch(e =>{
    console.error(e.message)
  })
  .finally(async() => {
    await prisma.$disconnect()
  })