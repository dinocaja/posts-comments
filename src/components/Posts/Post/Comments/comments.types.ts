import { Comment } from "../../../../types/comments";
import { ComponentProps } from "../../../../types/components";

interface CommentsProps extends ComponentProps {
  postId: number;
  fetchedComments?: Comment[];
}

export type { CommentsProps };
