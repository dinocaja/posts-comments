import { Comment } from "../../../../../types/comments";
import { ComponentProps } from "../../../../../types/components";

interface CommentProps extends ComponentProps, Comment {}

export type { CommentProps };
