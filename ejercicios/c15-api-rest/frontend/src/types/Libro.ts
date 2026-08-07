export type Libro = {
  id: number;
  titulo: string;
  autor: string;
  imagen: string;
  descripcion: string;
}

export const libros: Libro[] = [
  {
    id: 1,
    titulo: "El Gran Gatsby",
    autor: "F. Scott Fitzgerald",
    imagen: "https://covers.openlibrary.org/b/isbn/9780743273565-M.jpg",
    descripcion: "Una apasionante crítica social sobre el éxito, el dinero y la obsesión amorosa en la alta sociedad neoyorquina de los años veinte, narrada a través de los ojos de Nick Carraway y el enigmático Jay Gatsby."
  },
  {
    id: 2,
    titulo: "Matar un ruiseñor",
    autor: "Harper Lee",
    imagen: "https://covers.openlibrary.org/b/isbn/9780061120084-M.jpg",
    descripcion: "Un clásico de la literatura estadounidense que aborda con profunda sensibilidad las tensiones raciales en el profundo Sur profundo a través de la mirada inocente de la pequeña Scout y la integridad de su padre, el abogado Atticus Finch."
  },
  {
    id: 3,
    titulo: "1984",
    autor: "George Orwell",
    imagen: "https://covers.openlibrary.org/b/isbn/9780451524935-M.jpg",
    descripcion: "La obra cumbre de la distopía moderna. Un análisis aterrador y lúcido sobre los peligros del totalitarismo, la vigilancia masiva, la manipulación de la verdad histórica y la pérdida absoluta de la libertad individual."
  },
  {
    id: 4,
    titulo: "El cazador oculto",
    autor: "J.D. Salinger",
    imagen: "https://covers.openlibrary.org/b/isbn/9780316769174-M.jpg",
    descripcion: "Acompaña a Holden Caulfield en su deambular por Nueva York tras ser expulsado del colegio. Una novela emblemática sobre el desencanto juvenil, la rebeldía, la alienación y la difícil transición hacia el mundo adulto."
  },
  {
    id: 5,
    titulo: "Dune",
    autor: "Frank Herbert",
    imagen: "https://covers.openlibrary.org/b/isbn/9780441013593-M.jpg",
    descripcion: "Ambientada en un Imperio galáctico feudal, esta obra maestra de la ciencia ficción aborda la supervivencia del joven Paul Atreides en el inhóspito planeta desértico Arrakis, el único rincón del universo que produce la valiosa especia."
  },
  {
    id: 6,
    titulo: "El Alquimista",
    autor: "Paulo Coelho",
    imagen: "https://covers.openlibrary.org/b/isbn/9780062315007-M.jpg",
    descripcion: "Un relato filosófico y motivacional que narra el viaje del joven pastor andaluz Santiago hacia las pirámides de Egipto en busca de un tesoro, transformándose en una profunda búsqueda espiritual sobre el destino y los sueños."
  }
]