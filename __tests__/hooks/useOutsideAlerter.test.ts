import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import useOutsideAlerter from "../../src/hooks/useOutsideAlerter";

describe("useOutsideAlerter Hook Tests", () => {
  test("calls onClick when clicked outside the ref", () => {
    const onClickMock = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useOutsideAlerter(ref, onClickMock));

    act(() => {
      document.dispatchEvent(new MouseEvent("mousedown"));
    });

    expect(onClickMock).toHaveBeenCalled();
  });

  test("does not call onClick when clicked inside the ref", () => {
    const onClickMock = jest.fn();
    const ref = { current: document.createElement("div") };

    renderHook(() => useOutsideAlerter(ref, onClickMock));

    act(() => {
      ref.current.dispatchEvent(new MouseEvent("mousedown"));
    });

    expect(onClickMock).not.toHaveBeenCalled();
  });

  test("removes event listener on unmount", () => {
    const onClickMock = jest.fn();
    const ref = { current: document.createElement("div") };

    const { unmount } = renderHook(() => useOutsideAlerter(ref, onClickMock));

    act(() => {
      document.dispatchEvent(new MouseEvent("mousedown"));
    });

    unmount();

    act(() => {
      document.dispatchEvent(new MouseEvent("mousedown"));
    });

    expect(onClickMock).toHaveBeenCalledTimes(1); // Should not increase after unmount
  });
});
