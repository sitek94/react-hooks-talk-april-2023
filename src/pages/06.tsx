import {useQuery} from '@tanstack/react-query'

import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers} from '@/api'

export default function App() {
  const {isLoading, isError, data} = useQuery({
    queryKey: ['players'],
    queryFn: getPlayers,
  })

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <ErrorMessage />
  }

  return <List title="🏃 Players" items={data} />
}
