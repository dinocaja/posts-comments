import { useEffect } from "react";

import { PostsApi } from "../../../../../constants/endpoints/posts";
import { useCommentsContext } from "../../../CommentsContext";
import useFetch from "../../../../../hooks/useFetch";
import { Comment } from "../../../../../types/comments";

function useFetchComments(postId: number) {
  const { fetchedComments, setFetchedComments } = useCommentsContext();

  const { data, isLoading, isError } = useFetch<Comment[]>(
    PostsApi.getCommentsByPostId(postId)
  );

  useEffect(() => {
    const isAlreadyAdded = fetchedComments.some(
      (fetchedComment) => !!fetchedComment[postId]
    );
    if (!isAlreadyAdded && !!data) {
      const newComments = {
        [postId]: data,
      };
      setFetchedComments([...fetchedComments, newComments]);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [fetchedComments, postId, status, data]);

  return { isError, isLoading, data };
}

export { useFetchComments };
