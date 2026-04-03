import {z} from 'zod';

//Schema para insertar Service
export const insertServiceSchema = z.object({
    name: z.string().min(1, 'El nombre del servicio debe tener al menos un caracter'),
    description: z.string().min(3, 'La descripción del servicio debe tener al menos tres caracteres'),
    duration: z.int().positive().min(10, 'La duración del servicio debe tener al menos diez minutos'),
    price: z.number().nonnegative().min(1, 'El precio del servicio debe ser de al menos 1'),
    isActive: z.boolean().default(true),
})

//Schema para que los usuarios entren a la cuenta.
export const signInFormschema = z.object({
    email: z.string().email('Correo invalido'),
    password: z.string().min(6,'La contraseña debe tener al menos 6 caracteres.')
})

//Schema para dar de alta usuarios.
export const signUpFormschema = z.object({
    name: z.string().min(3, 'El nombre debe tener al menos tres caracteres'),
    email: z.string().email('Correo invalido'),
    password: z.string().min(6,'La contraseña debe tener al menos 6 caracteres.'),
    confirmPassword: z.string().min(6,'La contraseña debe tener al menos 6 caracteres.')
}).refine((data) => data.password === data.confirmPassword,{
    message: 'Las contraseñas no coinciden.',
    path: ['confirmPassword'],
})