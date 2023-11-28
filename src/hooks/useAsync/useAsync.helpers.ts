import { AsyncAction, AsyncState, AsyncStatus } from "./useAsync.types";

function asyncReducer(_: AsyncState, action: AsyncAction): AsyncState {
  const status = action.status;
  switch (status) {
    case AsyncStatus.pending: {
      return { status, response: null, error: null };
    }
    case AsyncStatus.resolved: {
      return { status, response: action.response, error: null };
    }
    case AsyncStatus.rejected: {
      return { status, response: null, error: action.error };
    }
    default: {
      throw new Error("Unhandled action type");
    }
  }
}

export { asyncReducer };
