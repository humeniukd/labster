import { useReducer, useCallback, Reducer } from 'react'
import { AxiosPromise, AxiosResponse, AxiosError } from 'axios'

enum ActionType {
  Fetching = 'FETCHING',
  Success = 'SUCCESS',
  Fail = 'FAIL',
}

type RequestState<T> = {
  isFetching: boolean
  isSuccess?: boolean
  data?: T
  error?: string
  errorData?: object
}

type Action<T> = {
  type: ActionType
  data?: T
  error?: string
  errorData?: object
}

const reducer = <T>(state: RequestState<T>, action: Action<T>): RequestState<T> => {
  switch (action.type) {
    case ActionType.Fetching:
      return { isFetching: true }
    case ActionType.Success:
      return { isFetching: false, isSuccess: true, data: action.data }
    case ActionType.Fail:
      return {
        isFetching: false,
        isSuccess: false,
        error: action.error,
        errorData: action.errorData,
      }
    default:
      return state
  }
}

const useRequest = <P = void, R = any>(
  apiFunc: (params: P) => AxiosPromise<R>,
): [(params: P) => AxiosPromise<R>, RequestState<R>] => {
  const [state, dispatch] = useReducer<Reducer<RequestState<R>, Action<R>>>(reducer, {
    isFetching: false,
  })

  const callback = useCallback(
    (params: P): AxiosPromise<R> => {
      dispatch({ type: ActionType.Fetching })

      return apiFunc(params)
        .then((response: AxiosResponse<R>) => {
          dispatch({ type: ActionType.Success, data: response.data })
          return response
        })
        .catch((error: AxiosError) => {
          dispatch({
            type: ActionType.Fail,
            error: error.message,
            errorData: error,
          })
          throw error
        })
    },
    [apiFunc],
  )

  return [callback, state]
}

export default useRequest
