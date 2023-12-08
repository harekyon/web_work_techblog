import useEvent from "@react-hook/event";
import styles from "./Header.module.scss";
import Menu from "./atomic/Menu";
import MenuButton from "./atomic/MenuButton";
import { useEffect, useLayoutEffect } from "react";
import Link from "next/link";
import Image from "next/image";

let menuWebRef = null;
let menuCgRef = null;
let menuDesignRef = null;
let menuRect = null;
export default function Header({ title = "POKO", url = "/blogs" }) {
  useLayoutEffect(() => {
    menuWebRef = document.getElementById("menu-web");
    menuCgRef = document.getElementById("menu-cg");
    menuDesignRef = document.getElementById("menu-design");
    menuRect = document.getElementById("menu-rect");
  });
  useEffect(() => {
    //ボタンをマウスオーバーした時の追従エレメント
    menuWebRef.addEventListener("mouseover", () => {
      // console.log("web");
      menuRect.style.cssText =
        "margin-right:5px;transform:translateX(10px)scaleX(1.06)scaleY(1.2);opacity:1;";
    });
    // menuCgRef.addEventListener("mouseover", () => {
    //   // console.log("cg");
    //   menuRect.style.cssText =
    //     "transform:translateX(154.5px)scaleX(1.06)scaleY(1.2);opacity:1;";
    // });
    // menuDesignRef.addEventListener("mouseover", () => {
    //   // console.log("design");
    //   menuRect.style.cssText =
    //     "transform:translateX(298px)scaleX(1.06)scaleY(1.2);opacity:1;";
    // });
    menuWebRef.addEventListener("mouseout", () => {
      // console.log("web");
      menuRect.style.cssText = "transform:translateX(3px);opacity:0;";
    });
    // menuCgRef.addEventListener("mouseout", () => {
    //   // console.log("cg");
    //   menuRect.style.cssText = "transform:translateX(146px);opacity:0;";
    // });
    // menuDesignRef.addEventListener("mouseout", () => {
    //   // console.log("design");
    //   menuRect.style.cssText = "transform:translateX(290px);opacity:0;";
    // });
  }, []);
  return (
    <header className={styles["header-bg"]}>
      <div className={styles["header--wrap"]}>
        <div className={styles["header__logo"]}>
          <Link href={url}>{title}</Link>
          {/* <Image src="/blogs/pokologo.svg" width="50" height="50"></Image> */}
        </div>
        <div className={styles["header__menu"]}>
          <Menu>
            <MenuButton href="/blogs/about" id="menu-web">
              ABOUT
            </MenuButton>
            {/* <MenuButton href="/blogs#tag=%22cg%22&page=1" id="menu-cg">
              CG
            </MenuButton>
            <MenuButton href="/blogs#tag=%22design%22&page=1" id="menu-design">
              DESIGN
            </MenuButton> */}
          </Menu>
        </div>
      </div>
    </header>
  );
}
