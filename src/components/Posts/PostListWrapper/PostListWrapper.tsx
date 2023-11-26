import withMessageLog from "../../../hoc/withMessageLog";

import {
  useFetchPostsDetails,
  useFilterPostsDetails,
} from "./postListWrapper.hooks";
import { PostListWrapperProps } from "./postListWrapper.types";

function PostListWrapper({ children }: PostListWrapperProps) {
  const { isLoading, isError, postsDetails } = useFetchPostsDetails();
  const { changeFilterValue, filteredPostsDetails } =
    useFilterPostsDetails(postsDetails);

  return (
    <>{children(isError, isLoading, filteredPostsDetails, changeFilterValue)}</>
  );
}

export default withMessageLog<PostListWrapperProps>(PostListWrapper);
