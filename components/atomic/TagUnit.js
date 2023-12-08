import styles from "./TagUnit.module.scss";
export default function TagUnit({
  tag,
  name = null,
  router,
  children,
  ...props
}) {
  function queryFormatter(queryFormatResolve) {
    // if (router?.query?.page ) {
    //   router.push({ query: { tag: name, page: 1 } });
    //   queryFormatResolve();
    // } else {
    //   router.push({ query: { tag: name, page: 1 } });
    //   queryFormatResolve();
    // }
    router.push({ query: { tag: name, page: 1 } });
    queryFormatResolve();
  }

  function sortTagProcess() {
    new Promise((resolve) => {
      new Promise((cardAnimResolve) => {
        props.cardDisappearAnimation(cardAnimResolve);
      }).then(() => {
        resolve();
      });
    }).then(() => {
      new Promise((sortBlogListResolve) => {
        props.sortBlogList(sortBlogListResolve, name);
      }).then(() => {
        new Promise((queryFormatResolve) => {
          queryFormatter(queryFormatResolve);
        }).then(() => {});
      });
    });
  }
  return (
    <div
      className={`${styles["tagunit--wrap"]} ${styles["tagunit__wrap"]}`}
      onClick={() => {
        sortTagProcess();
      }}
      data-tag={children}
      data-isactive={
        router?.query?.tag?.toLowerCase() === children.toLowerCase()
          ? "true"
          : "false"
      }
    >
      {children}
      <div className={styles["tagunit__stroke--tl"]}></div>
      <div className={styles["tagunit__stroke--tr"]}></div>
      <div className={styles["tagunit__stroke--bl"]}></div>
      <div className={styles["tagunit__stroke--br"]}></div>
    </div>
  );
}
