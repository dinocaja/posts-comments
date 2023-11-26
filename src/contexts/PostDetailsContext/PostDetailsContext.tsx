import { createContext, useState } from "react";
import withMessageLog from "../../hoc/withMessageLog";

import { IComment } from "../../types/comments";
import {
  IPostDetailsContext,
  IPostDetailsProvider,
} from "./postDetailsContext.types";

const PostDetailsContext = createContext<IPostDetailsContext>({
  postDetails: {},
  setPostDetails: () => {},
  comments: null,
  setComments: () => {},
});

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

export { PostDetailsContext };
export default withMessageLog<IPostDetailsProvider>(PostDetailsProvider);
