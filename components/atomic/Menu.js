import styles from "./Menu.module.scss";

export default function Menu({ children }) {
  return (
    <menu className={styles["menu--wrap"]}>
      <div className={styles["menu--position-adjust"]}>
        <div id="menu-rect" className={styles["menu--hover-rect"]}>
          <div className={styles["menu--hover-rect-stroke-tl"]}></div>
          <div className={styles["menu--hover-rect-stroke-tr"]}></div>
          <div className={styles["menu--hover-rect-stroke-bl"]}></div>
          <div className={styles["menu--hover-rect-stroke-br"]}></div>
        </div>
        {children}
      </div>
    </menu>
  );
}
