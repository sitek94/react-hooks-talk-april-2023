import {useEffect, useState} from 'react'
import {
  ErrorMessage,
  fetchPlayers,
  fetchTeams,
  List,
  LoadingSpinner,
} from '@/lib'

function useData<TData>(
  fetcher: () => Promise<TData>,
  initialState: TData, // 👈 Required for now, we'll fix it later
) {
  const [data, setData] = useState<TData>(initialState)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    setLoading(true)

    fetcher()
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false))
  }, [fetcher])

  return {data, loading, error, success: !loading && !error}
}

export default function App() {
  const players = useData(fetchPlayers, [])
  const teams = useData(fetchTeams, [])

  return (
    <>
      {players.loading && <LoadingSpinner />}
      {players.error && <ErrorMessage />}
      {players.success && <List title="Players" items={players.data} />}

      {teams.loading && <LoadingSpinner />}
      {teams.error && <ErrorMessage />}
      {teams.success && <List title="Teams" items={teams.data} />}
    </>
  )
}
