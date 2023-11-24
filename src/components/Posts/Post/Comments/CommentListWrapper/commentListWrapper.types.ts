import { ReactNode } from "react";

import { IComment } from "../../../../../types/comments";
import { IComponent } from "../../../../../types/components";

interface ICommentListWrapperProps extends IComponent {
  children: (
    isError: boolean,
    isLoading: boolean,
    comments?: IComment[]
  ) => ReactNode;
  postId: number;
}

export type { ICommentListWrapperProps };
