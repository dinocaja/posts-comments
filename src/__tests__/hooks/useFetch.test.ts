import { renderHook, act } from "@testing-library/react";
import { waitFor } from "@testing-library/react";
import { statusCodes } from "../../constants/appDefaults/statusCodes";
import { AsyncStatus } from "../../hooks/useAsync";
import useFetch from "../../hooks/useFetch";

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

    const { result } = renderHook(() => useFetch(`${mockGateWay}/users`));

    await waitFor(() => result.current.status === AsyncStatus.resolved);
    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.data).toEqual(mockSuccessResponse);
    expect(result.current.isLoading).toBeFalsy();
    expect(result.current.isError).toBeFalsy();
  });

  test("handles fetch error", async () => {
    global.fetch = mockFetchError;

    const { result } = renderHook(() => useFetch(`${mockGateWay}/users`));

    await waitFor(() => result.current.status === AsyncStatus.resolved);
    await waitFor(() => !!result.current.data);

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

    const { result, rerender } = renderHook(({ url }) => useFetch(url), {
      initialProps: { url: `${mockGateWay}/users` },
    });

    await waitFor(() => result.current.status === AsyncStatus.resolved);
    await waitFor(() => !!result.current.data);

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.data).toEqual(mockSuccessResponse);

    rerender({ url: `${mockGateWay}/posts` });

    await waitFor(() => result.current.status === AsyncStatus.resolved);

    expect(result.current.error).toBeNull();
    expect(result.current.status).toBe(AsyncStatus.resolved);
    expect(result.current.data).toEqual(mockSuccessResponse);
  });
});
