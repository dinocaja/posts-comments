import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { IComment } from "../types/comments";
import { IPostDetails } from "../types/posts";

interface IPostDetailsContext {
  postDetails: Partial<IPostDetails>;
  setPostDetails: Dispatch<SetStateAction<Partial<IPostDetails>>>;
  comments: IComment[] | null;
  setComments: Dispatch<SetStateAction<IComment[] | null>>;
}

const PostDetailsContext = createContext<IPostDetailsContext>({
  postDetails: {},
  setPostDetails: () => {},
  comments: null,
  setComments: () => {},
});

interface IPostDetailsProvider {
  children: ReactNode;
}

function PostDetailsProvider({ children }: IPostDetailsProvider) {
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState<IComment[] | null>(null);

  return (
    <PostDetailsContext.Provider
      value={{ postDetails, setPostDetails, comments, setComments }}
    >
      {children}
    </PostDetailsContext.Provider>
  );
}

const usePostDetailsContext = () => {
  const context = useContext(PostDetailsContext);
  if (!context)
    throw new Error(
      "You must use PostDetailsContext within PostDetailsProvider"
    );
  return context;
};

export { PostDetailsContext, PostDetailsProvider, usePostDetailsContext };
