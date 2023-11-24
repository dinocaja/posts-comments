enum AsyncStatus {
  idle = "idle",
  pending = "pending",
  resolved = "resolved",
  rejected = "rejected",
}

type AsyncState = {
  status: AsyncStatus;
  response: Response | null;
  error: Error | null;
};

type AsyncAction =
  | { type: AsyncStatus.pending }
  | { type: AsyncStatus.resolved; response: Response }
  | { type: AsyncStatus.rejected; error: Error };

type UseAsyncResult<T> = {
  setError: (error: unknown) => void;
  error: Error | null;
  status: AsyncStatus;
  response: Response | null;
  run: (promise: Promise<T>) => void;
};

export { AsyncStatus };
export type { AsyncAction, AsyncState, UseAsyncResult };
