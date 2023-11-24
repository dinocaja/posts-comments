import { TypographyAlignment, TypographyVariant } from "./typography.types";

import styles from "./typography.module.css";

const variants = {
  [TypographyVariant.h1]: styles.h1,
  [TypographyVariant.h2]: styles.h2,
  [TypographyVariant.body1]: styles.body1,
  [TypographyVariant.body2]: styles.body2,
};

const alignments = {
  [TypographyAlignment.center]: styles.center,
  [TypographyAlignment.left]: styles.left,
  [TypographyAlignment.right]: styles.right,
};

export { alignments, variants };
