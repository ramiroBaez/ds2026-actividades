import { useState, useEffect } from 'react'
import { apiFetch } from '../services/api'

function useFetch<T>(url: string) {

  const [data, setData] = useState<T | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {

    async function fetchData() {
      try {
        setLoading(true)
        setError(null)

        const datos = await apiFetch<T>(url)
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