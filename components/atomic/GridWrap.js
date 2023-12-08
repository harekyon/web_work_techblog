/*=====================================*/
// CubeWrap COMP
/*=====================================*/

import styles from "./GridWrap.module.scss";
import { css } from "@emotion/react";

export default function GridWrap({ children, ...props }) {
  return (
    <div
      className={styles["box--wrapper"]}
      css={css`
        ${props.cssOverrides}
      `}
    >
      {children}
    </div>
  );
}
