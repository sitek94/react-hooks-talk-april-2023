import {useEffect, useReducer, Reducer} from 'react'

type State<TData> = {
  status: 'loading' | 'error' | 'success'
  error: Error | null
  data: TData | null
}

type Action<TData> =
  | {type: 'loading'}
  | {type: 'error'; error: Error}
  | {type: 'success'; data: TData}

function reducer<TData>(state: State<TData>, action: Action<TData>) {
  switch (action.type) {
    case 'loading':
      return {status: 'loading' as const, error: null, data: null}

    case 'error':
      return {status: 'error' as const, error: action.error, data: null}

    case 'success':
      return {status: 'success' as const, error: null, data: action.data}

    default:
      throw new Error()
  }
}

export function useData<TData>(fetcher: () => Promise<TData>) {
  const [state, dispatch] = useReducer<Reducer<State<TData>, Action<TData>>>(
    reducer,
    {
      data: null,
      error: null,
      status: 'loading' as const,
    },
  )

  useEffect(() => {
    dispatch({type: 'loading'})

    fetcher()
      .then(data => dispatch({type: 'success', data}))
      .catch(error => dispatch({type: 'error', error}))
  }, [fetcher])

  return {
    ...state,
    isLoading: state.status === 'loading',
    isError: state.status === 'error',
    isSuccess: state.status === 'success',
  }
}
