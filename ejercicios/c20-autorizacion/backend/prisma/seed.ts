import bcrypt from "bcrypt";
import { prisma } from "../src/config/prisma";
import { SALT_ROUNDS } from "../src/config/env";

const autores = [
  {
    nombre: "F. Scott Fitzgerald",
    nacionalidad: "Estados Unidos",
    biografia: "Escritor estadounidense, figura central de la Generación Perdida.",
  },
  {
    nombre: "Harper Lee",
    nacionalidad: "Estados Unidos",
    biografia: "Novelista conocida por su retrato de la injusticia racial en el Sur.",
  },
  {
    nombre: "George Orwell",
    nacionalidad: "Reino Unido",
    biografia: "Autor y periodista, referente de la crítica al totalitarismo.",
  },
  {
    nombre: "J.D. Salinger",
    nacionalidad: "Estados Unidos",
    biografia: "Escritor reconocido por retratar el desencanto y la alienación juvenil.",
  },
  {
    nombre: "Frank Herbert",
    nacionalidad: "Estados Unidos",
    biografia: "Autor de ciencia ficción, célebre por construir universos políticos y ecológicos complejos.",
  },
  {
    nombre: "Paulo Coelho",
    nacionalidad: "Brasil",
    biografia: "Novelista best-seller conocido por sus relatos filosóficos y espirituales.",
  },
];

const categorias = [
  { nombre: "Novela" },
  { nombre: "Clásico" },
  { nombre: "Distopía" },
  { nombre: "Ciencia Ficción" },
  { nombre: "Filosófico" },
];

const libros = [
  {
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    imagen: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
    descripcion:
      "Una apasionante crítica social sobre el éxito, el dinero y la obsesión amorosa en la alta sociedad neoyorquina de los años veinte.",
    precio: 8500,
    disponible: true,
    cats: ["Clásico", "Novela"],
  },
  {
    titulo: "Matar un ruiseñor",
    autor: "Harper Lee",
    imagen: "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg",
    descripcion:
      "Un clásico de la literatura estadounidense que aborda las tensiones raciales en el profundo Sur a través de la mirada inocente de Scout Finch.",
    precio: 9200,
    disponible: true,
    cats: ["Clásico", "Novela"],
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
    descripcion:
      "La obra cumbre de la distopía moderna sobre los peligros del totalitarismo y la pérdida de la libertad individual.",
    precio: 7800,
    disponible: true,
    cats: ["Distopía", "Ciencia Ficción"],
  },
  {
    titulo: "El cazador oculto",
    autor: "J.D. Salinger",
    imagen: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg",
    descripcion:
      "Una novela emblemática sobre el desencanto juvenil y la difícil transición hacia el mundo adulto.",
    precio: 8000,
    disponible: true,
    cats: ["Clásico", "Novela"],
  },
  {
    titulo: "Dune",
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
    descripcion:
      "Una obra maestra de la ciencia ficción sobre la supervivencia en el planeta desértico Arrakis.",
    precio: 10500,
    disponible: true,
    cats: ["Ciencia Ficción"],
  },
  {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    imagen: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg",
    descripcion:
      "Un relato filosófico sobre el viaje del joven pastor Santiago en busca de su destino.",
    precio: 7200,
    disponible: true,
    cats: ["Filosófico", "Novela"],
  },
];

const usuarios = [
  { email: "admin@libreria.test", nombre: "Admin", rol: "ADMIN" as const, password: "Admin1234" },
  { email: "cliente@libreria.test", nombre: "Cliente", rol: "CLIENTE" as const, password: "Cliente1234" },
];

async function main() {
  for (const { password, ...datos } of usuarios) {
    await prisma.usuario.upsert({
      where: { email: datos.email },
      update: {},
      create: { ...datos, passwordHash: await bcrypt.hash(password, SALT_ROUNDS) },
    });
  }
  await prisma.autor.createMany({ data: autores });
  await prisma.categoria.createMany({ data: categorias });

  for (const { autor, cats, ...datos } of libros) {
    await prisma.libro.create({
      data: {
        ...datos,
        autor: { connect: { nombre: autor } },
        categorias: { connect: cats.map((nombre) => ({ nombre })) },
      },
    });
  }
}

main();