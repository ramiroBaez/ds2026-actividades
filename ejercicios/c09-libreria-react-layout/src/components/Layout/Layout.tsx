import { type ReactNode } from 'react'
import Navbar from '../Navbar'
import Footer from '../Footer'

interface LayoutProps {
  children: ReactNode
}

function Layout({ children }: LayoutProps) {
  return (
    <>
      <Navbar /> {/* El Header/Navbar arriba */}
      
      <main>
        {children} {/* Acá se va a inyectar la página activa (Home) */}
      </main>
      
      <Footer /> {/* El Footer abajo */}
    </>
  )
}

export default Layout