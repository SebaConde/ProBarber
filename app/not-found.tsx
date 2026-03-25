'use client'

import { APP_NAME } from "@/lib/constants";
import Image from "next/image";
import { Button } from "@/components/ui/button";

const NotFoundPage = () => {
    return ( 
    <div className="flex flex-col items-center justify-center min-h-screen">
        <Image  src='/favicon.ico' alt={`${APP_NAME} logo`} width={48} height={48} priority={true}/>
        no encontrado
        <div className="p-6 w-1/3 rounded-lg shadow-md text-center">
        <h1 className="h1 text-3xl font-bold mb-4">Error</h1>
        <p className="text-destructive">No se pudo encontrar la pagina solicitada</p>
        <Button variant='outline' className="mt-4 ml-2" onClick={()=>(window.location.href = '/')}>Volver al inicio</Button>

        </div>
    </div>
);
}
 
export default NotFoundPage;