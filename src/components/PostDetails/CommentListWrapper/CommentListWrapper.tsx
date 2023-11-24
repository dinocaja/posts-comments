import { useEffect } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import withMessageLog from "../../../hoc/withMessageLog";
import { AsyncStatus } from "../../../hooks/useAsync";
import useFetch from "../../../hooks/useFetch";
import { IComment } from "../../../types/comments";

import { ICommentListWrapperProps } from "./commentListWrapper.types";

function CommentListWrapper({ children }: ICommentListWrapperProps) {
  const { postDetails, setComments } = usePostDetailsContext();

  const getCommentsUrl = postDetails?.id
    ? PostsApi.getCommentsByPostId(postDetails?.id)
    : "";
  const { status: commentsStatus, data: commentsData } =
    useFetch<IComment[]>(getCommentsUrl);

  useEffect(() => {
    if (commentsData) setComments(commentsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsData]);

  const isError = commentsStatus === AsyncStatus.rejected;
  const isLoading = commentsStatus === AsyncStatus.pending;

  return <>{children(isError, isLoading)}</>;
}

export default withMessageLog<ICommentListWrapperProps>(CommentListWrapper);
