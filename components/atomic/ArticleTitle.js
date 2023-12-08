import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./ArticleTitle.module.scss";
export default function ArticleTitle({ children }) {
  return (
    <div className={styles["article-title--wrap"]}>
      <h1 className={styles["article-title__title"]}>
        <div className={styles["article-title__title__dot"]}></div>
        {children}
      </h1>
    </div>
  );
}
