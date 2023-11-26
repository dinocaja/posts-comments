import { ButtonHTMLAttributes } from "react";

import { ComponentProps } from "../../../types/components";

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ComponentProps {
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
export type { ButtonProps };
