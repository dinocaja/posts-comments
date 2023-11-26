import { useContext } from "react";
import { PostDetailsContext } from "./PostDetailsContext";

const usePostDetailsContext = () => {
  const context = useContext(PostDetailsContext);
  if (!context)
    throw new Error(
      "You must use PostDetailsContext within PostDetailsProvider"
    );
  return context;
};

export { usePostDetailsContext };
