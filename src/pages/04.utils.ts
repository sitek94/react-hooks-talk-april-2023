import {useEffect, useState} from 'react'

export function useData<TData>(fetcher: () => Promise<TData>) {
  const [data, setData] = useState<TData>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    fetcher()
      .then(setData)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [fetcher])

  return {data, isLoading, isError}
}
