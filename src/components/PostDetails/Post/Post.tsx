import { usePostDetailsContext } from "../../../contexts/PostDetailsContext";
import withMessageLog from "../../../hoc/withMessageLog";
import Typography, {
  TypographyAlignment,
  TypographyVariant,
} from "../../Shared/Typography";

import styles from "./post.module.css";

function Post() {
  const {
    postDetails: { title, body, user },
  } = usePostDetailsContext();

  return (
    <div className={styles.postWrapper}>
      <div className={styles.postContent}>
        <Typography
          className={styles.postTitle}
          alignment={TypographyAlignment.center}
          variant={TypographyVariant.h2}
        >
          {title}
        </Typography>
        <Typography className={styles.postText}>{body}</Typography>
      </div>
      <div className={styles.postFooter}>
        <Typography variant={TypographyVariant.body2}>
          Author: {user?.name}
        </Typography>
      </div>
    </div>
  );
}

export default withMessageLog(Post);
