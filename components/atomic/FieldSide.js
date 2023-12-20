import styles from "./FieldSide.module.scss";

export default function FieldSide({ children }) {
  return (
    <div id="fieldSideWrap" className={styles["field-side--wrap"]}>
      {children}
    </div>
  );
}
