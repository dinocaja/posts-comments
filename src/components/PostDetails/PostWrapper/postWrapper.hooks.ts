import { useEffect } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { UsersApi } from "../../../constants/endpoints/users";
import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import useFetch from "../../../hooks/useFetch";
import { IPost } from "../../../types/posts";
import { IUser } from "../../../types/users";

function useFetchPostDetails(postId: number) {
  const { setPostDetails } = usePostDetailsContext();
  const {
    data: postData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useFetch<IPost>(PostsApi.getPostById(postId));

  const getUserUrl = postData?.id ? UsersApi.getUserById(postData.id) : "";
  const {
    data: userData,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useFetch<IUser>(getUserUrl);

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
