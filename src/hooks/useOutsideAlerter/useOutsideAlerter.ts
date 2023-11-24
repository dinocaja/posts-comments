import { RefObject, useCallback, useEffect } from "react";

function useOutsideAlerter(
  ref: RefObject<HTMLDivElement>,
  onClick: () => void
) {
  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        onClick();
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [ref]
  );

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [handleClickOutside]);
}

export default useOutsideAlerter;
