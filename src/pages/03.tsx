import {ErrorMessage, fetchPlayers, List, LoadingSpinner} from '@/lib'
import {useData} from '../use-data'

export default function App() {
  const {isSuccess, isError, isLoading, data} = useData(fetchPlayers)

  return (
    <>
      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage />}
      {isSuccess && (
        <List
          title="Players"
          items={data!} // 👈 We're going to the types it in a bit
        />
      )}
    </>
  )
}
