import {useEffect, useReducer, Reducer} from 'react'

type State<TData> =
  | {
      status: 'loading'
      isLoading: true
      isSuccess?: false
      isError?: false
      data?: undefined
    }
  | {
      status: 'error'
      isLoading?: false
      isSuccess?: false
      isError: true
      data?: undefined
    }
  | {
      status: 'success'
      isLoading?: false
      isSuccess: true
      isError?: false
      data: TData
    }

type Action<TData> =
  | {type: 'loading'}
  | {type: 'error'}
  | {type: 'success'; data: TData}

function reducer<TData>(
  state: State<TData>,
  action: Action<TData>,
): State<TData> {
  switch (action.type) {
    case 'loading':
      return {status: 'loading', isLoading: true}

    case 'error':
      return {
        status: 'error',
        isError: true,
      }

    case 'success':
      return {
        status: 'success',
        data: action.data,
        isSuccess: true,
      }

    default:
      throw new Error()
  }
}

export function useData<TData>(fetcher: () => Promise<TData>) {
  const [state, dispatch] = useReducer<Reducer<State<TData>, Action<TData>>>(
    reducer,
    {
      status: 'loading',
      isLoading: true,
    },
  )

  useEffect(() => {
    fetcher()
      .then(data => dispatch({type: 'success', data}))
      .catch(() => dispatch({type: 'error'}))
  }, [fetcher])

  return state
}
