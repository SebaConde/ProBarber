'use server'
import { PrismaClient } from "@prisma/client/extension"

//Obtener servicios
export async function getServices(){
    const prisma = new PrismaClient();

    const data = await prisma.Service.findMany({
        orderBy: {createdAt: 'asc'}
    });

    return data;
}

