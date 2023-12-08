import styles from "./FieldMain.module.scss";

export default function FieldMain({ children }) {
  return <div className={styles["field-main--wrap"]}>{children}</div>;
}
