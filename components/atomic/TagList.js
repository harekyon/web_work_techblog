import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./TagList.module.scss";
import TagUnit from "./TagUnit";
export default function TagList({ children }) {
  return (
    <div className={styles["taglist--wrap"]}>
      {children}
      {/* <div
        className={`${styles["taglist--unit"]} ${styles["taglist--unit__title"]}`}
      ></div> */}
    </div>
  );
}
