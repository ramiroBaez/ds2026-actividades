import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home.tsx'
import Catalogo from './pages/Catalogo.tsx'
import LibroDetalle from './pages/LibroDetalle.tsx'
import LibroNuevo from './pages/LibroNuevo.tsx'
import { libros as librosIniciales, type Libro } from './types/Libro.ts'
import type { LibroValidado } from './schemas/libroSchema.ts'
import './App.css'

function App() {
  // Movemos el array de libros a estado para que React actualice la UI
  // cuando se agregue uno nuevo
  const [libros, setLibros] = useState<Libro[]>(librosIniciales)

  // Función que agrega un libro nuevo al estado
  // Recibe LibroValidado (los datos del formulario ya validados por Zod)
  function agregarLibro(data: LibroValidado) {
    const nuevoLibro: Libro = {
      // Generamos un id único basado en la fecha actual
      id: Date.now(),
      titulo: data.titulo,
      autor: data.autor,
      // Si no hay imagen usamos un placeholder
      imagen: "https://placehold.co/200x280?text=Sin+portada",
      descripcion: ""
    }
    // prev es el array anterior — agregamos el nuevo al final
    setLibros(prev => [...prev, nuevoLibro])
  }

  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home libros={libros} />} />
        {/* Pasamos el array y la función como props al Catálogo */}
        <Route path="/catalogo" element={<Catalogo libros={libros} />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        {/* Nueva ruta para el formulario */}
        <Route path="/libros/nuevo" element={<LibroNuevo agregarLibro={agregarLibro} />} />
      </Routes>
    </Layout>
  )
}

export default App