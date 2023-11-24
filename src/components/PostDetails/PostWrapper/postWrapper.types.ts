import { ReactNode } from "react";

import { IComponent } from "../../../types/components";

interface IPostWrapperProps extends IComponent {
  children: (isError: boolean, isLoading: boolean) => ReactNode;
  postId: number;
}

export type { IPostWrapperProps };
