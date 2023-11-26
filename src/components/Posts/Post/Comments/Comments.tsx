import withMessageLog from "../../../../hoc/withMessageLog";
import { Comment as IComment } from "../../../../types/comments";
import GeneralError from "../../../Shared/Errors/GeneralError";
import Spinner from "../../../Shared/Spinner";

import Comment from "./Comment";
import CommentListWrapper from "./CommentListWrapper";
import { CommentsProps } from "./comments.types";

import styles from "./comments.module.css";

function Comments({ postId, fetchedComments }: CommentsProps) {
  const hasFetchedComments = fetchedComments?.length;

  function mapComments(comments?: IComment[]) {
    return (
      <>
        {comments?.map((comment) => (
          <Comment key={comment.id} {...comment} />
        ))}
      </>
    );
  }

  return (
    <div className={styles.commentsWrapper}>
      <div className={styles.commentsContainer}>
        {hasFetchedComments ? (
          mapComments(fetchedComments)
        ) : (
          <CommentListWrapper postId={postId}>
            {(isError, isLoading, comments) => {
              if (isError) return <GeneralError className={styles.center} />;
              if (isLoading) return <Spinner className={styles.center} />;
              return mapComments(comments);
            }}
          </CommentListWrapper>
        )}
      </div>
    </div>
  );
}

export default withMessageLog<CommentsProps>(Comments);
