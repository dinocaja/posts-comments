import { IComponent } from "../../../types/components";
import { IPostDetails } from "../../../types/posts";

interface IPostProps extends IComponent {
  post: IPostDetails;
}

export type { IPostProps };
