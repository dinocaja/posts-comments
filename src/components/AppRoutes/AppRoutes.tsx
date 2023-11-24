import { useRoutes } from "react-router-dom";

import withMessageLog from "../../hoc/withMessageLog";

import { getPublicRoutes } from "./appRoutes.helpers";

function AppRoutes() {
  const publicRoutes = getPublicRoutes();

  const component = useRoutes(publicRoutes);

  return component;
}

export default withMessageLog(AppRoutes);
