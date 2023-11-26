import { TypographyAlignment, TypographyVariant } from "./typography.types";

import styles from "./typography.module.css";

const variantClassNames = {
  [TypographyVariant.h1]: styles.h1,
  [TypographyVariant.h2]: styles.h2,
  [TypographyVariant.body1]: styles.body1,
  [TypographyVariant.body2]: styles.body2,
};

const alignmentClassNames = {
  [TypographyAlignment.center]: styles.center,
  [TypographyAlignment.left]: styles.left,
  [TypographyAlignment.right]: styles.right,
};

const variantTags = {
  [TypographyVariant.h1]: "h1",
  [TypographyVariant.h2]: "h2",
  [TypographyVariant.body1]: "p",
  [TypographyVariant.body2]: "p",
};

export { alignmentClassNames, variantClassNames, variantTags };
