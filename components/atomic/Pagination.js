import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./Pagination.module.scss";
import { useEffect, useRef } from "react";
import { css } from "@emotion/react";
import { useRouter } from "next/router";
export default function Pagination({
  setJotaiPage,
  resultArticleList,
  ...props
}) {
  const router = useRouter();
  const nowPage = useRef(1);

  useEffect(() => {
    nowPage.current = 1;
  }, [router.query.tag]);

  function queryFormatter(idx) {
    if (router.query.tag) {
      nowPage.current = idx + 1;
      router.push({ query: { tag: router.query.tag, page: idx + 1 } });
    } else {
      nowPage.current = idx + 1;
      router.push({ query: { page: idx + 1 } });
    }
  }
  useEffect(() => {}, []);
  return (
    <div className={styles["pagination--wrap"]}>
      {resultArticleList.map((p, idx) => {
        return (
          <div
            onClick={() => {
              new Promise((resolve, reject) => {
                new Promise((cardAnimResolve) => {
                  props.cardDisappearAnimation(cardAnimResolve);
                }).then(() => {
                  resolve();
                });
              }).then(() => {
                queryFormatter(idx);
              });
            }}
            data-isactive={nowPage.current === idx + 1 ? "true" : "false"}
            key={idx}
            className={styles["pagination__rect"]}
          >
            <span>{idx + 1}</span>
          </div>
        );
      })}
    </div>
  );
}
