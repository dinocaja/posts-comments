import withMessageLog from "../../../../hoc/withMessageLog";
import { classNames } from "../../../../utils/classNames";
import Typography, { TypographyAlignment } from "../../Typography";

import { IGeneralErrorProps } from "./generalError.types";

import styles from "./generalError.module.css";

function GeneralError({ className = "" }: IGeneralErrorProps) {
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

export default withMessageLog<IGeneralErrorProps>(GeneralError);
