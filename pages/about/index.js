import Footer from "@/components/Footer";
import Header from "@/components/Header";
import ArticleMain from "@/components/atomic/ArticleMain";
import BlogMainContent from "@/components/atomic/BlogMainContent";
import Breadcrumb from "@/components/atomic/Breadcrumb";
import FieldMain from "@/components/atomic/FieldMain";
import FieldSide from "@/components/atomic/FieldSide";
import MainWrap from "@/components/atomic/MainWrap";
import SectionMain from "@/components/atomic/SectionMain";
import SectionTitle from "@/components/atomic/SectionTitle";
import SidePanelProfile from "@/components/atomic/SidePanelProfile";
import Window from "@/components/atomic/Window";
import { css } from "@emotion/react";
import { useEffect } from "react";
// import variable from "@/styles/_var.scss";

const breadcrumb = [
  { name: "BLOG", href: "/" },
  { name: "ABOUT", href: "/about" },
];

export default function Blogs() {
  useEffect(() => {
    const mainElement = document.getElementsByTagName("main")[0];
    mainElement.classList.remove("transition-anim");
    mainElement.classList.add("anim-main");
  }, []);
  return (
    <>
      <title>POKO TECH について</title>

      <FieldMain>
        <Window>
          <SectionTitle>BLOG LIST</SectionTitle>
          <BlogMainContent>
            <SectionMain info={false}>
              <Breadcrumb breadcrumb={breadcrumb}></Breadcrumb>
              <ArticleMain info={false}>
                <h2
                  css={css`
                    margin-top: 0px !important;
                  `}
                >
                  POKO TECHについて
                </h2>
                <p>
                  このサイトは筆者harepokoが日々の制作から得た知識を脳死でも分かるようにかみ砕いて説明するテックブログです。
                </p>
                <p>
                  筆者の仕事は主にWEBですので、WEB制作に関する記事を投稿しますが、趣味で3Dやデジタルファブリケーションもやってますので、それらの記事も見て頂けるとです。
                </p>
              </ArticleMain>
            </SectionMain>
          </BlogMainContent>
        </Window>
      </FieldMain>
      <FieldSide>
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
          <SidePanelProfile></SidePanelProfile>
        </div>
      </FieldSide>
    </>
  );
}
