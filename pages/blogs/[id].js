/*===================================*/
// [article] PAGE
// 制作実績一覧から案件をクリックするとダイナミックルーティングによって案件の情報を格納した個別ページが生成される
// []内は案件番号が格納される
/*===================================*/

import { useRouter } from "next/router";
import { client } from "../../libs/client";
import Header from "@/components/Header";
import MainWrap from "@/components/atomic/MainWrap";
import FieldMain from "@/components/atomic/FieldMain";
import FieldSide from "@/components/atomic/FieldSide";
import SectionTitle from "@/components/atomic/SectionTitle";
import SectionMain from "@/components/atomic/SectionMain";
import ArticleMain from "@/components/atomic/ArticleMain";
import ArticleProperty from "@/components/atomic/ArticleProperty";
import ArticleTitle from "@/components/atomic/ArticleTitle";
import ArticleThumbnail from "@/components/atomic/ArticleThumbnail";
import SidePanelProfile from "@/components/atomic/SidePanelProfile";
import { css } from "@emotion/react";
import Footer from "@/components/Footer";
import Meta from "@/components/Meta";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

import hljs from "highlight.js";
import Seo from "@/components/Seo";

const popPreset = {
  useEffect:
    "<span class='hover-pop--wrap'><span class='hover-pop__unit'><img src='data:image/jpeg;base64,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'></img>useEffectはコンポーネントが読み込み終了すると実行されるReactのhooks(関数群)です</span><span class='hover-pop__target'>useEffect</span></span>",
  useState:
    "<span class='hover-pop--wrap'><span class='hover-pop__unit'>useStateはReactのhooks(関数群)です</span><span class='hover-pop__target'>useState</span></span>",
  useRef: "<span>useRef</span>",
  // errorUnit:
  //   "<span class='hover-pop--wrap'><span class='hover-pop__unit'>useStateはReactのhooks(関数群)です</span><span class='hover-pop__target'>useState</span></span>",
};
const getPresetKeyArray = (preset) => {
  return Object.keys(preset);
};
const popPresetKeyArray = getPresetKeyArray(popPreset);
export default function BlogId({ data, poppreset }) {
  const [originalString, setOriginalString] = useState(data.content);
  const stringData = useRef("");
  const preChildArray = useRef([]);
  const transformedArray = useRef([]);
  console.log(poppreset);
  useLayoutEffect(() => {
    function removeAndStackPreTag() {
      const preArray = document.getElementsByTagName("pre");
      Array.from(preArray).map((p) => {
        preChildArray.current.push(Array.from(p.children));
        p.removeChild(p.lastChild);
      });
      stringData.current = document.getElementById(
        "articleMainContents"
      ).children;
      var htmlString = "";
      Array.from(stringData.current).forEach(function (element) {
        htmlString += element.outerHTML;
      });
      stringData.current = htmlString;
    }
    removeAndStackPreTag();
  }, []);
  useEffect(() => {
    popPresetKeyArray.map((p, idx) => {
      let cryptoGenerate =
        "[{*" + Math.random().toString(32).substring(4) + "*}]";
      transformedArray.current.push({ p, cryptoGenerate });
      while (stringData.current.includes(p)) {
        stringData.current = stringData.current.replace(p, cryptoGenerate);
      }
    });
    transformedArray.current.map((t, idx) => {
      // console.log(t.p);
      // console.log(t.cryptoGenerate);
      while (stringData.current.includes(t.cryptoGenerate)) {
        stringData.current = stringData.current.replace(
          t.cryptoGenerate,
          popPreset[t.p]
        );
      }
    });
    replaceAllInnerText();
    putInCodeTag();
    setTimeout(() => {
      adjustPositionTopPop();
    }, 100);
    resizeFunc();
    window.addEventListener("resize", resizeFunc);

    function resizeFunc() {
      const hoverPopUnit = document.getElementsByClassName("hover-pop__unit");
      const hoverPopTarget =
        document.getElementsByClassName("hover-pop__target");
      Array.from(hoverPopUnit).map((h, idx) => {
        const hoverPopUnitPositionLeft = h.getBoundingClientRect().left;
        const hoverPopTargetPositionLeft =
          hoverPopTarget[idx].getBoundingClientRect().left;
        const hoverPopUnitWidth = h.offsetWidth - 10;

        if (idx === 1) {
          if (
            hoverPopUnitWidth >
            window.innerWidth - hoverPopTargetPositionLeft
          ) {
            // console.log("right!");
            h.style.left = `unset`;
            h.style.right = `0px`;
          } else if (
            hoverPopUnitWidth <
            window.innerWidth - hoverPopTargetPositionLeft
          ) {
            // console.log("left!");
            h.style.left = `0px`;
            h.style.right = `unset`;
          }
        }
      });
    }
    //preの中にcodeを入れなおす。
    function putInCodeTag() {
      const getAllPreTag = document.getElementsByTagName("pre");
      Array.from(getAllPreTag).map((p, idx) => {
        const codeElement = preChildArray.current[idx][0];
        hljs.highlightElement(codeElement);
        p.innerHTML = preChildArray.current[idx][0].outerHTML;
      });
    }
    //中のコンテンツを消去して上で調整したテキストデータに置き換える
    function replaceAllInnerText() {
      const articleMainContents = document.getElementById(
        "articleMainContents"
      );
      articleMainContents.removeChild(articleMainContents.lastChild);
      articleMainContents.innerHTML = stringData.current;
    }
    //ポップの高さを確認し、その値で高さ調整する
    function adjustPositionTopPop() {
      const hoverPopUnit = document.getElementsByClassName("hover-pop__unit");
      Array.from(hoverPopUnit).map((h) => {
        h.style.top = `-${h.offsetHeight}px`;
      });
    }
  }, []);
  return (
    <>
      <Seo
        title={data.title}
        description={data.description}
        keywords="web,3d,js,react,next,threejs,blender,デジタルファブリケーション,fab"
        url={`https://harekyon.com/blogs/${data.id}`}
      />

      <Header></Header>
      <MainWrap>
        <FieldMain data={data}>
          <SectionTitle>ARTICLE</SectionTitle>
          <SectionMain>
            <ArticleProperty data={data}></ArticleProperty>
            <ArticleTitle>{data.title}</ArticleTitle>
            <ArticleThumbnail thumbnail={data.thumbnail}></ArticleThumbnail>
            <ArticleMain>{originalString}</ArticleMain>
          </SectionMain>
        </FieldMain>
      </MainWrap>
      <Footer />
    </>
  );
}

// 静的生成のためのパスを指定します
export const getStaticPaths = async () => {
  const data = await client.get({ endpoint: "blogs" });

  const paths = data.contents.map((content) => `/blogs/${content.id}`);
  return { paths, fallback: false };
};

// データをテンプレートに受け渡す部分の処理を記述します
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const data = await client.get({ endpoint: "blogs", contentId: id });
  const poppreset = await client.get({ endpoint: "poppreset" });

  return {
    props: {
      data: data,
      poppreset: poppreset.contents,
    },
  };
};
