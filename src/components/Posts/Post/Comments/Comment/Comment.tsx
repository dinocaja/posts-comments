import withMessageLog from "../../../../../hoc/withMessageLog";
import Typography, { TypographyVariant } from "../../../../Shared/Typography";

import { CommentProps } from "./comment.types";

import styles from "./comment.module.css";

function Comment({ email, body, postId }: CommentProps) {
  return (
    <div className={styles.commentWrapper}>
      <div className={styles.commentContent}>
        <Typography
          variant={TypographyVariant.body2}
          className={styles.commentAuthor}
        >
          {email}
        </Typography>
        <Typography
          variant={TypographyVariant.body2}
          className={styles.commentText}
        >
          {body}
        </Typography>
      </div>
    </div>
  );
}

export default withMessageLog<CommentProps>(Comment);
