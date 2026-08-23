import { prisma } from "../src/config/prisma";

const libros = [
  {
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    imagen: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
    descripcion:
      "Una apasionante crítica social sobre el éxito, el dinero y la obsesión amorosa en la alta sociedad neoyorquina de los años veinte.",
  },
  {
    titulo: "Matar un ruiseñor",
    autor: "Harper Lee",
    imagen: "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg",
    descripcion:
      "Un clásico de la literatura estadounidense que aborda las tensiones raciales en el profundo Sur a través de la mirada inocente de Scout Finch.",
  },
  {
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
    descripcion:
      "La obra cumbre de la distopía moderna sobre los peligros del totalitarismo y la pérdida de la libertad individual.",
  },
  {
    titulo: "El cazador oculto",
    autor: "J.D. Salinger",
    imagen: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg",
    descripcion:
      "Una novela emblemática sobre el desencanto juvenil y la difícil transición hacia el mundo adulto.",
  },
  {
    titulo: "Dune",
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
    descripcion:
      "Una obra maestra de la ciencia ficción sobre la supervivencia en el planeta desértico Arrakis.",
  },
  {
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    imagen: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg",
    descripcion:
      "Un relato filosófico sobre el viaje del joven pastor Santiago en busca de su destino.",
  },
];

const autores = [
  { nombre: "F. Scott Fitzgerald", nacionalidad: "Estados Unidos", biografia: "Escritor estadounidense, figura central de la Generación Perdida." },
  { nombre: "Harper Lee", nacionalidad: "Estados Unidos", biografia: "Novelista conocida por su retrato de la injusticia racial en el Sur." },
  { nombre: "George Orwell", nacionalidad: "Reino Unido", biografia: "Autor y periodista, referente de la crítica al totalitarismo." },
];

async function main() {
  await prisma.libro.createMany({ data: libros });
  await prisma.autor.createMany({ data: autores });
}

main();