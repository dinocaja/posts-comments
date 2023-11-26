import { render, fireEvent } from "@testing-library/react";

import InputField from "../../../src/components/Shared/Input/Input";
import styles from "./input.module.css";

// Create a spy on console.error before running tests
const consoleErrorSpy = jest.spyOn(console, "error");

describe("InputField Component Tests", () => {
  test("renders input field with default props", () => {
    const { getByTestId } = render(<InputField data-testid='input' />);
    const inputElement = getByTestId("input");

    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveAttribute("type", "text");
    expect(inputElement).toHaveClass(styles.input);
  });

  test("handles controlled input value without controlledOnChange", () => {
    const { getByTestId } = render(
      <InputField data-testid='input' value='Hello' />
    );
    const inputElement = getByTestId("input");

    expect(consoleErrorSpy).toHaveBeenCalled();
    expect(inputElement).toHaveValue("Hello");
    expect(inputElement).toHaveAttribute("readonly");
  });

  test("handles input change for uncontrolled input", () => {
    const { getByTestId } = render(<InputField data-testid='input' />);
    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(inputElement).toHaveValue("New Value");
  });

  test("handles controlled input with controlledOnChange", () => {
    const handleChange = jest.fn();
    const { getByTestId } = render(
      <InputField
        data-testid='input'
        value='Controlled'
        onControlledChange={handleChange}
      />
    );
    const inputElement = getByTestId("input");

    fireEvent.change(inputElement, { target: { value: "New Value" } });

    expect(handleChange).toHaveBeenCalledWith("New Value");
  });

  test("handles readOnly input", () => {
    const { getByTestId } = render(<InputField data-testid='input' readOnly />);
    const inputElement = getByTestId("input");

    expect(inputElement).toHaveAttribute("readonly");
  });
});
