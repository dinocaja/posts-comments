import { createContext, useState } from "react";
import withMessageLog from "../../hoc/withMessageLog";

import { Comment } from "../../types/comments";
import {
  PostDetailsContextProps,
  PostDetailsProviderProps,
} from "./postDetailsContext.types";

const PostDetailsContext = createContext<PostDetailsContextProps>({
  postDetails: {},
  setPostDetails: () => {},
  comments: null,
  setComments: () => {},
});

function PostDetailsProvider({ children }: PostDetailsProviderProps) {
  const [postDetails, setPostDetails] = useState({});
  const [comments, setComments] = useState<Comment[] | null>(null);

  return (
    <PostDetailsContext.Provider
      value={{ postDetails, setPostDetails, comments, setComments }}
    >
      {children}
    </PostDetailsContext.Provider>
  );
}

export { PostDetailsContext };
export default withMessageLog<PostDetailsProviderProps>(PostDetailsProvider);
