import { ReactNode } from "react";

import { ComponentProps } from "../../../types/components";

interface PostWrapperProps extends ComponentProps {
  children: (isError: boolean, isLoading: boolean) => ReactNode;
  postId: number;
}

export type { PostWrapperProps };
