import { useEffect, useState } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { UsersApi } from "../../../constants/endpoints/users";
import useFetch from "../../../hooks/useFetch";
import { IPost, IPostDetails } from "../../../types/posts";
import { IUser } from "../../../types/users";
import { debounce } from "../../../utils/debounce";

function useFetchPostsDetails() {
  const [postsDetails, setPostsDetails] = useState<IPostDetails[]>([]);
  const {
    data: postsData,
    isLoading: isPostsLoading,
    isError: isPostsError,
  } = useFetch<IPost[]>(PostsApi.getAllPosts());
  const {
    data: usersData,
    isLoading: isUsersLoading,
    isError: isUsersError,
  } = useFetch<IUser[]>(UsersApi.getAllUsers());

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

function useFilterPostsDetails(postsDetails: IPostDetails[]) {
  const [filteredPostsDetails, setFilteredPostsDetails] = useState<
    IPostDetails[]
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
