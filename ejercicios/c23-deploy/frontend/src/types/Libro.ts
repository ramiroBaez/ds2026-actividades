export type Autor = {
  id: number;
  nombre: string;
  nacionalidad: string;
  biografia: string;
}

export type Libro = {
  id: number;
  titulo: string;
  autor: Autor;
  imagen: string;
  descripcion: string;
  precio: number;
  disponible: boolean;
  autorId: number;
}