import { useState, useEffect } from 'react'

function useFetch<T>(url: string) {

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    async function fetchData() {
      try {
        setLoading(true)  
        setError(null)    

        const respuesta = await fetch(url)

        if (!respuesta.ok) {
          throw new Error(`Error ${respuesta.status}: ${respuesta.statusText}`)
        }

        const datos: T = await respuesta.json()
        setData(datos)

      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error desconocido')
      } finally {
        setLoading(false)
      }
    }

    fetchData()

  }, [url])

  return { data, loading, error }
}

export default useFetch