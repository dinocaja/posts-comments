import { ReactNode } from "react";

import { IComponent } from "../../../types/components";
import { IPostDetails } from "../../../types/posts";

interface IPostListWrapperProps extends IComponent {
  children: (
    isError: boolean,
    isLoading: boolean,
    postUsers: IPostDetails[],
    changeFilterValue: (value: string) => void
  ) => ReactNode;
}

export type { IPostListWrapperProps };
