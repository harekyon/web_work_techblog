import Image from "next/image";
import styles from "./CardUnit.module.scss";
import { formatDateDot } from "@/libs/core";
import { css } from "@emotion/react";

export default function CardUnit({
  id,
  title,
  thumbnail,
  publishedAt,
  category,
  delayAnimValue,
  cardunitTransitionDelayDiff,
}) {
  return (
    <article
      className={`${styles["card-unit--wrap"]} cardunit`}
      css={css`
        transition-delay: ${delayAnimValue}ms;
      `}
    >
      <a href={`./${id}`} className={styles["card-unit--flex-container"]}>
        <date className={`${styles["card-unit__date"]} carddate`}>
          <span>{publishedAt}</span>
        </date>
        <div className={`${styles["card-unit__category"]} cardcategory`}>
          <span>{category}</span>
        </div>
        <img
          width="675"
          height="393"
          src={thumbnail}
          className={`${styles["card-unit__thumbnail"]} cardimage`}
        ></img>
        <div className={`${styles["card-unit__title"]} cardtitle`}>{title}</div>
      </a>
    </article>
  );
}
