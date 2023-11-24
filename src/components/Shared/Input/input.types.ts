import { InputHTMLAttributes } from "react";

import { IComponent } from "../../../types/components";

interface IInputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    IComponent {
  onControlledChange?: (value: string) => void;
  label?: string;
}

export type { IInputFieldProps };
