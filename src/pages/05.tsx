import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {useData} from './05.utils'
import {getPlayers, getTeams} from '@/api'

export default function App() {
  const players = useData(getPlayers)
  const teams = useData(getTeams)

  return (
    <>
      {players.isLoading && <LoadingSpinner />}
      {players.isError && <ErrorMessage />}
      {players.isSuccess && <List title="Players" items={players.data} />}

      {teams.isLoading && <LoadingSpinner />}
      {teams.isError && <ErrorMessage />}
      {teams.isSuccess && <List title="Teams" items={teams.data} />}
    </>
  )
}
