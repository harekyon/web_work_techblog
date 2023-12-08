import { useEffect } from "react";
import styles from "./ArticleMain.module.scss";
import hljs from "highlight.js";
import Link from "next/link";
import IndexModule from "./IndexModule";

export default function ArticleMain({ info = true, children }) {
  useEffect(() => {
    hljs.initHighlightingOnLoad();
  });
  return (
    <div className={styles["article-main--wrap"]}>
      {/* <Link
        rel="stylesheet"
        href="http://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/styles/default.min.css"
      /> */}
      {typeof children === "string" ? (
        <div
          id="articleMainContents"
          dangerouslySetInnerHTML={{ __html: children }}
          className={styles["article-main--contents"]}
        ></div>
      ) : (
        <div className={styles["article-main--contents"]}>{children}</div>
      )}

      {info ? (
        <div id="article-main--side" className={styles["article-main--side"]}>
          <IndexModule></IndexModule>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
}
