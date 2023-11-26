import withMessageLog from "../../../../hoc/withMessageLog";
import { classNames } from "../../../../utils/styleUtils/classNames";
import Typography, { TypographyAlignment } from "../../Typography";

import { GeneralErrorProps } from "./generalError.types";

import styles from "./generalError.module.css";

function GeneralError({ className = "" }: GeneralErrorProps) {
  return (
    <div
      className={classNames(styles.generalErrorWrapper, className)}
      role='alert'
    >
      <Typography alignment={TypographyAlignment.center}>
        Ooops, something went wrong :(
      </Typography>
    </div>
  );
}

export default withMessageLog<GeneralErrorProps>(GeneralError);
