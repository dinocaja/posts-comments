import AppRoutes from "./components/AppRoutes";
import withMessageLog from "./hoc/withMessageLog";
import AppProvider from "./providers/AppProvider";

function App() {
  return (
    <AppProvider>
      <AppRoutes />
    </AppProvider>
  );
}

export default withMessageLog(App);
