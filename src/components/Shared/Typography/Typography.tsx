import { messagePropName } from "../../../constants/appDefaults/messageDefaults";
import removeProps from "../../../helpers/componentHelpers.ts/removeProps";
import withMessageLog from "../../../hoc/withMessageLog";
import { classNames } from "../../../utils/styleUtils/classNames";

import {
  alignmentClassNames,
  variantClassNames,
  variantTags,
} from "./typography.constants";
import {
  TypographyProps,
  TypographyAlignment,
  TypographyVariant,
} from "./typography.types";

import styles from "./typography.module.css";
import { createElement } from "react";

function Typography({
  variant = TypographyVariant.body1,
  alignment = TypographyAlignment.left,
  className = "",
  ...props
}: TypographyProps) {
  const type = variantTags[variant];
  const variantClassName = variantClassNames[variant];
  const alignmentClassName = alignmentClassNames[alignment];

  const typographyProps = removeProps(props, [messagePropName]);

  const typographyClasses = classNames(
    styles.typography,
    variantClassName,
    alignmentClassName,
    className
  );

  const allProps = {
    ...typographyProps,
    className: typographyClasses,
  };

  const Tag = createElement(type, allProps, props.children);

  return Tag;
}

export default withMessageLog<TypographyProps>(Typography);
