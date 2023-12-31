import SectionTitle from "@/components/atomic/SectionTitle";
import { css } from "@emotion/react";
import styles from "./ThreejsSide.module.scss";
import Link from "next/link";

export default function ThreejsSide({ children }) {
  return (
    <>
      <div className={styles["threeSide"]}>
        <div className={styles["threeSide--sticky"]}>
          <SectionTitle>SIDE</SectionTitle>
          <div
            css={css`
              width: 100%;
              height: 100%;
              padding: 0 10px 10px;
              display: flex;
              flex-direction: column;
              row-gap: 10px;
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
              </ul>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
