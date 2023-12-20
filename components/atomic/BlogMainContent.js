import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./BlogMainContent.module.scss";
import { useEffect } from "react";
export default function BlogMainContent({ children }) {
  return (
    <div id="blogMainContent" className={styles["main--wrap"]}>
      {children}
    </div>
  );
}
