import { memo } from "react";
import { Link } from "react-router-dom";

import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import { useCommentsContext } from "../CommentsContext";
import withMessageLog from "../../../hoc/withMessageLog";
import Typography, { TypographyVariant } from "../../Shared/Typography";

import CommentButton from "./CommentButton";
import Comments from "./Comments";
import { handlePostClick } from "./post.helpers";
import { PostProps } from "./post.types";

import styles from "./post.module.css";

function Post({ post }: PostProps) {
  const { title, body, id, user } = post;
  const { setPostDetails, setComments } = usePostDetailsContext();
  const { fetchedComments } = useCommentsContext();

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postContent}>
        <Link
          onClick={() =>
            handlePostClick(post, setPostDetails, setComments, fetchedComments)
          }
          to={`/post/${id}`}
          className={styles.titleWrapper}
        >
          <Typography variant={TypographyVariant.h2}>{title}</Typography>
        </Link>
        <div className={styles.divider} />
        <Typography className={styles.postText}>{body}</Typography>
      </div>
      <div className={styles.divider} />
      <div className={styles.postFooter}>
        <Typography variant={TypographyVariant.body2}>
          Author: {user?.name}
        </Typography>
        <CommentButton postId={id}>
          {(isCommentSectionOpen, comments) =>
            isCommentSectionOpen && (
              <Comments postId={id} fetchedComments={comments} />
            )
          }
        </CommentButton>
      </div>
    </div>
  );
}

export default memo(withMessageLog<PostProps>(Post));
