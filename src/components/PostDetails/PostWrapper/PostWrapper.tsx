import withMessageLog from "../../../hoc/withMessageLog";

import { useFetchPostDetails } from "./postWrapper.hooks";
import { IPostWrapperProps } from "./postWrapper.types";

function PostsWrapper({ children, postId }: IPostWrapperProps) {
  const { isError, isLoading } = useFetchPostDetails(postId);

  return <>{children(isError, isLoading)}</>;
}

export default withMessageLog<IPostWrapperProps>(PostsWrapper);
