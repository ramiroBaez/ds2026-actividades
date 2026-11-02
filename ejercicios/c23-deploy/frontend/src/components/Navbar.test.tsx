import { describe, it, expect, vi } from 'vitest'
import { render, screen } from '@testing-library/react'
import { MemoryRouter } from 'react-router-dom'
import Navbar from './Navbar'
import { AuthContext } from '../context/AuthContext'
import type { Usuario } from '../types/sesionType'

// El componente tiene dependencias como cualquier módulo: useNavigate (router)
// y useAuth (contexto). Para renderizarlo hay que darle las tres... en este caso
// el router y el contexto con auth falso: eso es un mock.
function renderNavbar(usuario: Usuario | null) {
  const auth = {
    usuario,
    cargando: false,
    estaAutenticado: usuario !== null,
    tieneRol: (rol: 'ADMIN' | 'CLIENTE') => usuario?.rol === rol,
    login: vi.fn(),
    logout: vi.fn(),
  }
  return render(
    <MemoryRouter>
      <AuthContext.Provider value={auth}>
        <Navbar />
      </AuthContext.Provider>
    </MemoryRouter>,
  )
}

describe('Navbar', () => {
  it('sin sesión: muestra "Ingresar" y NO el link "Agregar libro"', () => {
    renderNavbar(null)
    expect(screen.getByRole('button', { name: 'Ingresar' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /agregar libro/i })).not.toBeInTheDocument()
  })

  it('CLIENTE: saluda por nombre y NO ve "Agregar libro"', () => {
    renderNavbar({ id: 2, email: 'cliente@libreria.test', nombre: 'Cliente', rol: 'CLIENTE' })
    expect(screen.getByText('Hola, Cliente')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Salir' })).toBeInTheDocument()
    expect(screen.queryByRole('link', { name: /agregar libro/i })).not.toBeInTheDocument()
  })

  it('ADMIN: ve el link "Agregar libro" y saluda por nombre', () => {
    renderNavbar({ id: 1, email: 'admin@libreria.test', nombre: 'Admin', rol: 'ADMIN' })
    expect(screen.getByRole('link', { name: /agregar libro/i })).toBeInTheDocument()
    expect(screen.getByText('Hola, Admin')).toBeInTheDocument()
    expect(screen.getByRole('button', { name: 'Salir' })).toBeInTheDocument()
  })
})
