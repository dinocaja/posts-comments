import { ComponentProps } from "../../types/components";

const helloMessage = "Hello from";
const messagePropName: keyof ComponentProps = "helloMessage";

export { helloMessage, messagePropName };
