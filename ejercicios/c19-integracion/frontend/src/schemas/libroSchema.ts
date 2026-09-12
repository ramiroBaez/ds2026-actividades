import { z } from 'zod'

export const libroSchema = z.object({
  titulo: z.string()
    .min(1, "El título es obligatorio")
    .max(200),

  imagen: z.string()
    .min(1, "La imagen es obligatoria"),

  descripcion: z.string()
    .min(1, "La descripción es obligatoria"),

  precio: z.coerce
    .number()
    .int("El precio debe ser un número entero")
    .positive("El precio debe ser mayor a 0"),

  autorId: z.coerce
    .number()
    .int()
    .positive("Elegí un autor"),

  disponible: z.boolean()
})

export type LibroValidado = z.infer<typeof libroSchema>