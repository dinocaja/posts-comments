import { IComponent } from "../types/components";

const helloMessage = "Hello from";
const messagePropName: keyof IComponent = "helloMessage";

export { helloMessage, messagePropName };
