import { useCommentsContext } from "../../CommentsContext";
import withMessageLog from "../../../../hoc/withMessageLog";
import useToggle from "../../../../hooks/useToggle";
import Button, { ButtonSize } from "../../../Shared/Button";
import OutsideAlerter from "../../../Shared/OutsideAlerter";
import Typography from "../../../Shared/Typography";

import { CommentButtonProps } from "./commentButton.types";

import styles from "./commentButton.module.css";
import { Suspense } from "react";
import Spinner, { SpinnerSize } from "../../../Shared/Spinner";

function CommentButton({ children, postId }: CommentButtonProps) {
  const { opened, toggle, handleClose } = useToggle();
  const { fetchedComments } = useCommentsContext();
  const commentData = fetchedComments.find(
    (fetchedComment) => Number(Object.keys(fetchedComment)[0]) === postId
  )?.[postId];

  const commentButtonProps = {
    size: ButtonSize.sm,
    onClick: toggle,
    className: styles.commentButton,
    children: <Typography>Comments</Typography>,
  };

  return (
    <div className={styles.commentButtonWrapper}>
      <OutsideAlerter onClick={handleClose}>
        <Suspense
          fallback={
            <Button
              {...commentButtonProps}
              startIcon={<Spinner size={SpinnerSize.sm} />}
            />
          }
        >
          <Button {...commentButtonProps} />
          {children?.(opened, commentData)}
        </Suspense>
      </OutsideAlerter>
    </div>
  );
}

export default withMessageLog<CommentButtonProps>(CommentButton);
