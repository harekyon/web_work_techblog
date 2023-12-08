import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./ArticleProperty.module.scss";
export default function ArticleProperty({ data }) {
  return (
    <div className={styles["article-property--wrap"]}>
      <div className={styles["article-property--container"]}>
        <div className={styles["article-property__date"]}>
          <div>PUBLISHED</div>
          <time>{formatDateDot(convertDateStringToDate(data.createdAt))}</time>
        </div>
        <div className={styles["article-property__category"]}>
          <div>GROUP</div>
          <span>{data.category.name}</span>
        </div>
      </div>
    </div>
  );
}
