import withMessageLog from "../../../hoc/withMessageLog";
import { classNames } from "../../../utils/styleUtils/classNames";
import Typography, { TypographyAlignment } from "../Typography";

import styles from "./emptyState.module.css";

function EmptyState() {
  return (
    <div className={classNames(styles.emptyStateWrapper)}>
      <Typography alignment={TypographyAlignment.center}>No data :D</Typography>
    </div>
  );
}

export default withMessageLog(EmptyState);
