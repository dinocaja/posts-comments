import reactLogo from "../../../assets/react.svg";
import withMessageLog from "../../../hoc/withMessageLog";
import { classNames } from "../../../utils/styleUtils/classNames";

import { sizeClassNames } from "./spinner.constants";
import { SpinnerProps, SpinnerSize } from "./spinner.types";

import styles from "./spinner.module.css";

function Spinner({ size = SpinnerSize.lg, className = "" }: SpinnerProps) {
  const sizeClassName = sizeClassNames[size];
  return (
    <div className={className}>
      <img
        src={reactLogo}
        className={classNames(styles.spinner, sizeClassName)}
        alt='spinner'
      />
    </div>
  );
}

export default withMessageLog<SpinnerProps>(Spinner);
