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
  | { status: AsyncStatus.pending }
  | { status: AsyncStatus.resolved; response: Response }
  | { status: AsyncStatus.rejected; error: Error };

type UseAsyncResult<T> = {
  setError: (error: unknown) => void;
  error: Error | null;
  status: AsyncStatus;
  response: Response | null;
  run: (promise: Promise<T>) => void;
};

export { AsyncStatus };
export type { AsyncAction, AsyncState, UseAsyncResult };
