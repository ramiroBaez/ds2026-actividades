import { describe, it, expect, vi } from "vitest";
import type { Request, Response, NextFunction } from "express";
import { authorize } from "./auth.middleware";

// req, res y next falsos: a authorize no le importa si son de Express
function mocks(req: Partial<Request> = {}) {
  const res = { status: vi.fn().mockReturnThis(), json: vi.fn().mockReturnThis() } as unknown as Response;
  const next = vi.fn() as unknown as NextFunction;
  return { req: req as Request, res, next };
}

describe("authorize", () => {
  it("responde 403 a un CLIENTE cuando la ruta pide ADMIN", () => {
    const { req, res, next } = mocks({ usuario: { id: 2, rol: "CLIENTE" } });
    authorize("ADMIN")(req, res, next);
    expect(res.status).toHaveBeenCalledWith(403);
    expect(res.json).toHaveBeenCalledWith({ error: "No tenés permiso para esta operación" });
    expect(next).not.toHaveBeenCalled();
  });

  it("responde 401 si el request nunca pasó por authenticate", () => {
    const { req, res, next } = mocks();
    authorize("ADMIN")(req, res, next);
    expect(res.status).toHaveBeenCalledWith(401);
    expect(next).not.toHaveBeenCalled();
  });
});
