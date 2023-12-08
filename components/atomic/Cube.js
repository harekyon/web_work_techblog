/*=====================================*/
// Cube COMP
/*=====================================*/

import Image from "next/image";
import styles from "./Cube.module.scss";
import { css } from "@emotion/react";

export default function Cube({
  boxWidth = "100px",
  boxHeight = "100px",
  boxThic = "6px",
  hoverEffectVal = "3px",
  property1 = "WORK",
  property2 = "2022.03",
  title = "TITLE",
  subTitle = "SUB TITLE",
  src = "",
  notActive = true,
}) {
  return (
    <div
      className={styles["box--content"]}
      css={css`
        width: ${boxWidth};
        height: ${boxHeight};
      `}
    >
      <a
        href="#"
        css={css`
          :hover {
            .box--side__surface--left {
              width: calc(${boxThic - hoverEffectVal});
            }
            .box--side__surface--bottom {
              height: calc(${boxThic - hoverEffectVal});
            }
          }
        `}
        className={`${notActive ? "notactive" : ""}`}
      >
        <div
          id="box--front__surface"
          className={styles["box--front__surface"]}
          css={css`
            width: ${boxWidth};
            height: ${boxHeight};
            top: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
            right: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
          `}
        >
          <img src={src} className={styles["box--front__surface__img"]}></img>
          <div className={styles["box--front__surface__alpha"]}></div>
          <p className={styles["box--front__surface__property1"]}>
            {property1}
          </p>
          <p className={styles["box--front__surface__property2"]}>
            {property2}
          </p>
          <span className={styles["box--front__surface__title"]}>{title}</span>
          <p className={styles["box--front__surface__sub-title"]}>{subTitle}</p>
        </div>
        <div
          id="box--side__surface--left"
          className={`${styles["box--side__surface"]} ${styles["box--side__surface--left"]}`}
          css={css`
            width: ${boxThic};
            height: ${boxHeight};
            top: ${String(Number(boxThic.replace("px", "")) / 2) +
            boxThic.replace(/[0-9]/g, "")};
            right: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
          `}
        ></div>
        <div
          id="box--side__surface--bottom"
          className={`${styles["box--side__surface"]} ${styles["box--side__surface--bottom"]}`}
          css={css`
            width: ${boxWidth};
            height: ${boxThic};
            bottom: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
            right: -${String(Number(boxThic.replace("px", "")) / 2) + boxThic.replace(/[0-9]/g, "")};
          `}
        ></div>
      </a>
    </div>
  );
}
