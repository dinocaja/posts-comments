import { renderHook, act } from "@testing-library/react-hooks";
import useAsync, { AsyncStatus } from "../../src/hooks/useAsync";

// Mock async function for testing
const mockAsyncFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 100));
  return { data: "Mock Data" };
};

// Mock async function that throws an error
const mockAsyncFunctionWithError = async () => {
  throw new Error("Mock Error");
};

describe("useAsync Hook Tests", () => {
  test("initial state", () => {
    const { result } = renderHook(() => useAsync());

    expect(result.current.status).toBe(AsyncStatus.idle);
    expect(result.current.response).toBe(null);
    expect(result.current.error).toBe(null);
  });

  test("run function with successful promise", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync());

    act(() => {
      result.current.run(mockAsyncFunction());
    });

    await waitForNextUpdate();

    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.response).toEqual({ data: "Mock Data" });
    expect(result.current.error).toBe(null);
  });

  test("run function with promise that throws an error", async () => {
    const { result, waitForNextUpdate } = renderHook(() => useAsync());

    act(() => {
      result.current.run(mockAsyncFunctionWithError());
    });

    await waitForNextUpdate();

    expect(result.current.status).toBe(AsyncStatus.rejected);
    expect(result.current.response).toBe(null);
    expect(result.current.error).toEqual(new Error("Mock Error"));
  });

  test("setError function", () => {
    const { result } = renderHook(() => useAsync());

    act(() => {
      result.current.setError(new Error("Custom Error"));
    });

    expect(result.current.status).toBe(AsyncStatus.rejected);
    expect(result.current.response).toBe(null);
    expect(result.current.error).toEqual(new Error("Custom Error"));
  });
});
