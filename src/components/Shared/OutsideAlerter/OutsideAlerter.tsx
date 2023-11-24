import { useRef } from "react";

import withMessageLog from "../../../hoc/withMessageLog";
import useOutsideAlerter from "../../../hooks/useOutsideAlerter";

import { IOutsideAlerterProps } from "./outsideAlerter.types";

function OutsideAlerter({ children, onClick }: IOutsideAlerterProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);
  useOutsideAlerter(wrapperRef, onClick);

  return <div ref={wrapperRef}>{children}</div>;
}

export default withMessageLog<IOutsideAlerterProps>(OutsideAlerter);
