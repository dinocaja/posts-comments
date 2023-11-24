import { gateway } from "./baseEndpoints";

const postsEndpoint = `${gateway}/posts`;

const getAllPosts = () => postsEndpoint;
const getPostById = (postId: number) => `${postsEndpoint}/${postId}`;
const getCommentsByPostId = (postId: number) =>
  `${postsEndpoint}/${postId}/comments`;

export const PostsApi = {
  getAllPosts,
  getPostById,
  getCommentsByPostId,
};
