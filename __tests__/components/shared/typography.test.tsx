import { render } from "@testing-library/react";
import {
  TypographyAlignment,
  TypographyVariant,
} from "../../../src/components/Shared/Typography/typography.types";
import Typography from "../../../src/components/Shared/Typography/Typography";
import styles from "./typography.module.css";

describe("Typography Component Tests", () => {
  test("renders default typography paragraph", () => {
    const { getByText } = render(<Typography>Hello, World!</Typography>);
    const paragraphElement = getByText("Hello, World!");

    expect(paragraphElement).toBeInTheDocument();
    expect(paragraphElement).toHaveClass(styles.typography);
    expect(paragraphElement).toHaveClass(styles.body1);
    expect(paragraphElement).toHaveClass(styles.left);
  });

  test("applies variant and alignment classes", () => {
    const { getByText } = render(
      <Typography
        variant={TypographyVariant.h2}
        alignment={TypographyAlignment.center}
      >
        Headline
      </Typography>
    );
    const paragraphElement = getByText("Headline");

    expect(paragraphElement).toHaveClass(styles.typography);
    expect(paragraphElement).toHaveClass(styles.h2);
    expect(paragraphElement).toHaveClass(styles.center);
  });

  test("handles custom className and additional props", () => {
    const { getByText } = render(
      <Typography className='custom-class' data-testid='custom-typography'>
        Custom Typography
      </Typography>
    );
    const paragraphElement = getByText("Custom Typography");

    expect(paragraphElement).toHaveClass(styles.typography);
    expect(paragraphElement).toHaveClass("custom-class");
    expect(paragraphElement).toHaveAttribute(
      "data-testid",
      "custom-typography"
    );
  });
});
