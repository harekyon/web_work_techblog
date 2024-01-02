import SectionTitle from "@/components/atomic/SectionTitle";
import { css } from "@emotion/react";
import styles from "./ThreejsSide.module.scss";
import Link from "next/link";
import { useEffect } from "react";
import { useScrollbar } from "@/hooks/useScrollbar";

export default function ThreejsSide({ isMenuOpen = false, children }) {
  console.log(useScrollbar());
  // useEffect(() => {
  //   if (
  //     !modalContentsRef.current &&
  //     !scrollbarRef.current &&
  //     !modalHeaderRef.current &&
  //     !scrollbarThumbRef.current &&
  //     !modalContentBoxRef.current
  //   )
  //     return;

  //   scrollbarRef.current.style.marginTop = `${modalHeaderRef.current.clientHeight}px`;
  //   scrollbarRef.current.style.height = `${
  //     modalContentsRef.current.clientHeight -
  //     modalHeaderRef.current.clientHeight
  //   }px`;

  //   const boxscrollHeight = modalContentBoxRef.current.scrollHeight;
  //   const clientHeight =
  //     modalContentsRef.current.clientHeight -
  //     modalHeaderRef.current.clientHeight;
  //   scrollbarThumbRef.current.style.height = `${
  //     (clientHeight / boxscrollHeight) * clientHeight
  //   }px`;

  //   if (boxscrollHeight >= clientHeight) {
  //     scrollbarThumbRef.current.style.opacity = 0.3;
  //   } else {
  //     scrollbarThumbRef.current.style.opacity = 0;
  //   }
  // }, [obj]);
  return (
    <>
      <div
        className={styles["threeSide"]}
        css={css`
          ${!isMenuOpen ? "left:-100vw;" : "left:0;"}
        `}
      >
        {/* <div className={styles["threeSide-opacity"]}></div> */}
        <div
          css={css`
            position: relative;
          `}
        >
          <SectionTitle sticky={true}>THREEJS入門</SectionTitle>
          <div
            css={css`
              width: 100%;
              height: 100%;
              padding: 0 18px 10px 10px;
              display: flex;
              flex-direction: column;
              row-gap: 10px;
              position: relative;
            `}
          >
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
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
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
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <span className={styles["icon"]}>
                      <span className={styles["icon-rect"]}></span>
                    </span>
                    <span className={styles["text"]}>REACTやNEXTでTHREEJS</span>
                  </Link>
                </li>
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
