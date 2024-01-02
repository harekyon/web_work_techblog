import SectionTitle from "@/components/atomic/SectionTitle";
import { css } from "@emotion/react";
import styles from "./ThreejsSide.module.scss";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useScrollbar } from "@/hooks/useScrollbar";

export default function ThreejsSide({ isMenuOpen = false, children }) {
  const modalContentsRef = useRef(undefined);
  const scrollbarRef = useRef(undefined);
  const scrollbarThumbRef = useRef(undefined);
  console.log(useScrollbar({ wrapEle: "threeSide", childEle: "childEle" }));
  useEffect(() => {
    // const modalHeaderRef = document.getElementById("modalHeaderRef");
    // if (
    //   !modalContentsRef.current ||
    //   !scrollbarRef.current ||
    //   !modalHeaderRef.current ||
    //   !scrollbarThumbRef.current
    //   // &&
    //   // !modalContentBoxRef.current
    // )
    //   return;

    // console.log(modalHeaderRef);

    // scrollbarRef.current.style.marginTop = `${modalHeaderRef.clientHeight}px`;
    // scrollbarRef.current.style.height = `${
    //   modalContentsRef.current.clientHeight - modalHeaderRef.clientHeight
    // }px`;

    const contentsWrapper = document.getElementById("contentsWrapper");
    const barTumb = document.getElementById("barTumb");
    const barWrapper = document.getElementById("barWrapper");
    const scrollableHeight = contentsWrapper.scrollHeight;

    // const boxscrollHeight = modalContentsRef.current.scrollHeight;
    // const clientHeight =
    //   modalContentsRef.current.clientHeight - modalHeaderRef.clientHeight;

    const clientHeight = contentsWrapper.clientHeight;

    barTumb.style.height = `${
      (clientHeight / scrollableHeight) * clientHeight
    }px`;

    console.log(
      `scrollableHeight:${scrollableHeight}, clientHeight:${clientHeight}`
    );
    if (scrollableHeight > clientHeight) {
      scrollbarThumbRef.current.style.opacity = 0.3;
      barWrapper.style.display = "block";
    } else {
      scrollbarThumbRef.current.style.opacity = 0;
      barWrapper.style.display = "none";
    }
  }, []);

  useEffect(() => {
    const contentsWrapper = document.getElementById("contentsWrapper");
    contentsWrapper.addEventListener("scroll", scrollFunc);
  }, []);

  function scrollFunc() {
    // const bar = document.getElementById("barWrapper");
    const thumb = document.getElementById("barTumb");

    const A = document.getElementById("contentsWrapper").scrollHeight;
    const B = document.getElementById("contentsWrapper").clientHeight;
    const C = document.getElementById("contentsWrapper").scrollTop;
    let D = null;
    D = C / (A - B);
    console.log(D);

    // const thumbPosY = document.getElementById("modal").scrollHeight;

    const movableHeight = B - thumb.clientHeight;
    console.log(movableHeight);
    thumb.style.top = `${D * movableHeight}px`;
  }

  return (
    <>
      <div
        className={styles["threeSide"]}
        css={css`
          ${!isMenuOpen ? "left:-100vw;" : "left:0;"}
        `}
      >
        {/* <div className={styles["threeSide-opacity"]}></div> */}
        <div id="barWrapper" className={styles["bar"]}>
          <div className={styles["bar-pos"]} ref={scrollbarRef}>
            <div
              id="barTumb"
              ref={scrollbarThumbRef}
              className={styles["bar__tumb"]}
            ></div>
          </div>
        </div>
        <div
          ref={modalContentsRef}
          css={css`
            position: relative;
          `}
        >
          <SectionTitle id={"modalHeaderRef"} sticky={true}>
            THREEJS入門
          </SectionTitle>
          <div
            css={css`
              height: 100%;
            `}
          >
            <div id="contentsWrapper" className={styles["threeSide-inner"]}>
              <ul>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTで</span>
                  </Link>
                </li>
                <ul>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                </ul>
              </ul>
              <ul>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTで</span>
                  </Link>
                </li>
                <ul>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </li>
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
