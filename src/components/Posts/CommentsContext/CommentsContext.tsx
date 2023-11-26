import { createContext, useState } from "react";
import withMessageLog from "../../../hoc/withMessageLog";

import { FetchedComments } from "../../../types/comments";
import {
  CommentsContextProps,
  CommentsProviderProps,
} from "./commentsContext.types";

const CommentsContext = createContext<CommentsContextProps>({
  fetchedComments: [],
  setFetchedComments: () => {},
});

function CommentsProvider({ children }: CommentsProviderProps) {
  const [fetchedComments, setFetchedComments] = useState<FetchedComments[]>([]);

  return (
    <CommentsContext.Provider value={{ fetchedComments, setFetchedComments }}>
      {children}
    </CommentsContext.Provider>
  );
}

export { CommentsContext };
export default withMessageLog<CommentsProviderProps>(CommentsProvider);
