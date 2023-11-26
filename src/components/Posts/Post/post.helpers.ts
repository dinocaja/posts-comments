import { Dispatch, SetStateAction } from "react";

import { FetchedComments, Comment } from "../../../types/comments";
import { PostDetails } from "../../../types/posts";

function handlePostClick(
  post: PostDetails,
  setPostDetails: Dispatch<SetStateAction<Partial<PostDetails>>>,
  setComments: Dispatch<SetStateAction<Comment[] | null>>,
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
