import styles from "./Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles["footer-bg"]}>
      <div className={styles["footer--wrap"]}>
        <div className={styles["footer__logo"]}></div>
        <div className={styles["footer__copy"]}>©2023 harekyon</div>
      </div>
    </footer>
  );
}
