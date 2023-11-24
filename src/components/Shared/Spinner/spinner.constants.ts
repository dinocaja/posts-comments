import { SpinnerSize } from "./spinner.types";

import styles from "./spinner.module.css";

const sizeClassNames = {
  [SpinnerSize.lg]: styles.spinnerLg,
  [SpinnerSize.sm]: styles.spinnerSm,
};

export { sizeClassNames };
