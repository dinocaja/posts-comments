import { Link } from "react-router-dom";

import withMessageLog from "../../hoc/withMessageLog";
import Button from "../Shared/Button/Button";
import { TypographyAlignment, TypographyVariant } from "../Shared/Typography";
import Typography from "../Shared/Typography/Typography";

import styles from "./landingPage.module.css";

function LandingPage() {
  return (
    <div className={styles.landingPageWrapper}>
      <div className={styles.titleSectionWrapper}>
        <Typography
          alignment={TypographyAlignment.center}
          variant={TypographyVariant.h1}
        >
          Welcome to
          <span className={styles.titleHighlight}> Posts & Comments</span>
        </Typography>
        <Typography
          className={styles.subTitle}
          alignment={TypographyAlignment.center}
          variant={TypographyVariant.h2}
          helloMessage='Oh, hello.. I came via prop drilling'
        >
          Discover a world of diverse perspectives at Posts & Comments. This
          vibrant platform invites users to share, discuss, and engage in a
          community-driven space. From thought-provoking posts to lively
          comments, it's where ideas come to life.
        </Typography>
      </div>
      <Link to='/posts' className={styles.buttonLink}>
        <Button className={styles.button}>
          <Typography
            alignment={TypographyAlignment.center}
            variant={TypographyVariant.h2}
          >
            POSTS
          </Typography>
        </Button>
      </Link>
    </div>
  );
}

export default withMessageLog(LandingPage, "Hi, I came via HOC argument");
