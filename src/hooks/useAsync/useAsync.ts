import { Reducer, useCallback, useReducer } from "react";

import { asyncReducer } from "./useAsync.helpers";
import {
  AsyncAction,
  AsyncState,
  AsyncStatus,
  UseAsyncResult,
} from "./useAsync.types";

function useAsync<T>(initialState?: AsyncState): UseAsyncResult<T> {
  const [state, unsafeDispatch] = useReducer<Reducer<AsyncState, AsyncAction>>(
    asyncReducer,
    {
      status: AsyncStatus.idle,
      response: null,
      error: null,
      ...initialState,
    }
  );

  const dispatch = useCallback(
    (action: AsyncAction) => unsafeDispatch(action),
    [unsafeDispatch]
  );

  const { response, error, status } = state;

  const run = useCallback(
    async (promise: Promise<T>) => {
      dispatch({ type: AsyncStatus.pending });
      try {
        const response = (await promise) as Response;
        dispatch({ type: AsyncStatus.resolved, response });
      } catch (error) {
        dispatch({ type: AsyncStatus.rejected, error: error as Error });
      }
    },
    [dispatch]
  );

  const setError = useCallback(
    (error: unknown) =>
      dispatch({ type: AsyncStatus.rejected, error: error as Error }),
    [dispatch]
  );

  return {
    setError,
    error,
    status,
    response,
    run,
  };
}

export default useAsync;
