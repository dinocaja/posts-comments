import { useContext } from "react";
import { CommentsContext } from "./CommentsContext";

function useCommentsContext() {
  const context = useContext(CommentsContext);
  if (!context)
    throw new Error("You must use CommentsContext within CommentsProvider");
  return context;
}

export { useCommentsContext };
