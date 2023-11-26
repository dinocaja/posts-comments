import { ReactNode } from "react";

import { Comment } from "../../../../../types/comments";
import { ComponentProps } from "../../../../../types/components";

interface CommentListWrapperProps extends ComponentProps {
  children: (
    isError: boolean,
    isLoading: boolean,
    comments?: Comment[]
  ) => ReactNode;
  postId: number;
}

export type { CommentListWrapperProps };
