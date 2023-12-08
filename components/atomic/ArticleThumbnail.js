import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./ArticleThumbnail.module.scss";
import Image from "next/image";
export default function ArticleThumbnail({ thumbnail }) {
  return (
    <div className={styles["article-thumbnail--wrap"]}>
      <img
        src={thumbnail.url}
        width={thumbnail.width}
        height={thumbnail.height}
        className={styles["article-thumbnail__img"]}
      ></img>
    </div>
  );
}
