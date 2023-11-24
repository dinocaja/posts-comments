import withMessageLog from "../../../../hoc/withMessageLog";
import Button from "../../Button";
import Typography, {
  TypographyAlignment,
  TypographyVariant,
} from "../../Typography";

import { IApplicationErrorProps } from "./applicationError.types";

import styles from "./applicationError.module.css";

function ApplicationError() {
  return (
    <div className={styles.applicationErrorWrapper} role='alert'>
      <Typography
        alignment={TypographyAlignment.center}
        variant={TypographyVariant.h2}
      >
        Ooops, something went wrong :(
      </Typography>
      <Button onClick={() => window.location.reload()}>
        <Typography alignment={TypographyAlignment.center}>Reload</Typography>
      </Button>
    </div>
  );
}

export default withMessageLog<IApplicationErrorProps>(ApplicationError);
