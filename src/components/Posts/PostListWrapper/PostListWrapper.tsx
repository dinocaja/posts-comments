import withMessageLog from "../../../hoc/withMessageLog";

import {
  useFetchPostsDetails,
  useFilterPostsDetails,
} from "./postListWrapper.hooks";
import { IPostListWrapperProps } from "./postListWrapper.types";

function PostListWrapper({ children }: IPostListWrapperProps) {
  const { isLoading, isError, postsDetails } = useFetchPostsDetails();
  const { changeFilterValue, filteredPostsDetails } =
    useFilterPostsDetails(postsDetails);

  return (
    <>{children(isError, isLoading, filteredPostsDetails, changeFilterValue)}</>
  );
}

export default withMessageLog<IPostListWrapperProps>(PostListWrapper);
