import { useEffect } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import withMessageLog from "../../../hoc/withMessageLog";
import useFetch from "../../../hooks/useFetch";
import { Comment } from "../../../types/comments";

import { CommentListWrapperProps } from "./commentListWrapper.types";

function CommentListWrapper({ children }: CommentListWrapperProps) {
  const { postDetails, setComments } = usePostDetailsContext();

  const getCommentsUrl = postDetails?.id
    ? PostsApi.getCommentsByPostId(postDetails?.id)
    : "";
  const {
    data: commentsData,
    isError,
    isLoading,
  } = useFetch<Comment[]>(getCommentsUrl);

  useEffect(() => {
    if (commentsData) setComments(commentsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsData]);

  return <>{children(isError, isLoading)}</>;
}

export default withMessageLog<CommentListWrapperProps>(CommentListWrapper);
