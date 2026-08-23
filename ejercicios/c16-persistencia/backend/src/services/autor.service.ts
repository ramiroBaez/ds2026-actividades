import { Autor } from "../types/autor.types";

const autores: Autor[] = [
  {
    id: 1,
    nombre: "F. Scott Fitzgerald",
    nacionalidad: "Estadounidense",
    biografia: "Escritor de la generación perdida, célebre por retratar la era del jazz.",
  },
  {
    id: 2,
    nombre: "Harper Lee",
    nacionalidad: "Estadounidense",
    biografia: "Autora reconocida por su única novela publicada en vida, sobre justicia racial.",
  },
  {
    id: 3,
    nombre: "George Orwell",
    nacionalidad: "Británico",
    biografia: "Ensayista y novelista, referente de la crítica al totalitarismo.",
  },
];

let proximoId = 4;

export function findAll(): Autor[] {
  return autores;
}

export function findById(id: number): Autor | undefined {
  return autores.find((a) => a.id === id);
}

export function create(datos: Omit<Autor, "id">): Autor {
  const nuevo: Autor = { id: proximoId++, ...datos };
  autores.push(nuevo);
  return nuevo;
}

export function update(id: number, datos: Omit<Autor, "id">): Autor | undefined {
  const autor = autores.find((a) => a.id === id);
  if (!autor) return undefined;
  Object.assign(autor, datos);
  return autor;
}

export function remove(id: number): boolean {
  const index = autores.findIndex((a) => a.id === id);
  if (index === -1) return false;
  autores.splice(index, 1);
  return true;
}