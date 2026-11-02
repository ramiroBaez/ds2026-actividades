export interface Libro {
  id: number;
  titulo: string;
  imagen: string;
  descripcion: string;
  precio: number;
  disponible: boolean;
  autorId: number;
}