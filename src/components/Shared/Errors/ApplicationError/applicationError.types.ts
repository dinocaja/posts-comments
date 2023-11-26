import { FallbackProps } from "react-error-boundary";

import { ComponentProps } from "../../../../types/components";

interface ApplicationErrorProps extends FallbackProps, ComponentProps {}

export type { ApplicationErrorProps };
