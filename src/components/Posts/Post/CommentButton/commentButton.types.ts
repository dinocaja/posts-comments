import { ReactNode } from "react";

import { IComment } from "../../../../types/comments";
import { IComponent } from "../../../../types/components";

interface ICommentButtonProps extends IComponent {
  children: (isOpen: boolean, commentData?: IComment[]) => ReactNode;
  postId: number;
}

export type { ICommentButtonProps };
