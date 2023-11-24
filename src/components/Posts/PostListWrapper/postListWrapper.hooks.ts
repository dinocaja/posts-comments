import { useEffect, useState } from "react";

import { PostsApi } from "../../../constants/endpoints/posts";
import { UsersApi } from "../../../constants/endpoints/users";
import { AsyncStatus } from "../../../hooks/useAsync";
import useFetch from "../../../hooks/useFetch";
import { IPost, IPostDetails } from "../../../types/posts";
import { IUser } from "../../../types/users";
import { debounce } from "../../../utils/debounce";

function useFetchPostsDetails() {
  const [postsDetails, setPostsDetails] = useState<IPostDetails[]>([]);
  const { status: postsStatus, data: postsData } = useFetch<IPost[]>(
    PostsApi.getAllPosts()
  );
  const { status: usersStatus, data: usersData } = useFetch<IUser[]>(
    UsersApi.getAllUsers()
  );

  useEffect(() => {
    if (
      postsStatus === AsyncStatus.resolved &&
      usersStatus === AsyncStatus.resolved
    ) {
      const combinedPostsWithUsers = postsData?.map((post) => ({
        ...post,
        user: usersData?.find((user) => user.id === post.userId),
      }));
      combinedPostsWithUsers && setPostsDetails(combinedPostsWithUsers);
    }
  }, [postsStatus, usersStatus, postsData, usersData]);

  const isError =
    postsStatus === AsyncStatus.rejected ||
    usersStatus === AsyncStatus.rejected;

  const isLoading =
    postsStatus === AsyncStatus.pending || usersStatus === AsyncStatus.pending;

  return { isLoading, isError, postsDetails };
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
