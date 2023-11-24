import { IUser } from "./users";

interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface IPostDetails extends IPost {
  user?: IUser;
}

export type { IPost, IPostDetails };
