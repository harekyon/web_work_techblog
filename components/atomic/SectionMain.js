import styles from "./SectionMain.module.scss";
export default function SectionMain({ info = true, children }) {
  return (
    <div className={styles["section-main--wrap"]}>
      {info ? (
        <div className={styles["section-main__info-button"]}>
          <span>i</span>
          <div className={styles["section-main__info-modal"]}>
            <div className={styles["section-main__info-modal-inner"]}>
              <img src="https://i.gyazo.com/670410bd2b2ea89b655908186364241a.gif"></img>
              <p>POPについて</p>
              <span>
                黄色背景の箇所をマウスオーバーすると、単語の説明を表示します。SPなど、正しくPOPが表示出来ないウィンドウ幅(500px以下)の場合は灰色にハイライトされます。
              </span>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}

      <div>{children}</div>
    </div>
  );
}
