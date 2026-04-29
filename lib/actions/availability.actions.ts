'use server'

import {prisma} from '@/db/prisma'
import { newAvailability } from '../validators'

export async function createAvailability(formData: FormData){
try {
    const availability = newAvailability.parse({
        
    })
} catch (error) {
    
}
}