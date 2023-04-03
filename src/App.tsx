import {useEffect, useState} from 'react'
import {fetchPlayers, List} from './lib'

export default function App() {
  const [players, setPlayers] = useState<string[]>([])

  useEffect(() => {
    fetchPlayers().then(setPlayers)
  }, [])

  return (
    <>
      <List items={players} />
    </>
  )
}
