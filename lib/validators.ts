import { z } from "zod";

//Schema para insertar Service
export const insertServiceSchema = z.object({
  name: z
    .string()
    .min(1, "El nombre del servicio debe tener al menos un caracter"),
  description: z
    .string()
    .min(3, "La descripción del servicio debe tener al menos tres caracteres"),
  duration: z
    .int()
    .positive()
    .min(10, "La duración del servicio debe tener al menos diez minutos"),
  price: z
    .number()
    .nonnegative()
    .min(1, "El precio del servicio debe ser de al menos 1"),
  isActive: z.boolean().default(true),
});

//Schema para que los usuarios entren a la cuenta.
export const signInFormschema = z.object({
  email: z.string().email("Correo invalido"),
  password: z.string().min(6, "La contraseña debe tener al menos 6 caracteres."),
});

//Schema para dar de alta usuarios.
export const signUpFormschema = z.object({
    name: z.string().min(3, "El nombre debe tener al menos tres caracteres"),
    email: z.string().email("Correo invalido"),
    password: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres."),
    confirmPassword: z
      .string()
      .min(6, "La contraseña debe tener al menos 6 caracteres."),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Las contraseñas no coinciden.",
    path: ["confirmPassword"],
  });

//Schema para agregar disponibilidad.
export const newAvailability = z.object({
    // días
    monday: z.boolean(),
    tuesday: z.boolean(),
    wednesday: z.boolean(),
    thursday: z.boolean(),
    friday: z.boolean(),
    saturday: z.boolean(),
    sunday: z.boolean(),
    // horario laboral
    startTime: z.string().min(1, "Debe elegir una hora de inicio"),
    endTime: z.string().min(1, "Debe elegir una hora de finalización"),
    // descanso (opcional)
    breakStart: z.string().optional(),
    breakEnd: z.string().optional(),
  }).superRefine((data, ctx) => {
    // ✅ 1. Al menos un día seleccionado
    const days = [
      data.monday,
      data.tuesday,
      data.wednesday,
      data.thursday,
      data.friday,
      data.saturday,
      data.sunday,
    ];

    if (!days.some(Boolean)) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debes seleccionar al menos un día",
        path: [],
      });
    }

    // ✅ 2. start < end
    if (data.startTime >= data.endTime) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "La hora de inicio debe ser menor a la de finalización",
        path: ["endTime"],
      });
    }

    // ✅ 3. break coherente
    if (data.breakStart && data.breakEnd) {
      if (data.breakStart >= data.breakEnd) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El descanso es inválido",
          path: ["breakEnd"],
        });
      }

      // ✅ 4. break dentro del horario laboral
      if (data.breakStart < data.startTime || data.breakEnd > data.endTime) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "El descanso debe estar dentro del horario laboral",
          path: ["breakStart"],
        });
      }
    }

    // ⚠️ 5. si uno de los break está, el otro también
    if (
      (data.breakStart && !data.breakEnd) ||
      (!data.breakStart && data.breakEnd)
    ) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        message: "Debes completar ambas horas de descanso",
        path: ["breakStart"],
      });
    }
  });
