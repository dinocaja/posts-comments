import withMessageLog from "../../../../../hoc/withMessageLog";

import { useFetchComments } from "./commentListWrapper.hooks";
import { ICommentListWrapperProps } from "./commentListWrapper.types";

function CommentListWrapper({ children, postId }: ICommentListWrapperProps) {
  const { isError, isLoading, data } = useFetchComments(postId);

  return <>{children?.(isError, isLoading, data)}</>;
}

export default withMessageLog<ICommentListWrapperProps>(CommentListWrapper);
