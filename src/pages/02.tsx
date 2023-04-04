import {useEffect, useState} from 'react'

import {ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers, Player} from '@/api'

export default function App() {
  const [players, setPlayers] = useState<Player[]>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)

  useEffect(() => {
    setIsLoading(true)

    getPlayers()
      .then(setPlayers)
      .catch(() => setIsError(true))
      .finally(() => setIsLoading(false))
  }, [])

  return (
    <>
      {isLoading && <LoadingSpinner title="Loading players..." />}
      {isError && <ErrorMessage />}
      {!!players && <List title="🏃 Players" items={players} />}
    </>
  )
}
