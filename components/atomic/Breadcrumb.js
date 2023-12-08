import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./Breadcrumb.module.scss";
import { css } from "@emotion/react";
export default function Breadcrumb({ breadcrumb, cssOverrides }) {
  return (
    <div className={styles["breadcrumb--wrap"]} css={cssOverrides}>
      <div className={styles["breadcrumb__bg"]}>
        {breadcrumb.map((b, idx) => {
          return (
            <a
              href={b.href}
              css={css`
                background: rgb(
                  ${8 * idx + 40},
                  ${8 * idx + 40},
                  ${9 * idx + 60}
                );
                z-index: ${20 - idx};
              `}
              key={idx}
            >
              <span>{b.name}</span>
            </a>
          );
        })}
      </div>
    </div>
  );
}
