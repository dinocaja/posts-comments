import withMessageLog from "../../../../hoc/withMessageLog";

import { IMainLayoutProps } from "./mainLayout.types";

import styles from "./mainLayout.module.css";

function MainLayout({ children }: IMainLayoutProps) {
  return <div className={styles.mainLayoutWrapper}>{children}</div>;
}

export default withMessageLog<IMainLayoutProps>(MainLayout);
