import { render } from "@testing-library/react";
import withMessageLog from "../../hoc/withMessageLog";
import { helloMessage as defaultHelloMessage } from "../../constants/appDefaults/messageDefaults";

// Create a spy on console.log before running tests
const consoleLogSpy = jest.spyOn(console, "log");

// Dummy component for testing
function DummyComponent() {
  return null;
}

describe("withMessageLog Higher-Order Component Tests", () => {
  test("logs the message and passes it to the component", () => {
    const ComponentWithMessageLog = withMessageLog(DummyComponent);
    render(<ComponentWithMessageLog />);

    expect(consoleLogSpy).toHaveBeenCalledWith(
      `${defaultHelloMessage} DummyComponent`
    );
  });

  test("overrides the message via HOC param if provided", () => {
    const ComponentWithMessageLog = withMessageLog(DummyComponent, "Override");
    render(<ComponentWithMessageLog />);

    expect(consoleLogSpy).toHaveBeenCalledWith("Override DummyComponent");
  });

  test("overrides the message via props if provided", () => {
    const ComponentWithMessageLog = withMessageLog(DummyComponent);
    render(<ComponentWithMessageLog helloMessage='Override' />);

    expect(consoleLogSpy).toHaveBeenCalledWith("Override DummyComponent");
  });
});
