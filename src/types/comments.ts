interface IComment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type FetchedComments = {
  [postId: number]: IComment[];
};

export type { FetchedComments, IComment };
