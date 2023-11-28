import { ComponentType } from "react";

import {
  helloMessage,
  messagePropName,
} from "../constants/appDefaults/messageDefaults";
import { ComponentProps } from "../types/components";

function withMessageLog<P extends ComponentProps>(
  Component: ComponentType<P>,
  overwrittenMessage?: string
) {
  const WrappedComponent = (props: P) => {
    const message =
      props[messagePropName as keyof P] ?? overwrittenMessage ?? helloMessage;

    console.log(`${message} ${Component.name}`);

    return <Component {...props} message={message} />;
  };
  WrappedComponent.displayName = `${Component.name}WithMessageLog`;
  return WrappedComponent;
}

export default withMessageLog;
