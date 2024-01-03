import ArticleMain from "@/components/atomic/ArticleMain";
import { css } from "@emotion/react";
import { useEffect } from "react";
// import variable from "@/styles/_var.scss";
// import styles from "./threejs.module.scss";
import Link from "next/link";
import ThreejsLayout from "@/components/layout/ThreejsLayout";
import ArticleTitle from "@/components/atomic/ArticleTitle";

const breadcrumb = [
  { name: "BLOG", href: "/" },
  { name: "LIBRARY", href: "/lib" },
  { name: "THREE.JS", href: "/lib/threejs" },
];

export default function Blogs() {
  useEffect(() => {
    // const mainElement = document.getElementsByTagName("main")[0];
    // mainElement.style.maxWidth = "100%";
    // mainElement.style.position = "relative";
    // //ページ遷移アニメーション系
    // mainElement.classList.remove("transition-anim");
    // mainElement.classList.add("anim-main");
    // return () => {
    //   mainElement.style.position = "unset";
    //   mainElement.style.maxWidth = "1200px";
    // };
  }, []);
  return (
    <>
      <title>THREE.JS</title>
      <ThreejsLayout>
        <ArticleTitle>THREEJSで出来る事</ArticleTitle>
        <ArticleMain info={false}>
          <h2></h2>
        </ArticleMain>
      </ThreejsLayout>
    </>
  );
}
