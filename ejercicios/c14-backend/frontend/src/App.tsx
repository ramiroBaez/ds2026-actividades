import { Routes, Route } from 'react-router-dom'
import Layout from './components/Layout/Layout'
import Home from './pages/Home.tsx'
import Catalogo from './pages/Catalogo.tsx'
import LibroDetalle from './pages/LibroDetalle.tsx'
import LibroNuevo from './pages/LibroNuevo.tsx'
import './App.css'

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/catalogo" element={<Catalogo />} />
        <Route path="/libros/:id" element={<LibroDetalle />} />
        <Route path="/libros/nuevo" element={<LibroNuevo />} />
      </Routes>
    </Layout>
  )
}

export default App