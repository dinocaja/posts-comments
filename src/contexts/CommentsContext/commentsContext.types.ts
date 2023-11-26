import { Dispatch, ReactNode, SetStateAction } from "react";
import { FetchedComments } from "../../types/comments";
import { IComponent } from "../../types/components";

interface ICommentsContext {
  fetchedComments: FetchedComments[];
  setFetchedComments: Dispatch<SetStateAction<FetchedComments[]>>;
}

interface ICommentsProvider extends IComponent {
  children: ReactNode;
}

export type { ICommentsContext, ICommentsProvider };
