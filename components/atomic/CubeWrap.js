/*=====================================*/
// CubeWrap COMP
/*=====================================*/

import styles from "./CubeWrap.module.scss";
import { css } from "@emotion/react";

export default function CubeWrap({ children, ...props }) {
  return (
    <div className={styles["box--wrapper"]} css={props.cssOverrides}>
      {children}
    </div>
  );
}
