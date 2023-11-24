import { ComponentType } from "react";

import { helloMessage, messagePropName } from "../constants/appDefaults";
import { IComponent } from "../types/components";

function withMessageLog<P extends IComponent>(
  Component: ComponentType<P>,
  overwrittenMessage?: string
) {
  return (props: P) => {
    const message =
      props[messagePropName] ?? overwrittenMessage ?? helloMessage;

    console.log(`${message} ${Component.name}`);

    return <Component {...props} message={message} />;
  };
}

export default withMessageLog;
