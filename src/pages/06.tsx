import {useQuery} from '@tanstack/react-query'

import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers} from '@/api'

export default function App() {
  const players = useQuery({
    queryKey: ['players'],
    queryFn: getPlayers,
  })

  return (
    <>
      {players.isLoading && <LoadingSpinner />}
      {players.isError && <ErrorMessage />}
      {players.isSuccess && <List title="Players" items={players.data} />}
    </>
  )
}
