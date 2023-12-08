import styles from "./IndexModule.module.scss";
import { useEffect, useState } from "react";
export default function IndexModule() {
  const [heads, setHeads] = useState([]);
  useEffect(() => {
    let tableOfContents = document.getElementById("tableOfContents");
    const articleMainSide = document.getElementById("article-main--side");
    window.addEventListener(
      "scroll",
      () => {
        tableOfContents = document.getElementById("tableOfContents");
        if (articleMainSide.getBoundingClientRect().top < 40) {
          tableOfContents.style.position = "fixed";
          tableOfContents.style.top = "40px";
          tableOfContents.style.width = `${articleMainSide.clientWidth}px`;
        } else if (40 < articleMainSide.getBoundingClientRect().top) {
          tableOfContents.style.position = "unset";
          tableOfContents.style.top = "unset";
        }
      },
      true
    );
  });
  useEffect(() => {
    setHeads(Array.from(document.querySelectorAll("h1,h2,h3")));
  }, []);

  function autoScroll(id) {
    const ele = document.getElementById(id);
    ele.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div id="tableOfContents" className={styles["index-module"]}>
      <div className={styles["index-module__mokuji"]}>目次</div>
      {heads.map((h, idx) => {
        if (h.tagName === "H1") {
          return <></>;
        } else if (h.tagName === "H2") {
          return (
            <div
              onClick={() => {
                autoScroll(heads[idx].getAttribute("id"));
              }}
              key={idx}
              className={styles["index-module__h2"]}
            >
              <span>{h.innerText}</span>
            </div>
          );
        } else if (h.tagName === "H3") {
          return (
            <span
              key={idx}
              onClick={() => {
                autoScroll(heads[idx].getAttribute("id"));
              }}
            >
              <div className={styles["index-module__h3"]}>{h.innerText}</div>
            </span>
          );
        } else if (h.tagName === "H4") {
          return (
            <span
              key={idx}
              onClick={() => {
                autoScroll(heads[idx].getAttribute("id"));
              }}
            >
              <div className={styles["index-module__h4"]}>{h.innerText}</div>
            </span>
          );
        }
      })}
    </div>
  );
}
