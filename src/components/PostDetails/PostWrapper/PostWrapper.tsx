import withMessageLog from "../../../hoc/withMessageLog";

import { useFetchPostDetails } from "./postWrapper.hooks";
import { PostWrapperProps } from "./postWrapper.types";

function PostsWrapper({ children, postId }: PostWrapperProps) {
  const { isError, isLoading } = useFetchPostDetails(postId);

  return <>{children(isError, isLoading)}</>;
}

export default withMessageLog<PostWrapperProps>(PostsWrapper);
