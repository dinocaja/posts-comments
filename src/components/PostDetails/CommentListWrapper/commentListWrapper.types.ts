import { ReactNode } from "react";

import { ComponentProps } from "../../../types/components";

interface CommentListWrapperProps extends ComponentProps {
  children: (isError: boolean, isLoading: boolean) => ReactNode;
}

export type { CommentListWrapperProps };
