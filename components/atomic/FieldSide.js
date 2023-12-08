import styles from "./FieldSide.module.scss";

export default function FieldSide({ children }) {
  return <div className={styles["field-side--wrap"]}>{children}</div>;
}
