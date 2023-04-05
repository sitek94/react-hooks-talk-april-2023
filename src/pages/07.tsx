import {useQuery} from '@tanstack/react-query'

import {Button, ErrorMessage, List, LoadingSpinner} from '@/lib'
import {getPlayers} from '@/api'
import {useState} from 'react'

export default function App() {
  const [show, setShow] = useState(true)

  return (
    <div>
      <Button onClick={() => setShow(!show)}>
        {show ? 'Hide' : 'Show'} players
      </Button>

      {show && <Players />}
    </div>
  )
}

function Players() {
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
