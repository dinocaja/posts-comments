import { Dispatch, SetStateAction } from "react";

import { FetchedComments, IComment } from "../../../types/comments";
import { IPostDetails } from "../../../types/posts";

function handlePostClick(
  post: IPostDetails,
  setPostDetails: Dispatch<SetStateAction<Partial<IPostDetails>>>,
  setComments: Dispatch<SetStateAction<IComment[] | null>>,
  fetchedComments: FetchedComments[]
) {
  setPostDetails(post);
  const postId = post.id;
  const fetchedCommentsForPost = fetchedComments.find(
    (fetchedComment) => Number(Object.keys(fetchedComment)[0]) === postId
  )?.[postId];
  setComments(fetchedCommentsForPost ? fetchedCommentsForPost : null);
}

export { handlePostClick };
