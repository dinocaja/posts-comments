import { lazy } from "react";

import CommentsProvider from "../../contexts/CommentsContext/CommentsContext";
import NotFoundError from "../Shared/Errors/NotFoundError";

const LandingPage = lazy(() => import("../LandingPage"));
const Posts = lazy(() => import("../Posts"));
const PostDetails = lazy(() => import("../PostDetails"));

function getPublicRoutes() {
  return [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/posts",
      element: (
        <CommentsProvider>
          <Posts />
        </CommentsProvider>
      ),
    },
    {
      path: "/post/:id",
      element: <PostDetails />,
    },
    {
      path: "*",
      element: <NotFoundError />,
    },
  ];
}

export { getPublicRoutes };
