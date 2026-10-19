import { describe, it, expect, afterAll } from "vitest";
import request from "supertest";
import app from "../app";
import { prisma } from "../config/prisma";

// ⚠ ESTE ARCHIVO NECESITA LA DB: son los únicos tests que llegan hasta Prisma.
// Requiere `docker compose up -d db` con migraciones aplicadas y seed cargado.
// Los tests que NO tocan la DB (401/403/400) viven en libro.routes.test.ts:
// si la DB está apagada, solo este archivo se pone rojo. Ese es el objetivo.
afterAll(() => prisma.$disconnect()); // cerrar la conexión al terminar

describe("POST /api/auth/login (contra la DB)", () => {
  it("credenciales del seed → 200 con token y usuario sin passwordHash", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "cliente@libreria.test", password: "Cliente1234" });
    expect(res.status).toBe(200);
    expect(res.body.token).toEqual(expect.any(String));
    expect(res.body.usuario).toMatchObject({ email: "cliente@libreria.test", rol: "CLIENTE" });
    expect(res.body.usuario).not.toHaveProperty("passwordHash");
  });

  it("mail que no existe → el MISMO 401 (no revela si el mail existe)", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "nadie@libreria.test", password: "Cliente1234" });
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: "Credenciales inválidas" });
  });

  it("password incorrecta → el MISMO 401", async () => {
    const res = await request(app)
      .post("/api/auth/login")
      .send({ email: "cliente@libreria.test", password: "Incorrecta1" });
    expect(res.status).toBe(401);
    expect(res.body).toEqual({ error: "Credenciales inválidas" });
  });
});

describe("GET /api/auth/yo (contra la DB)", () => {
  it("con el token del login → 200 con el usuario", async () => {
    const login = await request(app)
      .post("/api/auth/login")
      .send({ email: "cliente@libreria.test", password: "Cliente1234" });
    const res = await request(app)
      .get("/api/auth/yo")
      .set("Authorization", `Bearer ${login.body.token}`);
    expect(res.status).toBe(200);
    expect(res.body).toMatchObject({ email: "cliente@libreria.test", rol: "CLIENTE" });
    expect(res.body).not.toHaveProperty("passwordHash");
  });
});
