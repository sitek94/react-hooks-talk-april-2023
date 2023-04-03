import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query'

import {ErrorMessage, List, LoadingSpinner, NewItemForm} from '@/lib'
import {addPlayer, getPlayers} from '@/api'

export default function App() {
  const queryClient = useQueryClient()

  const {
    isLoading,
    isError,
    isSuccess,
    data: players,
  } = useQuery({
    queryKey: ['players'],
    queryFn: getPlayers,
  })

  const addPlayerMutation = useMutation({
    mutationFn: addPlayer,
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['players'],
      })
    },
  })

  return (
    <>
      <NewItemForm
        buttonText="Add Player"
        placeholder="Player Name"
        isLoading={addPlayerMutation.isLoading}
        onSubmit={name => addPlayerMutation.mutate({name})}
      />

      {isLoading && <LoadingSpinner />}
      {isError && <ErrorMessage />}
      {isSuccess && <List title="Players" items={players} />}
    </>
  )
}
