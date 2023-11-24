import { messagePropName } from "../../../constants/appDefaults";
import removeProps from "../../../helpers/removeProps";
import withMessageLog from "../../../hoc/withMessageLog";
import { classNames } from "../../../utils/classNames";

import { alignments, variants } from "./typography.constants";
import {
  ITypographyProps,
  TypographyAlignment,
  TypographyVariant,
} from "./typography.types";

import styles from "./typography.module.css";

function Typography({
  variant = TypographyVariant.body1,
  alignment = TypographyAlignment.left,
  className = "",
  ...props
}: ITypographyProps) {
  const variantClassName = variants[variant];
  const alignmentClassName = alignments[alignment];
  const paragraphProps = removeProps(props, [messagePropName]);

  return (
    <p
      className={classNames(
        styles.typography,
        variantClassName,
        alignmentClassName,
        className
      )}
      {...paragraphProps}
    >
      {props.children}
    </p>
  );
}

export default withMessageLog<ITypographyProps>(Typography);
