import { ComponentProps } from "../../../types/components";

enum SpinnerSize {
  sm = "small",
  lg = "large",
}

interface SpinnerProps extends ComponentProps {
  size?: SpinnerSize;
  className?: string;
}

export { SpinnerSize };
export type { SpinnerProps };
