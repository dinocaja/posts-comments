import { useEffect, useRef, useState } from "react";

import { statusCodes } from "../../constants/appDefaults/statusCodes";
import useAsync, { AsyncStatus } from "../useAsync";

import { DEFAULT_OPTIONS } from "./useFetch.constants";

function useFetch<T>(url: string, options: RequestInit = {}) {
  const previousUrl = useRef("");
  const [data, setData] = useState<T>();
  const { error, status, response, run, setError } = useAsync<T>();

  useEffect(() => {
    if (!url || url === previousUrl.current) return;
    previousUrl.current = url;
    const fetchOptions = { ...DEFAULT_OPTIONS, ...options };
    run(fetch(url, { ...fetchOptions }) as Promise<T>);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [run, url]);

  useEffect(() => {
    async function handleFetchedData() {
      setData(await response?.json());
    }
    if (status === AsyncStatus.resolved) {
      if (response?.status === statusCodes.OK) handleFetchedData();
      else setError(response?.statusText);
    }
  }, [error, response, status, setError]);

  const isLoading = status === AsyncStatus.pending;
  const isError = status === AsyncStatus.rejected;

  return { error, status, data, isLoading, isError };
}

export default useFetch;
