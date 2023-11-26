import withMessageLog from "../../../../hoc/withMessageLog";

import { MainLayoutProps } from "./mainLayout.types";

import styles from "./mainLayout.module.css";

function MainLayout({ children }: MainLayoutProps) {
  return <div className={styles.mainLayoutWrapper}>{children}</div>;
}

export default withMessageLog<MainLayoutProps>(MainLayout);
