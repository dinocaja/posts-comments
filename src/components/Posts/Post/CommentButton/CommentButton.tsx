import { useCommentsContext } from "../../CommentsContext";
import withMessageLog from "../../../../hoc/withMessageLog";
import useToggle from "../../../../hooks/useToggle";
import Button, { ButtonSize } from "../../../Shared/Button";
import OutsideAlerter from "../../../Shared/OutsideAlerter";
import Typography from "../../../Shared/Typography";

import { CommentButtonProps } from "./commentButton.types";

import styles from "./commentButton.module.css";

function CommentButton({ children, postId }: CommentButtonProps) {
  const { opened, toggle, handleClose } = useToggle();
  const { fetchedComments } = useCommentsContext();
  const commentData = fetchedComments.find(
    (fetchedComment) => Number(Object.keys(fetchedComment)[0]) === postId
  )?.[postId];

  return (
    <div className={styles.commentButton}>
      <OutsideAlerter onClick={handleClose}>
        <Button size={ButtonSize.sm} onClick={toggle}>
          <Typography>Comments</Typography>
        </Button>
        {children?.(opened, commentData)}
      </OutsideAlerter>
    </div>
  );
}

export default withMessageLog<CommentButtonProps>(CommentButton);
