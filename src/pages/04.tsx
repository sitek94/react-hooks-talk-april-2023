import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers, getTeams} from '@/api'
import {useData} from './04.utils'

export default function App() {
  const players = useData(getPlayers)
  const teams = useData(getTeams)

  return (
    <>
      {players.isLoading && <LoadingSpinner title="Loading players..." />}
      {players.isError && <ErrorMessage />}
      {!!players.data && <List title="🏃 Players" items={players.data} />}

      {teams.isLoading && <LoadingSpinner title="Loading teams..." />}
      {teams.isError && <ErrorMessage />}
      {!!teams.data && <List title="🛡️ Teams" items={teams.data} />}
    </>
  )
}
