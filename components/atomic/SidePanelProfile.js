import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./SidePanelProfile.module.scss";
import { useState } from "react";
import PanelTitle from "./PanelTitle";
export default function SidePanelProfile() {
  const [viewMode, setViewMode] = useState("minimize");
  return (
    <div className={styles["panel-profile--wrap"]}>
      <PanelTitle viewMode={viewMode} setViewMode={setViewMode}>
        ABOUT ME
      </PanelTitle>
      <div className={styles["panel-profile__img"]}>
        <img src="/mycat.jpg" />
      </div>
      <span className={styles["panel-profile__job"]}></span>
      <span className={styles["panel-profile__name"]}>harekyon</span>
      <span className={styles["panel-profile__prof"]}>ねこと音楽</span>
      <span className={styles["panel-profile__prof"]}></span>
    </div>
  );
}
