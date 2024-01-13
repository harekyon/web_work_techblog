import BlogMainContent from "@/components/atomic/BlogMainContent";
import Breadcrumb from "@/components/atomic/Breadcrumb";
import FieldMain from "@/components/atomic/FieldMain";
import SectionMain from "@/components/atomic/SectionMain";
import SectionTitle from "@/components/atomic/SectionTitle";
import SidePanelProfile from "@/components/atomic/SidePanelProfile";
import Window from "@/components/atomic/Window";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
// import variable from "@/styles/_var.scss";
import styles from "./ThreejsLayout.module.scss";
import ThreejsSide from "./ThreejsSide";
import Link from "next/link";

const breadcrumb = [
  { name: "BLOG", href: "/" },
  { name: "LIBRARY", href: "/lib" },
  { name: "THREE.JS", href: "/lib/threejs" },
];

export default function ThreejsLayout({ children }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  useEffect(() => {
    const mainElement = document.getElementsByTagName("main")[0];
    mainElement.style.maxWidth = "100%";
    mainElement.style.position = "relative";
    //ページ遷移アニメーション系
    mainElement.classList.remove("transition-anim");
    mainElement.classList.add("anim-main");
    return () => {
      mainElement.style.position = "unset";
      mainElement.style.maxWidth = "1200px";
    };
  }, []);
  return (
    <>
      <title>THREE.JS</title>
      <button
        className={`${styles["spmenu"]}`}
        onClick={() => {
          isMenuOpen ? setIsMenuOpen(false) : setIsMenuOpen(true);
        }}
      >
        <div
          className={
            isMenuOpen ? styles["spmenu-isopen"] : styles["spmenu-isclose"]
          }
        ></div>
      </button>
      <ThreejsSide isMenuOpen={isMenuOpen} />
      <FieldMain>
        <Window>
          <SectionTitle>BLOG LIST</SectionTitle>
          <BlogMainContent>
            <SectionMain info={false}>
              <Breadcrumb breadcrumb={breadcrumb}></Breadcrumb>
              {children}
            </SectionMain>
          </BlogMainContent>
        </Window>
      </FieldMain>
    </>
  );
}
