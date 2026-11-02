import { describe, it, expect } from "vitest";
import { libroCreateSchema, idParamSchema } from "./libro.validation";

// Dado: el Arrange repetido, una sola vez
const libroValido = {
  titulo: "Rayuela",
  precio: 7000,
  imagen: "https://covers.openlibrary.org/b/isbn/9788437604947-M.jpg",
  descripcion: "Una novela que se puede leer de muchas maneras.",
  autorId: 1,
};

describe("libroCreateSchema", () => {
  it("rechaza precio negativo", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, precio: -5 }); // Cuando
    expect(r.success).toBe(false); // Entonces
    if (!r.success) expect(r.error.issues[0].path).toEqual(["precio"]);
  });

  it("recorta espacios del título", () => {
    const r = libroCreateSchema.safeParse({ ...libroValido, titulo: "  Rayuela  " });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.titulo).toBe("Rayuela");
  });
});

describe("idParamSchema", () => {
  it("convierte el id del string al número 42", () => {
    const r = idParamSchema.safeParse({ id: "42" });
    expect(r.success).toBe(true);
    if (r.success) expect(r.data.id).toBe(42);
  });
});
