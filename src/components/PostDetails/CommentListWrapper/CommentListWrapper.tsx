import { useEffect } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import withMessageLog from "../../../hoc/withMessageLog";
import useFetch from "../../../hooks/useFetch";
import { IComment } from "../../../types/comments";

import { ICommentListWrapperProps } from "./commentListWrapper.types";

function CommentListWrapper({ children }: ICommentListWrapperProps) {
  const { postDetails, setComments } = usePostDetailsContext();

  const getCommentsUrl = postDetails?.id
    ? PostsApi.getCommentsByPostId(postDetails?.id)
    : "";
  const {
    data: commentsData,
    isError,
    isLoading,
  } = useFetch<IComment[]>(getCommentsUrl);

  useEffect(() => {
    if (commentsData) setComments(commentsData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [commentsData]);

  return <>{children(isError, isLoading)}</>;
}

export default withMessageLog<ICommentListWrapperProps>(CommentListWrapper);
