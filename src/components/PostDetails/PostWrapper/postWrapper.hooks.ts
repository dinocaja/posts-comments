import { useEffect } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { UsersApi } from "../../../constants/endpoints/users";
import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import useFetch from "../../../hooks/useFetch";
import { Post } from "../../../types/posts";
import { User } from "../../../types/users";

function useFetchPostDetails(postId: number) {
  const { setPostDetails } = usePostDetailsContext();
  const {
    data: postData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useFetch<Post>(PostsApi.getPostById(postId));

  const getUserUrl = postData?.id ? UsersApi.getUserById(postData.id) : "";
  const {
    data: userData,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useFetch<User>(getUserUrl);

  useEffect(() => {
    if (postData && userData) {
      const postDetails = {
        ...postData,
        user: userData,
      };
      setPostDetails(postDetails);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [postData, userData]);

  return {
    isError: isPostsError || isUsersError,
    isLoading: isPostsLoading || isUsersLoading,
  };
}

export { useFetchPostDetails };
