import styles from "./MainWrap.module.scss";

export default function MainWrap({ cssOverrides, children }) {
  return (
    <main className={styles["main--wrap"]} css={cssOverrides}>
      {children}
    </main>
  );
}
