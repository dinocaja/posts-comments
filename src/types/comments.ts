interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

type FetchedComments = {
  [postId: number]: Comment[];
};

export type { FetchedComments, Comment };
