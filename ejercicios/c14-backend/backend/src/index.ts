import express from "express";

const app = express();
const PORT = 3000;

interface Libro {
  id: number;
  titulo: string;
  autor: string;
  imagen: string;
  descripcion: string;
}

const libros: Libro[] = [
  {
    id: 1,
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    imagen: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
    descripcion:
      "Una apasionante crítica social sobre el éxito, el dinero y la obsesión amorosa en la alta sociedad neoyorquina de los años veinte.",
  },
  {
    id: 2,
    titulo: "Matar un ruiseñor",
    autor: "Harper Lee",
    imagen: "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg",
    descripcion:
      "Un clásico de la literatura estadounidense que aborda las tensiones raciales en el profundo Sur a través de la mirada inocente de Scout Finch.",
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
    descripcion:
      "La obra cumbre de la distopía moderna sobre los peligros del totalitarismo y la pérdida de la libertad individual.",
  },
  {
    id: 4,
    titulo: "El cazador oculto",
    autor: "J.D. Salinger",
    imagen: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg",
    descripcion:
      "Una novela emblemática sobre el desencanto juvenil y la difícil transición hacia el mundo adulto.",
  },
  {
    id: 5,
    titulo: "Dune",
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
    descripcion:
      "Una obra maestra de la ciencia ficción sobre la supervivencia en el planeta desértico Arrakis.",
  },
  {
    id: 6,
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    imagen: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg",
    descripcion:
      "Un relato filosófico sobre el viaje del joven pastor Santiago en busca de su destino.",
  },
];

app.get("/", (_req, res) => {
  res.json({ mensaje: "API de la Librería — ¡hola desde un contenedor! 🐳" });
});

app.get("/libros", (_req, res) => {
  res.json(libros);
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});