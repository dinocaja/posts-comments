import { ButtonSize, ButtonVariant } from "./button.types";

import styles from "./button.module.css";

const variants = {
  [ButtonVariant.primary]: styles.primary,
  [ButtonVariant.secondary]: styles.secondary,
};

const sizes = {
  [ButtonSize.sm]: styles.smSize,
  [ButtonSize.lg]: styles.lgSize,
};

export { sizes, variants };
