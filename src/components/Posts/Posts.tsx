import withMessageLog from "../../hoc/withMessageLog";
import EmptyState from "../Shared/EmptyState";
import GeneralError from "../Shared/Errors/GeneralError";
import InputField from "../Shared/Input";
import Spinner from "../Shared/Spinner";
import Typography, {
  TypographyAlignment,
  TypographyVariant,
} from "../Shared/Typography";

import Post from "./Post/Post";
import PostListWrapper from "./PostListWrapper";
import CommentsProvider from "./CommentsContext";

import styles from "./posts.module.css";

function Posts() {
  return (
    <CommentsProvider>
      <div className={styles.postsWrapper}>
        <Typography
          alignment={TypographyAlignment.center}
          variant={TypographyVariant.h1}
          className={styles.titleHighlight}
        >
          Posts & Comments
        </Typography>
        <PostListWrapper>
          {(isError, isLoading, posts, changeFilterValue) => {
            if (isError) return <GeneralError />;
            if (isLoading) return <Spinner />;
            return (
              <>
                <InputField
                  className={styles.inputField}
                  placeholder='Filter posts by user name'
                  onControlledChange={changeFilterValue}
                />
                {!!posts.length ? (
                  posts.map((post) => <Post key={post.id} post={post} />)
                ) : (
                  <EmptyState />
                )}
              </>
            );
          }}
        </PostListWrapper>
      </div>
    </CommentsProvider>
  );
}

export default withMessageLog(Posts);
