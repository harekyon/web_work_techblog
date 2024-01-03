import SectionTitle from "@/components/atomic/SectionTitle";
import { css } from "@emotion/react";
import styles from "./ThreejsSide.module.scss";
import Link from "next/link";
import { useEffect, useRef } from "react";
import { useScrollbar } from "@/hooks/useScrollbar";

export default function ThreejsSide({ isMenuOpen = false, children }) {
  console.log(
    useScrollbar({
      contentsWrapper: "contentsWrapper",
      barTumb: "barTumb",
      barWrapper: "barWrapper",
    })
  );

  return (
    <>
      <div
        className={styles["threeSide"]}
        css={css`
          ${!isMenuOpen ? "left:-100vw;" : "left:0;"}
        `}
      >
        {/* <div className={styles["threeSide-opacity"]}></div> */}
        <div className={styles["bar"]}>
          <div id="barWrapper" className={styles["bar-pos"]}>
            <div id="barTumb" className={styles["bar__tumb"]}></div>
          </div>
        </div>
        <div
          css={css`
            position: relative;
            height: 100%;
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
                  {/* <5li>
                    <Link href="/">
                      <span className={styles["icon"]}>
                        <span className={styles["icon-rect"]}></span>
                      </span>
                      <span className={styles["text"]}>
                        REACTやNEXTでTHREEJS
                      </span>
                    </Link>
                  </5li>
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
                  </li> */}
                </ul>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
