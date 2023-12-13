import styles from "./FieldMain.module.scss";

export default function FieldMain({ children }) {
  return (
    <div id="fieldMainWrap" className={styles["field-main--wrap"]}>
      {children}
    </div>
  );
}
