import { ReactNode } from "react";

import { ComponentProps } from "../../../types/components";
import { PostDetails } from "../../../types/posts";

interface PostListWrapperProps extends ComponentProps {
  children: (
    isError: boolean,
    isLoading: boolean,
    postUsers: PostDetails[],
    changeFilterValue: (value: string) => void
  ) => ReactNode;
}

export type { PostListWrapperProps };
