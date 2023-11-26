import { HTMLAttributes } from "react";

import { ComponentProps } from "../../../types/components";

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

type TypographyExtendedProps = HTMLAttributes<
  HTMLParagraphElement | HTMLHeadingElement
>;

interface TypographyProps extends TypographyExtendedProps, ComponentProps {
  variant?: TypographyVariant;
  alignment?: TypographyAlignment;
}

export { TypographyAlignment, TypographyVariant };
export type { TypographyProps };
