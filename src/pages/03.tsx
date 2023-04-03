import {useEffect, useState} from 'react'
import {
  ErrorMessage,
  fetchPlayers,
  fetchTeams,
  List,
  LoadingSpinner,
} from '@/lib'

export default function App() {
  const [players, setPlayers] = useState<string[]>([])
  const [playersLoading, setPlayersLoading] = useState(false)
  const [playersError, setPlayersError] = useState(null)

  useEffect(() => {
    setPlayersLoading(true)

    fetchPlayers()
      .then(setPlayers)
      .catch(setPlayersError)
      .finally(() => setPlayersLoading(false))
  }, [])

  const [teams, setTeams] = useState<string[]>([])
  const [teamsLoading, setTeamsLoading] = useState(false)
  const [teamsError, setTeamsError] = useState(null)

  useEffect(() => {
    setTeamsLoading(true)

    fetchTeams()
      .then(setTeams)
      .catch(setTeamsError)
      .finally(() => setTeamsLoading(false))
  })

  return (
    <>
      {playersLoading && <LoadingSpinner />}
      {playersError && <ErrorMessage />}
      {!playersLoading && !playersError && (
        <List title="Players" items={players} />
      )}

      {teamsLoading && <LoadingSpinner />}
      {teamsError && <ErrorMessage />}
      {!teamsLoading && !teamsError && <List title="Teams" items={teams} />}
    </>
  )
}
