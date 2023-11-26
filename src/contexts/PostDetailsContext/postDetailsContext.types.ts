import { Dispatch, ReactNode, SetStateAction } from "react";
import { IComment } from "../../types/comments";
import { IComponent } from "../../types/components";
import { IPostDetails } from "../../types/posts";

interface IPostDetailsContext {
  postDetails: Partial<IPostDetails>;
  setPostDetails: Dispatch<SetStateAction<Partial<IPostDetails>>>;
  comments: IComment[] | null;
  setComments: Dispatch<SetStateAction<IComment[] | null>>;
}

interface IPostDetailsProvider extends IComponent {
  children: ReactNode;
}

export type { IPostDetailsContext, IPostDetailsProvider };
