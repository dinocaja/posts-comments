import { usePostDetailsContext } from "../../../../contexts/PostDetailsContext";
import withMessageLog from "../../../../hoc/withMessageLog";
import Typography from "../../../Shared/Typography";

import Comment from "./Comment";

import styles from "./comments.module.css";

function Comments() {
  const { comments } = usePostDetailsContext();
  return (
    <div className={styles.commentsWrapper}>
      <Typography>Comments</Typography>
      {comments?.map((comment) => (
        <Comment key={comment.id} {...comment} />
      ))}
    </div>
  );
}

export default withMessageLog(Comments);
