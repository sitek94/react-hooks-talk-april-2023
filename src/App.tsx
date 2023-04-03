import {useEffect, useState} from 'react'
import {List} from './lib'
import {getPlayers} from './api'

export default function App() {
  const [players, setPlayers] = useState<string[]>([])

  useEffect(() => {
    getPlayers().then(setPlayers)
  }, [])

  return (
    <>
      <List title="meh" items={players} />
    </>
  )
}
