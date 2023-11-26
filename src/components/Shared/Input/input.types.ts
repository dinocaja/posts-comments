import { InputHTMLAttributes } from "react";

import { ComponentProps } from "../../../types/components";

interface InputFieldProps
  extends InputHTMLAttributes<HTMLInputElement>,
    ComponentProps {
  onControlledChange?: (value: string) => void;
  label?: string;
}

export type { InputFieldProps };
