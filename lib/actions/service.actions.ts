'use server'
import {prisma} from '@/db/prisma';

//Obtener servicios
export async function getServices(){
    const data = await prisma.service.findMany({
        orderBy: {createdAt: 'asc'}
    });
    return data;
}

