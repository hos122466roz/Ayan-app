import prisma from "../libs/prismadb";

export default async function getMenu() {
    try{
        const menu=await prisma.menu.findMany()
        const safMenu=menu.map((item:any)=>({
            ...item,
            createdAat: item.createdAat.toISOString(),
 
        }))
        return safMenu

    }catch(error:any){
        throw new Error(error)
    }
    
}