import { HTMLAttributes } from "react";

import { IComponent } from "../../../types/components";

enum TypographyVariant {
  h1 = "h1",
  h2 = "h2",
  body1 = "body1",
  body2 = "body2",
}

enum TypographyAlignment {
  center = "center",
  left = "left",
  right = "right",
}

interface ITypographyProps
  extends HTMLAttributes<HTMLParagraphElement>,
    IComponent {
  variant?: TypographyVariant;
  alignment?: TypographyAlignment;
}

export { TypographyAlignment, TypographyVariant };
export type { ITypographyProps };
