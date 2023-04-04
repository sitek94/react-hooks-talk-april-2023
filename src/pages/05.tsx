import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers} from '@/api'

import {useData} from './05.utils'

export default function App() {
  const {isLoading, isError, data} = useData(getPlayers)

  if (isLoading) {
    return <LoadingSpinner />
  }

  if (isError) {
    return <ErrorMessage />
  }

  return <List title="🏃 Players" items={data} />
}
