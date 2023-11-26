import { ReactNode } from "react";

import { Comment } from "../../../../types/comments";
import { ComponentProps } from "../../../../types/components";

interface CommentButtonProps extends ComponentProps {
  children: (isOpen: boolean, commentData?: Comment[]) => ReactNode;
  postId: number;
}

export type { CommentButtonProps };
