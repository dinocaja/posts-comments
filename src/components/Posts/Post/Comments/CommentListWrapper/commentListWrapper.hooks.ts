import { useEffect } from "react";

import { PostsApi } from "../../../../../constants/endpoints/posts";
import { useCommentsContext } from "../../../../../contexts/CommentsContext";
import { AsyncStatus } from "../../../../../hooks/useAsync";
import useFetch from "../../../../../hooks/useFetch";
import { IComment } from "../../../../../types/comments";

function useFetchComments(postId: number) {
  const { fetchedComments, setFetchedComments } = useCommentsContext();

  const { status, data } = useFetch<IComment[]>(
    PostsApi.getCommentsByPostId(postId)
  );

  useEffect(() => {
    const isAlreadyAdded = fetchedComments.some(
      (fetchedComment) => !!fetchedComment[postId]
    );
    if (status === AsyncStatus.resolved && !isAlreadyAdded && !!data) {
      const newComments = {
        [postId]: data,
      };
      setFetchedComments([...fetchedComments, newComments]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedComments, postId, status, data]);

  const isError = status === AsyncStatus.rejected;
  const isLoading = status === AsyncStatus.pending;

  return { isError, isLoading, data };
}

export { useFetchComments };
