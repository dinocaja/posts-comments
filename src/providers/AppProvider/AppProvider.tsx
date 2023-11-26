import { lazy, ReactNode, Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter as Router } from "react-router-dom";

import ApplicationError from "../../components/Shared/Errors/ApplicationError";
import MainLayout from "../../components/Shared/Layouts/MainLayout";
import Spinner from "../../components/Shared/Spinner/Spinner";

import withMessageLog from "../../hoc/withMessageLog";
import { ComponentProps } from "../../types/components";

const PostDetailsProvider = lazy(
  () => import("../../contexts/PostDetailsContext")
);

interface AppProviderProps extends ComponentProps {
  children: ReactNode;
}

function AppProvider({ children }: AppProviderProps) {
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

export default withMessageLog<AppProviderProps>(AppProvider);
