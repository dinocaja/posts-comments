import { lazy } from "react";

const LandingPage = lazy(() => import("../LandingPage"));
const Posts = lazy(() => import("../Posts"));
const PostDetails = lazy(() => import("../PostDetails"));
const NotFoundError = lazy(() => import("../Shared/Errors/NotFoundError"));

function getPublicRoutes() {
  return [
    {
      path: "/",
      element: <LandingPage />,
    },
    {
      path: "/posts",
      element: <Posts />,
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
