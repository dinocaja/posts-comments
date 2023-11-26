import { useRef } from "react";

import withMessageLog from "../../../hoc/withMessageLog";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

import { OutsideAlerterProps } from "./outsideAlerter.types";

function OutsideAlerter({ children, onClick }: OutsideAlerterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, onClick);

  return <div ref={wrapperRef}>{children}</div>;
}

export default withMessageLog<OutsideAlerterProps>(OutsideAlerter);
