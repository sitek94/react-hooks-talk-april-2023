import {useEffect, useState} from 'react'
import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers, getTeams, Player, Team} from '@/api'

export default function App() {
  const [players, setPlayers] = useState<Player[]>()
  const [isPlayersError, setIsPlayersError] = useState(false)
  const [isLoadingPlayers, setIsLoadingPlayers] = useState(false)

  useEffect(() => {
    setIsLoadingPlayers(true)

    getPlayers()
      .then(setPlayers)
      .catch(() => setIsPlayersError(true))
      .finally(() => setIsLoadingPlayers(false))
  }, [])

  const [teams, setTeams] = useState<Team[]>()
  const [isLoadingTeams, setIsLoadingTeams] = useState(false)
  const [isTeamsError, setIsTeamsError] = useState(false)

  useEffect(() => {
    setIsLoadingTeams(true)

    getTeams()
      .then(setTeams)
      .catch(() => setIsTeamsError(true))
      .finally(() => setIsLoadingTeams(false))
  }, [])

  return (
    <>
      {isLoadingPlayers && <LoadingSpinner title="Loading players..." />}
      {isPlayersError && <ErrorMessage />}
      {!!players && <List title="Players" items={players} />}

      {isLoadingTeams && <LoadingSpinner title="Loading teams..." />}
      {isTeamsError && <ErrorMessage />}
      {!!teams && <List title="Teams" items={teams} />}
    </>
  )
}
