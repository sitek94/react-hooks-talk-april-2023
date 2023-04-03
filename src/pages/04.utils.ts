import {useEffect, useState} from 'react'

export function useData<TData>(fetcher: () => Promise<TData>) {
  const [data, setData] = useState<TData>()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  useEffect(() => {
    setLoading(true)

    fetcher()
      .then(setData)
      .catch(() => setError(true))
      .finally(() => setLoading(false))
  }, [fetcher])

  return {data, loading, error}
}
