import { useParams } from "react-router-dom";

import { usePostDetailsContext } from "../../contexts/PostDetailsContext";
import withMessageLog from "../../hoc/withMessageLog";
import GeneralError from "../Shared/Errors/GeneralError";
import Spinner from "../Shared/Spinner";

import Comments from "./Post/Comments";
import Post from "./Post/Post";
import CommentListWrapper from "./CommentListWrapper";
import PostsWrapper from "./PostWrapper";

import styles from "./postDetails.module.css";

function Posts() {
  const { postDetails, comments } = usePostDetailsContext();
  const { id } = useParams();
  const wasPostFetched = postDetails?.id === Number(id);

  const postAndComments = (
    <>
      <Post />
      {!comments ? (
        <CommentListWrapper>
          {(isError, isLoading) => {
            if (isError) return <GeneralError />;
            if (isLoading) return <Spinner className={styles.centerSpinner} />;
            return <Comments />;
          }}
        </CommentListWrapper>
      ) : (
        <Comments />
      )}
    </>
  );

  return (
    <div className={styles.postDetailWrapper}>
      {!wasPostFetched ? (
        <PostsWrapper postId={Number(id)}>
          {(isError, isLoading) => {
            if (isError) return <GeneralError />;
            if (isLoading) return <Spinner />;
            return postAndComments;
          }}
        </PostsWrapper>
      ) : (
        postAndComments
      )}
    </div>
  );
}

export default withMessageLog(Posts);
