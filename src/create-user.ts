import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
 await prisma.user.create({
    data:{
        email:"sang933@gmail.com",
        name:"sangeeta"
    }
 })
}

main()
 
  