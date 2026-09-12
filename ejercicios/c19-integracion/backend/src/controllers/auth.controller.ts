import { Request, Response } from "express";
import * as authService from "../services/auth.service";

export async function registrar(req: Request, res: Response) {
  const usuario = await authService.registrar(req.body);
  res.status(201).json(usuario);
}

export async function login(req: Request, res: Response) {
  const resultado = await authService.login(req.body);
  if (!resultado) return res.status(401).json({ error: "Credenciales inválidas" });
  res.json(resultado);
}

export async function yo(req: Request, res: Response) {
  const usuario = await authService.findById(req.usuario!.id); // authenticate ya corrió
  if (!usuario) return res.status(404).json({ error: "Usuario no encontrado" });
  res.json(usuario);
}