import { useCallback, useState } from "react";

function useToggle(initialValue?: boolean) {
  const [opened, setOpened] = useState(initialValue ?? false);

  const toggle = useCallback(() => {
    setOpened(!opened);
  }, [opened]);

  const handleOpen = useCallback(() => {
    setOpened(true);
  }, []);

  const handleClose = useCallback(() => {
    setOpened(false);
  }, []);

  return { opened, toggle, handleOpen, handleClose, setOpened };
}

export default useToggle;
