import { Routes, Route } from 'react-router-dom'
import { AuthProvider } from './context/AuthContext'
import Layout from './components/Layout/Layout'
import PrivateRoute from './components/PrivateRoute'
import Home from './pages/Home.tsx'
import Catalogo from './pages/Catalogo.tsx'
import LibroDetalle from './pages/LibroDetalle.tsx'
import LibroNuevo from './pages/LibroNuevo.tsx'
import Login from './pages/Login.tsx'
import SinPermiso from './pages/SinPermiso.tsx'
import './App.css'

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalogo />} />
          <Route path="/libros/:id" element={<LibroDetalle />} />
          <Route path="/login" element={<Login />} />
          <Route path="/sin-permiso" element={<SinPermiso />} />

          {/* sin path: layout route */}
          <Route element={<PrivateRoute rol="ADMIN" />}>
            <Route path="/libros/nuevo" element={<LibroNuevo />} />
          </Route>
        </Routes>
      </Layout>
    </AuthProvider>
  )
}

export default App