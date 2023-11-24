import { IComment } from "../../../../types/comments";
import { IComponent } from "../../../../types/components";

interface ICommentsProps extends IComponent {
  postId: number;
  fetchedComments?: IComment[];
}

export type { ICommentsProps };
