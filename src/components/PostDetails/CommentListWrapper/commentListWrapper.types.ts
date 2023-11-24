import { ReactNode } from "react";

import { IComponent } from "../../../types/components";

interface ICommentListWrapperProps extends IComponent {
  children: (isError: boolean, isLoading: boolean) => ReactNode;
}

export type { ICommentListWrapperProps };
