import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({
    log:[{
       emit: 'event',
       level: 'query',
    }]
})

async function main(){
    let res = await prisma.post.findMany({
        take:3,
        skip:2,
    })
    console.log(res);
}
main()