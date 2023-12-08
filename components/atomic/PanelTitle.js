import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./PanelTitle.module.scss";
import { css } from "@emotion/react";
import { useEffect } from "react";
export default function PanelTitle({ viewMode, setViewMode, children }) {
  const onClickEditViewMode = () => {
    viewMode === "minimize"
      ? setViewMode("expansion")
      : viewMode === "expansion"
      ? setViewMode("minimize")
      : "";
  };

  return (
    <div className={styles["panel-title--wrap"]}>
      <span>{children}</span>
      <div
        className={styles["panel-title--minimizer"]}
        onClick={onClickEditViewMode}
      >
        {/* {viewMode === "minimize" ? <div className={styles["panel-title--minimizer__object"]}></div> : viewMode === "expansion" ? "-" : ""} */}
        <div
          className={styles["panel-title--minimizer__object--wrap"]}
          css={css`
            ${viewMode === "expansion"
              ? "height:1px;"
              : viewMode === "minimize"
              ? "height:8px;"
              : ""}
          `}
        ></div>
      </div>
    </div>
  );
}
