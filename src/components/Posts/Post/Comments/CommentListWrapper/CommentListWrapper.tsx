import withMessageLog from "../../../../../hoc/withMessageLog";

import { useFetchComments } from "./commentListWrapper.hooks";
import { CommentListWrapperProps } from "./commentListWrapper.types";

function CommentListWrapper({ children, postId }: CommentListWrapperProps) {
  const { isError, isLoading, data } = useFetchComments(postId);

  return <>{children?.(isError, isLoading, data)}</>;
}

export default withMessageLog<CommentListWrapperProps>(CommentListWrapper);
