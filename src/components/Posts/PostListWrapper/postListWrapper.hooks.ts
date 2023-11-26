import { useEffect, useState } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { UsersApi } from "../../../constants/endpoints/users";
import useFetch from "../../../hooks/useFetch";
import { Post, PostDetails } from "../../../types/posts";
import { User } from "../../../types/users";
import { debounce } from "../../../utils/timeoutUtils/debounce";

function useFetchPostsDetails() {
  const [postsDetails, setPostsDetails] = useState<PostDetails[]>([]);
  const {
    data: postsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useFetch<Post[]>(PostsApi.getAllPosts());
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useFetch<User[]>(UsersApi.getAllUsers());

  useEffect(() => {
    if (!!postsData && !!usersData) {
      const combinedPostsWithUsers = postsData?.map((post) => ({
        ...post,
        user: usersData?.find((user) => user.id === post.userId),
      }));
      combinedPostsWithUsers && setPostsDetails(combinedPostsWithUsers);
    }
  }, [postsData, usersData]);

  return {
    postsDetails,
    isError: isPostsError || isUsersError,
    isLoading: isPostsLoading || isUsersLoading,
  };
}

function useFilterPostsDetails(postsDetails: PostDetails[]) {
  const [filteredPostsDetails, setFilteredPostsDetails] = useState<
    PostDetails[]
  >([]);
  const [filterValue, setFilterValue] = useState("");
  const changeFilterValue = debounce(setFilterValue);

  useEffect(() => {
    let newFilteredDetails;
    if (!filterValue) newFilteredDetails = postsDetails;
    else
      newFilteredDetails = postsDetails.filter((post) => {
        const userName = post.user ? post.user.name.toLowerCase() : "";
        return userName.includes(filterValue.toLowerCase());
      });
    setFilteredPostsDetails(newFilteredDetails);
  }, [filterValue, postsDetails]);

  return { changeFilterValue, filteredPostsDetails };
}

export { useFetchPostsDetails, useFilterPostsDetails };
