import { css } from "@emotion/react";
import styles from "./SectionTitle.module.scss";
export default function SectionTitle({ id = "", sticky = false, children }) {
  return (
    <div
      id={id}
      css={css`
        ${sticky ? "position: sticky;" : ""}
      `}
      className={styles["section-title--wrap"]}
    >
      <span>{children}</span>
    </div>
  );
}
