import {useEffect, useState} from 'react'
import {ErrorMessage, fetchPlayers, List, LoadingSpinner} from '@/lib'

export default function App() {
  const [players, setPlayers] = useState<string[]>([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetchPlayers()
      .then(setPlayers)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [])

  return (
    <>
      {loading && <LoadingSpinner />}
      {error && <ErrorMessage />}
      {!loading && !error && <List title="Players" items={players} />}
    </>
  )
}
