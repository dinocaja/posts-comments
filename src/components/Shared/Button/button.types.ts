import { ButtonHTMLAttributes } from "react";

import { IComponent } from "../../../types/components";

interface IButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    IComponent {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

enum ButtonSize {
  sm = "small",
  lg = "large",
}

enum ButtonVariant {
  primary = "primary",
  secondary = "secondary",
}

export { ButtonSize, ButtonVariant };
export type { IButtonProps };
