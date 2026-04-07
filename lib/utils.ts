/* eslint-disable @typescript-eslint/no-explicit-any */
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

//Formatear el precio
export function formatPrice(num: number): string {
  const [int, decimal] = num.toString().split(".");
  return decimal ? `${int}.${decimal.padEnd(2, "0")}` : `${int}.00`;
}

//Formatear errores.
export function formatError(error: any) {
  // Verifica si es un error de Zod
  if (error?.issues && Array.isArray(error.issues)) {
    // Zod error - los errores están en error.issues
    const fieldErrors = error.issues.map((issue: any) => issue.message);
    return fieldErrors.join(". ");
  } else if (error.code === "P2002") {
    // ← sacá el chequeo de error.name
    let field = "Field";

    if (Array.isArray(error.meta?.target)) {
      field = error.meta.target[0];
    } else if (typeof error.meta?.target === "string") {
      field = error.meta.target;
    } else if (
      Array.isArray(error.meta?.driverAdapterError?.cause?.constraint?.fields)
    ) {
      field = error.meta.driverAdapterError.cause.constraint.fields[0];
    }

    return `Ya existe ese ${field.charAt(0).toUpperCase() + field.slice(1)}`;
  } else {
    // Otros errores
    return typeof error?.message === "string"
      ? error.message
      : error
        ? JSON.stringify(error)
        : "Error desconocido";
  }
}
