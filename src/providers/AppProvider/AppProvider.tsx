import { ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

import ApplicationError from "../../components/Shared/Errors/ApplicationError";
import MainLayout from "../../components/Shared/Layouts/MainLayout";
import Spinner from "../../components/Shared/Spinner/Spinner";
import PostDetailsProvider from "../../contexts/PostDetailsContext";
import withMessageLog from "../../hoc/withMessageLog";
import { IComponent } from "../../types/components";

interface IAppProviderProps extends IComponent {
  children: ReactNode;
}

function AppProvider({ children }: IAppProviderProps) {
  return (
    <Router>
      <MainLayout>
        <ErrorBoundary FallbackComponent={ApplicationError}>
          <Suspense fallback={<Spinner />}>
            <PostDetailsProvider>{children}</PostDetailsProvider>
          </Suspense>
        </ErrorBoundary>
      </MainLayout>
    </Router>
  );
}

export default withMessageLog<IAppProviderProps>(AppProvider);
