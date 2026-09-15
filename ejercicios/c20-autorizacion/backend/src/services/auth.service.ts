import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { prisma } from "../config/prisma";
import { JWT_SECRET, JWT_EXPIRES_IN, SALT_ROUNDS } from "../config/env";
import { RegistroInput, LoginInput } from "../validations/auth.validation";

export async function registrar(datos: RegistroInput) {
  const passwordHash = await bcrypt.hash(datos.password, SALT_ROUNDS);
  return prisma.usuario.create({
    data: { nombre: datos.nombre, email: datos.email, passwordHash },
    select: { id: true, email: true, nombre: true, rol: true }, // nunca el hash
  });
}

export async function login(datos: LoginInput) {
  const usuario = await prisma.usuario.findUnique({
    where: { email: datos.email },
    omit: { passwordHash: false }, // el omit global lo esconde: acá lo necesito
  });
  if (!usuario) return null;

  const coincide = await bcrypt.compare(datos.password, usuario.passwordHash);
  if (!coincide) return null; // mismo return que arriba, a propósito

  const payload = { id: usuario.id, rol: usuario.rol };
  const token = jwt.sign(payload, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

  return {
    token,
    usuario: { id: usuario.id, email: usuario.email, nombre: usuario.nombre, rol: usuario.rol },
  };
}

export async function findById(id: number) {
  return prisma.usuario.findUnique({ where: { id } });
}