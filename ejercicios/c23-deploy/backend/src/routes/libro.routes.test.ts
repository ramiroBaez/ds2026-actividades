import { describe, it, expect } from "vitest";
import request from "supertest";
import jwt from "jsonwebtoken";
import app from "../app";
import { JWT_SECRET } from "../config/env";

// Ninguno de estos tests toca la base: authenticate → authorize → validate
// cortan antes de llegar a Prisma. Por eso corren sin Docker.
const tokenCliente = jwt.sign({ id: 2, rol: "CLIENTE" }, JWT_SECRET, { expiresIn: "1h" });
const tokenAdmin = jwt.sign({ id: 1, rol: "ADMIN" }, JWT_SECRET, { expiresIn: "1h" });
const tokenAdulterado = jwt.sign({ id: 1, rol: "ADMIN" }, "otro-secret", { expiresIn: "1h" });

const libroNuevo = {
  titulo: "Rayuela",
  precio: 7000,
  imagen: "https://covers.openlibrary.org/b/isbn/9788437604947-M.jpg",
  descripcion: "Una novela que se puede leer de muchas maneras.",
  autorId: 1,
};

describe("POST /api/libros (matriz de permisos, sin DB)", () => {
  it("sin token → 401 'Falta el token'", async () => {
    const res = await request(app).post("/api/libros").send(libroNuevo);
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: "Falta el token" });
  });

  it("con token de CLIENTE → 403", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${tokenCliente}`)
      .send(libroNuevo);
    expect(res.status).toBe(403);
  });

  it("ADMIN con body inválido → 400, no 403", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${tokenAdmin}`)
      .send({ ...libroNuevo, precio: -5 });
    expect(res.status).toBe(400);
    expect(res.body.detalles).toContainEqual({ campo: "precio", mensaje: "El precio debe ser mayor a 0" });
  });

  it("token adulterado → 401 'Token inválido'", async () => {
    const res = await request(app)
      .post("/api/libros")
      .set("Authorization", `Bearer ${tokenAdulterado}`)
      .send(libroNuevo);
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: "Token inválido" });
  });
});

describe("DELETE /api/libros/:id (matriz de permisos, sin DB)", () => {
  it("con token de CLIENTE → 403", async () => {
    const res = await request(app)
      .delete("/api/libros/1")
      .set("Authorization", `Bearer ${tokenCliente}`);
    expect(res.status).toBe(403);
  });
});

describe("rutas inexistentes", () => {
  it("GET /api/no-existe → 404 'Ruta no encontrada'", async () => {
    const res = await request(app).get("/api/no-existe");
    expect(res.status).toBe(404);
    expect(res.body).toEqual({ error: "Ruta no encontrada" });
  });
});
