import styles from "./CardList.module.scss";

export default function CardList({ children }) {
  return <div className={styles["card-list"]}>{children}</div>;
}
