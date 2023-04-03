import {ErrorMessage, fetchPlayers, List, LoadingSpinner} from '@/lib'
import {useData} from '../use-data'

export default function App() {
  const {data, status} = useData(fetchPlayers)

  return (
    <>
      {status === 'loading' && <LoadingSpinner />}
      {status === 'error' && <ErrorMessage />}
      {status === 'success' && <List title="Players" items={data} />}
    </>
  )
}
