import { createContext, useState } from "react";
import withMessageLog from "../../hoc/withMessageLog";

import { FetchedComments } from "../../types/comments";
import { ICommentsContext, ICommentsProvider } from "./commentsContext.types";

const CommentsContext = createContext<ICommentsContext>({
  fetchedComments: [],
  setFetchedComments: () => {},
});

function CommentsProvider({ children }: ICommentsProvider) {
  const [fetchedComments, setFetchedComments] = useState<FetchedComments[]>([]);

  return (
    <CommentsContext.Provider value={{ fetchedComments, setFetchedComments }}>
      {children}
    </CommentsContext.Provider>
  );
}

export { CommentsContext };
export default withMessageLog<ICommentsProvider>(CommentsProvider);
