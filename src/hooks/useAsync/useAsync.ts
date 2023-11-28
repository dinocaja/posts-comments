import { Reducer, useCallback, useReducer } from "react";
import useSafeDispatch from "../useSafeDispatch";

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

  const dispatch = useSafeDispatch<AsyncAction>(unsafeDispatch);

  const { response, error, status } = state;

  const run = useCallback(
    async (promise: Promise<T>) => {
      dispatch({ status: AsyncStatus.pending });
      try {
        const response = (await promise) as Response;
        dispatch({ status: AsyncStatus.resolved, response });
      } catch (error) {
        dispatch({ status: AsyncStatus.rejected, error: error as Error });
      }
    },
    [dispatch]
  );

  const setError = useCallback(
    (error: unknown) =>
      dispatch({ status: AsyncStatus.rejected, error: error as Error }),
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
