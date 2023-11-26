import { ReactNode } from "react";

import { ComponentProps } from "../../../types/components";

interface OutsideAlerterProps extends ComponentProps {
  children: ReactNode;
  onClick: () => void;
}

export type { OutsideAlerterProps };
