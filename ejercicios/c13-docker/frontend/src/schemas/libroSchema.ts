import { z } from 'zod'

// El schema define las reglas de validación de cada campo
// Si un campo no cumple la regla, Zod devuelve el mensaje de error
export const libroSchema = z.object({
  titulo: z.string()
    .min(1, "El título es obligatorio"),

  autor: z.string()
    .min(1, "El autor es obligatorio"),

  precio: z.coerce
    // coerce convierte el string del input a number automáticamente
    // sin esto, el input siempre devuelve string aunque sea type="number"
    .number()
    .positive("El precio debe ser mayor a 0"),

  disponible: z.boolean()
})

// z.infer extrae el tipo TypeScript del schema automáticamente
// Es equivalente a escribir la interface a mano, pero sin repetir nada
export type LibroValidado = z.infer<typeof libroSchema>