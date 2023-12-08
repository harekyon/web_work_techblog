import styles from "@/styles/Home.module.scss";

import { client } from "../libs/client";
import Image from "next/image";
import { LogoSvg } from "@/libs/assets";
import { useEffect } from "react";
import Cube from "@/components/atomic/Cube";
import CubeWrap from "@/components/atomic/CubeWrap";
import { css } from "@emotion/react";
import GridWrap from "@/components/atomic/GridWrap";
import Link from "next/link";
import CubeArticle from "@/components/atomic/CubeArticle";
import { convertDateStringToDate } from "@/libs/core";
import { formatDateDot } from "@/libs/core";
import Meta from "@/components/Meta";
import HeadGroup from "@/components/Seo";
import Seo from "@/components/Seo";

const article = [
  { title: "aaaaa", link: "harekyon.com", thumbnail: "/example_thumbnail.png" },
  { title: "bbbbb", link: "harekyon.com", thumbnail: "/example_thumbnail.png" },
  { title: "ccccc", link: "harekyon.com", thumbnail: "/example_thumbnail.png" },
];

let value = 0;
export default function Home({ blogs }) {
  useEffect(() => {
    const wheelFunc = (e) => {
      // console.log(document.getElementById("main--wrap"));
      // e.preventDefault();
      if (document.getElementById("main--wrap") != null) {
        value += e.deltaY * 2;
        value = Math.min(
          Math.max(0, value),
          document.getElementById("main--wrap").scrollWidth
        );
        document.getElementById("main--wrap").scrollLeft = value;
      }
    };
    document.body.addEventListener("wheel", wheelFunc);
  }, []);
  return (
    <>
      <Seo
        title="TOP"
        description="くりえいしょん"
        keywords="web,3d,js,react,next,threejs,blender,デジタルファブリケーション,fab"
        url="https://harekyon.com/"
      />
      <title>{`HKDC`}</title>
      <main className={styles["main"]}>
        <div id="main--wrap" className={styles["main--wrap"]}>
          <nav className={styles["nav--wrap"]}>
            <div className={styles["nav__title"]}>
              {/* <Image src="/logo.png" width="131" height="69"></Image> */}
              <LogoSvg />
            </div>
            <ul className={styles["nav--menu"]}>
              <li>
                <a href="#" className="notactive">
                  ABOUT ME
                </a>
              </li>
              <li>
                <a href="#" className="notactive">
                  NEWS
                </a>
              </li>
              <li>
                <a href="#" className="notactive">
                  WORKS
                </a>
              </li>
              <li>
                <Link href="/blogs">TECHBLOG</Link>
              </li>
              <li>
                <a href="#" className="notactive">
                  SPECIAL
                </a>
              </li>
            </ul>
          </nav>
          <div className={styles["section1"]}>
            <GridWrap
              cssOverrides={css`
                grid-template: 1fr 1fr 1fr / 1fr;
                padding: 10px 0;
                row-gap: 10px;
              `}
            >
              <Cube
                boxWidth="400px"
                boxHeight="100%"
                src="/sample1.png"
                property1="WORK"
                property2="2022.03"
                title="PITAGORA BLOCK"
                subTitle="FAB"
              ></Cube>
              <Cube
                boxWidth="400px"
                boxHeight="100%"
                src="/sample2.png"
                property1="WORK"
                property2="2022.03"
                title="CG WORKS"
                subTitle="ART"
              ></Cube>
              <Cube
                boxWidth="400px"
                boxHeight="100%"
                src="/sample3.png"
                property1="WORK"
                property2="2022.03"
                title="CG WORKS"
                subTitle="PRODUCT"
              ></Cube>
            </GridWrap>
          </div>
          <div className={styles["section1"]}>
            <GridWrap
              cssOverrides={css`
                grid-template: 130px 130px 130px / 130px 130px;
                padding: 10px 0;
                row-gap: 20px;
                column-gap: 20px;
              `}
            >
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1="FIELD"
                property2="01"
                title="Javascript"
                subTitle="WEB"
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1="FIELD"
                property2="02"
                title="React.js"
                subTitle="WEB"
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1="FIELD"
                property2="03"
                title="TOUCH DESIGNER"
                subTitle="CREATIVE CODE"
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1="FIELD"
                property2="04"
                title="Processing"
                subTitle="CREATIVE CODE"
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1="FIELD"
                property2="05"
                title="Fabrication"
                subTitle="WEB"
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1="FIELD"
                property2="06"
                title="Blender"
                subTitle="CG"
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1=""
                property2=""
                title="Published"
                subTitle=""
              ></Cube>
              <Cube
                boxWidth="100%"
                boxHeight="100%"
                property1=""
                property2=""
                title=""
                subTitle=""
              ></Cube>
            </GridWrap>
          </div>
          <div className={styles["section1"]}>
            <GridWrap
              cssOverrides={css`
                padding: 10px 0;
                row-gap: 10px;
              `}
            >
              <CubeArticle
                boxWidth="400px"
                boxHeight="100%"
                src="/sample1.png"
                property1="TECHBLOG"
                property2={formatDateDot(
                  convertDateStringToDate(blogs[0].publishedAt)
                )}
                title="NEW POST"
                subTitle="BLOG"
                articleTitle={blogs[0].title}
                articleImgSrc={blogs[0].thumbnail.url}
                articleAbs={blogs[0].abstract}
              ></CubeArticle>
            </GridWrap>
          </div>
        </div>
      </main>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  return {
    props: {
      blogs: data.contents,
    },
  };
};
