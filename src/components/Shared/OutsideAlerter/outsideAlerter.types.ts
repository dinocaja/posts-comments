import { ReactNode } from "react";

import { IComponent } from "../../../types/components";

interface IOutsideAlerterProps extends IComponent {
  children: ReactNode;
  onClick: () => void;
}

export type { IOutsideAlerterProps };
