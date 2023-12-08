import styles from "./SectionTitle.module.scss";
export default function SectionTitle({ children }) {
  return (
    <div className={styles["section-title--wrap"]}>
      <span>{children}</span>
    </div>
  );
}
