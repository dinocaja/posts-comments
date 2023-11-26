import { render, fireEvent } from "@testing-library/react";
import Button from "../../../components/Shared/Button/Button";
import {
  ButtonVariant,
  ButtonSize,
} from "../../../components/Shared/Button/button.types";
import styles from "./button.module.css";

describe("Button Component Tests", () => {
  test("renders Button component", () => {
    render(<Button />);
  });

  test("handles button click", () => {
    const onClickMock = jest.fn();
    const { getByRole } = render(<Button onClick={onClickMock} />);
    const button = getByRole("button");

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalled();
  });

  test("applies provided props", () => {
    const { getByRole } = render(<Button type='submit' className='custom' />);
    const button = getByRole("button");

    expect(button).toHaveAttribute("type", "submit");
    expect(button).toHaveClass("custom");
  });

  test("applies styles based on variant and size", () => {
    const { getByRole } = render(
      <Button variant={ButtonVariant.secondary} size={ButtonSize.sm} />
    );
    const button = getByRole("button");

    expect(button).toHaveClass(styles.secondary);
    expect(button).toHaveClass(styles.smSize);
  });

  test("includes aria attributes for accessibility", () => {
    const { getByRole } = render(<Button aria-label='Test Button' />);
    const button = getByRole("button");

    expect(button).toHaveAttribute("aria-label", "Test Button");
  });
});
