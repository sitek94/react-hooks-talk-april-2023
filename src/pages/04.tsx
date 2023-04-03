import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {useData} from './04.utils'
import {getPlayers, getTeams} from '@/api'

export default function App() {
  const players = useData(getPlayers)
  const teams = useData(getTeams)

  // This seems okay, but still there is room for improvement. E.g. when we check
  // the state when
  if (players.error) {
    console.log(players)
    // :point up: `data` should be `undefined` here, but it's not
  }

  return (
    <>
      {players.loading && <LoadingSpinner title="Loading players..." />}
      {players.error && <ErrorMessage />}
      {!!players.data && <List title="Players" items={players.data} />}

      {teams.loading && <LoadingSpinner title="Loading teams..." />}
      {teams.error && <ErrorMessage />}
      {!!teams.data && <List title="Teams" items={teams.data} />}
    </>
  )
}
