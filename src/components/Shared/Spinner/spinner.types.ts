import { IComponent } from "../../../types/components";

enum SpinnerSize {
  sm = "small",
  lg = "large",
}

interface ISpinnerProps extends IComponent {
  size?: SpinnerSize;
  className?: string;
}

export { SpinnerSize };
export type { ISpinnerProps };
