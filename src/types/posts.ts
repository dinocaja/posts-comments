import { User } from "./users";

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface PostDetails extends Post {
  user?: User;
}

export type { Post, PostDetails };
