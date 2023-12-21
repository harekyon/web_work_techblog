import styles from "./Window.module.scss";
export default function Window({ id = "", children }) {
  return (
    <div id={id} className={styles["window"]}>
      {children}
    </div>
  );
}
