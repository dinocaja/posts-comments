import { ChangeEvent, useEffect, useState } from "react";

import { messagePropName } from "../../../constants/appDefaults";
import removeProps from "../../../helpers/removeProps";
import withMessageLog from "../../../hoc/withMessageLog";
import { classNames } from "../../../utils/classNames";

import { IInputFieldProps } from "./input.types";

import styles from "./input.module.css";

function InputField({
  value: controlledValue,
  onControlledChange,
  readOnly = false,
  type = "text",
  className = "",
  ...props
}: IInputFieldProps) {
  const [value, setValue] = useState("");
  const inputProps = removeProps(props, [messagePropName]);
  const isControlled = !!controlledValue;
  const hasControlledChange = !!onControlledChange;

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    !isControlled && setValue(newValue);
    onControlledChange && onControlledChange(newValue);
  }

  useEffect(() => {
    if (isControlled && !hasControlledChange && !readOnly) {
      console.error(
        "You need to pass onChange to controlled inputs or add a readOnly prop. This will render as a readOnly input field."
      );
    }
  }, [isControlled, hasControlledChange, readOnly]);

  return (
    <input
      type={type}
      value={controlledValue ?? value}
      onChange={handleChange}
      className={classNames(className, styles.input)}
      readOnly={readOnly || (isControlled && !hasControlledChange)}
      {...inputProps}
    />
  );
}

export default withMessageLog<IInputFieldProps>(InputField);
