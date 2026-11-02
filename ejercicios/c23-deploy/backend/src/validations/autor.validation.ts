import { z } from "zod";

export const autorCreateSchema = z.object({
  nombre: z.string().trim().min(1, "El nombre es obligatorio").max(150),
  nacionalidad: z.string().trim().min(1, "La nacionalidad es obligatoria"),
  biografia: z.string().trim().min(1, "La biografía es obligatoria"),
});

export const autorUpdateSchema = autorCreateSchema.partial();

export type AutorCreate = z.infer<typeof autorCreateSchema>;