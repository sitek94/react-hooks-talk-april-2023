import {useEffect, useState} from 'react'

import {List} from '@/lib'
import {getPlayers, Player} from '@/api'

export default function App() {
  const [players, setPlayers] = useState<Player[]>([])

  useEffect(() => {
    getPlayers().then(setPlayers)
  }, [])

  return (
    <>
      <List title="🏃 Players" items={players} />
    </>
  )
}
