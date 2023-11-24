import {
  createContext,
  Dispatch,
  ReactNode,
  SetStateAction,
  useContext,
  useState,
} from "react";

import { FetchedComments } from "../types/comments";

interface ICommentsContext {
  fetchedComments: FetchedComments[];
  setFetchedComments: Dispatch<SetStateAction<FetchedComments[]>>;
}

const CommentsContext = createContext<ICommentsContext>({
  fetchedComments: [],
  setFetchedComments: () => {},
});

interface ICommentsProvider {
  children: ReactNode;
}

function CommentsProvider({ children }: ICommentsProvider) {
  const [fetchedComments, setFetchedComments] = useState<FetchedComments[]>([]);

  return (
    <CommentsContext.Provider value={{ fetchedComments, setFetchedComments }}>
      {children}
    </CommentsContext.Provider>
  );
}

const useCommentsContext = () => {
  const context = useContext(CommentsContext);
  if (!context)
    throw new Error("You must use CommentsContext within CommentsProvider");
  return context;
};

export { CommentsContext, CommentsProvider, useCommentsContext };
