import { IComment } from "../../../../../types/comments";
import { IComponent } from "../../../../../types/components";

interface ICommentProps extends IComponent, IComment {}

export type { ICommentProps };
