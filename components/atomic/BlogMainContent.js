import { convertDateStringToDate, formatDateDot } from "@/libs/core";
import styles from "./BlogMainContent.module.scss";
export default function BlogMainContent({ children }) {
  return <div className={styles["main--wrap"]}>{children}</div>;
}
