import { ComponentProps } from "../../../types/components";
import { PostDetails } from "../../../types/posts";

interface PostProps extends ComponentProps {
  post: PostDetails;
}

export type { PostProps };
