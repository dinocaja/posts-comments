import withMessageLog from "../../../../hoc/withMessageLog";
import { classNames } from "../../../../utils/classNames";
import Typography, { TypographyAlignment } from "../../Typography";

import styles from "./notFound.module.css";

function NotFoundError() {
  return (
    <div className={classNames(styles.notFoundWrapper)} role='alert'>
      <Typography alignment={TypographyAlignment.center}>
        404 NOT FOUND
      </Typography>
    </div>
  );
}

export default withMessageLog(NotFoundError);
