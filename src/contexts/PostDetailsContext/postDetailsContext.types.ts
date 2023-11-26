import { Dispatch, ReactNode, SetStateAction } from "react";
import { Comment } from "../../types/comments";
import { ComponentProps } from "../../types/components";
import { PostDetails } from "../../types/posts";

interface PostDetailsContextProps {
  postDetails: Partial<PostDetails>;
  setPostDetails: Dispatch<SetStateAction<Partial<PostDetails>>>;
  comments: Comment[] | null;
  setComments: Dispatch<SetStateAction<Comment[] | null>>;
}

interface PostDetailsProviderProps extends ComponentProps {
  children: ReactNode;
}

export type { PostDetailsContextProps, PostDetailsProviderProps };
