import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

async function main(){
let res = await prisma.user.findMany({
    where:{
        email:{ 
            endswith:'gmail.com',
        },
       
    
    posts:{
        some:{
            published:true,
        },

        
    }
},
include:{
    post:{
        where:{
            published:true,
        },
    },
},
})
console.log(res);
}
main()  