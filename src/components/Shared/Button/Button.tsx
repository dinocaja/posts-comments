import { messagePropName } from "../../../constants/appDefaults/messageDefaults";
import removeProps from "../../../helpers/componentHelpers.ts/removeProps";
import withMessageLog from "../../../hoc/withMessageLog";
import { classNames } from "../../../utils/styleUtils/classNames";

import { sizes, variants } from "./button.constants";
import { ButtonSize, ButtonVariant, ButtonProps } from "./button.types";

import styles from "./button.module.css";

function Button({
  type = "button",
  className = "",
  variant = ButtonVariant.primary,
  size = ButtonSize.lg,
  ...props
}: ButtonProps) {
  const variantClassName = variants[variant];
  const sizeClassName = sizes[size];
  const buttonProps = removeProps(props, [messagePropName]);

  return (
    <button
      type={type}
      className={classNames(
        styles.button,
        variantClassName,
        sizeClassName,
        className
      )}
      {...buttonProps}
    >
      <span>{props.children}</span>
    </button>
  );
}

export default withMessageLog<ButtonProps>(Button);
