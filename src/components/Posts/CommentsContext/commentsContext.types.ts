import { Dispatch, ReactNode, SetStateAction } from "react";
import { FetchedComments } from "../../../types/comments";
import { ComponentProps } from "../../../types/components";

interface CommentsContextProps {
  fetchedComments: FetchedComments[];
  setFetchedComments: Dispatch<SetStateAction<FetchedComments[]>>;
}

interface CommentsProviderProps extends ComponentProps {
  children: ReactNode;
}

export type { CommentsContextProps, CommentsProviderProps };
