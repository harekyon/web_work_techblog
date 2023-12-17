import { useEffect } from "react";
import Footer from "../Footer";
import Header from "../Header";
import MainWrap from "../atomic/MainWrap";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  useEffect(() => {
    const headerEle = document.querySelector("header");
    const footerEle = document.querySelector("footer");
    const mainEle = document.querySelector("main");

    headerEle.classList.add("anim-header");
    footerEle.classList.add("anim-footer");
    mainEle.classList.add("anim-main");
    console.log(footerEle);
  }, []);
  return (
    <>
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
      <div id="jsErrorPopWrap" class="errorPopWrap"></div>
    </>
  );
}
