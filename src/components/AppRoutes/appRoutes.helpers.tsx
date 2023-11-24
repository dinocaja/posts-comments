import { lazy } from "react";

import { CommentsProvider } from "../../contexts/CommentsContext";
import PostDetails from "../PostDetails";

const LandingPage = lazy(() => import("../LandingPage"));
const Posts = lazy(() => import("../Posts"));

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
  ];
}

export { getPublicRoutes };
