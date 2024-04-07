import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient({log:['info','query'],})
 async function main(){
await prisma.post.create({
    data:{
        title: "title to post",
        content:"san",
        author:{
            connect:{

                id:1
            }
        }
    }
})
    
 }
 main()