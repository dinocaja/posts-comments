import { useEffect } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { UsersApi } from "../../../constants/endpoints/users";
import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import { AsyncStatus } from "../../../hooks/useAsync";
import useFetch from "../../../hooks/useFetch";
import { IPost } from "../../../types/posts";
import { IUser } from "../../../types/users";

function useFetchPostDetails(postId: number) {
  const { setPostDetails } = usePostDetailsContext();
  const { status: postStatus, data: postData } = useFetch<IPost>(
    PostsApi.getPostById(postId)
  );
  const getUserUrl = postData?.id ? UsersApi.getUserById(postData.id) : "";
  const { status: userStatus, data: userData } = useFetch<IUser>(getUserUrl);

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

  const isError =
    postStatus === AsyncStatus.rejected || userStatus === AsyncStatus.rejected;

  const isLoading =
    postStatus === AsyncStatus.pending || userStatus === AsyncStatus.pending;

  return { isError, isLoading };
}

export { useFetchPostDetails };
