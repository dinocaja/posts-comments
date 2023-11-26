import { renderHook } from "@testing-library/react-hooks";
import { statusCodes } from "../../src/constants/statusCodes";
import { AsyncStatus } from "../../src/hooks/useAsync";
import useFetch from "../../src/hooks/useFetch";

const mockGateWay = "https://jsonplaceholder.typicode.com";

// Mock successful fetch response
const mockSuccessResponse = { data: "Mock Data" };
const mockFetchSuccess = jest.fn().mockResolvedValue({
  ok: true,
  status: statusCodes.OK,
  json: jest.fn().mockResolvedValue(mockSuccessResponse),
});

// Mock fetch response with error
const mockFetchError = jest.fn().mockResolvedValue({
  ok: false,
  status: statusCodes.NOT_FOUND,
  statusText: "Not Found",
});

describe("useFetch Hook Tests", () => {
  test("fetches data successfully", async () => {
    global.fetch = mockFetchSuccess;

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`${mockGateWay}/users`)
    );

    await waitForNextUpdate();

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.data).toEqual(mockSuccessResponse);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isError).toBeFalsy();
  });

  test("handles fetch error", async () => {
    global.fetch = mockFetchError;

    const { result, waitForNextUpdate } = renderHook(() =>
      useFetch(`${mockGateWay}/users`)
    );

    await waitForNextUpdate();

    expect(result.current.status).toBe(AsyncStatus.rejected);
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isError).toBeTruthy();
  });

  test("does nothing when no URL is provided", async () => {
    global.fetch = mockFetchSuccess;

    const { result } = renderHook(() => useFetch(""));

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.idle);
    expect(result.current.data).toBeUndefined();
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isError).toBeFalsy();
  });

  test("re-fetches when URL changes", async () => {
    global.fetch = mockFetchSuccess;

    const { result, rerender, waitForNextUpdate } = renderHook(
      ({ url }) => useFetch(url),
      { initialProps: { url: `${mockGateWay}/users` } }
    );

    await waitForNextUpdate();

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.data).toEqual(mockSuccessResponse);

    rerender({ url: `${mockGateWay}/posts` });

    await waitForNextUpdate();

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.data).toEqual(mockSuccessResponse);
  });
});
