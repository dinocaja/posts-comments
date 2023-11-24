import { ReactNode } from "react";

import { IComponent } from "../../../../types/components";

interface IMainLayoutProps extends IComponent {
  children: ReactNode;
}

export type { IMainLayoutProps };
