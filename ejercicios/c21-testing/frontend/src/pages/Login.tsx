import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useNavigate } from 'react-router-dom'
import { loginSchema, type LoginValidado } from '../schemas/loginSchema'
import { useAuth } from '../context/AuthContext'
import { Alert } from 'react-bootstrap'

function Login() {
  const navigate = useNavigate()
  const { login } = useAuth()
  const [errorApi, setErrorApi] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<LoginValidado>({
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    resolver: zodResolver(loginSchema) as any
  })

  async function onSubmit(datos: LoginValidado) {
    setErrorApi(null)
    try {
      await login(datos)
      navigate('/catalogo')
    } catch (err) {
      setErrorApi(err instanceof Error ? err.message : 'Error desconocido')
    }
  }

  return (
    <div className="container py-5" style={{ maxWidth: 400 }}>
      <h1 className="mb-4">Iniciar sesión</h1>

      {errorApi && <Alert variant="danger">{errorApi}</Alert>}

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            {...register('email')}
            type="email"
            className={`form-control ${errors.email ? 'is-invalid' : ''}`}
            placeholder="tu@email.com"
          />
          {errors.email && (
            <div className="invalid-feedback">{errors.email.message}</div>
          )}
        </div>

        <div className="mb-4">
          <label className="form-label">Contraseña</label>
          <input
            {...register('password')}
            type="password"
            className={`form-control ${errors.password ? 'is-invalid' : ''}`}
            placeholder="Contraseña"
          />
          {errors.password && (
            <div className="invalid-feedback">{errors.password.message}</div>
          )}
        </div>

        <button type="submit" className="btn btn-dark w-100">
          Ingresar
        </button>

      </form>
    </div>
  )
}

export default Login