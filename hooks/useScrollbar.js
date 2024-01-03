import { useEffect, useRef } from "react";
import styles from "./useScrollbar.module.scss";
export function useScrollbar({
  contentsWrapper = "contentsWrapper",
  barTumb = "barTumb",
  barWrapper = "barWrapper"
  wrapEle,
  childEle,
}) {
  const num = useRef(0);

  useEffect(() => {
    console.log(document.getElementById(wrapEle));
    num.current += 1;
  }, []);

  const contentsWrapperEle = useRef(undefined);
  const barTumbEle = useRef(undefined);
  const barWrapper = useRef(undefined);


  useEffect(() => {
    contentsWrapperEle.current = document.getElementById(contentsWrapper);
    barTumbEle.current = document.getElementById("barTumb");
    barWrapper.current = document.getElementById("barWrapper");
    const scrollableHeight = contentsWrapperEle.scrollHeight;

    const clientHeight = contentsWrapperEle.clientHeight;

    barTumbEle.current.style.height = `${
      (clientHeight / scrollableHeight) * clientHeight
    }px`;

    if (scrollableHeight > clientHeight) {
      scrollbarThumbRef.current.style.opacity = 0.3;
      barWrapper.current.style.display = "block";
    } else {
      scrollbarThumbRef.current.style.opacity = 0;
      barWrapper.style.display = "none";
    }
    contentsWrapperEle.current.addEventListener("scroll", scrollFunc);
  }, []);

  function scrollFunc() {
    // const bar = document.getElementById("barWrapper");
    const thumb = document.getElementById("barTumb");

    const A = document.getElementById(contentsWrapper).scrollHeight;
    const B = document.getElementById(contentsWrapper).clientHeight;
    const C = document.getElementById(contentsWrapper).scrollTop;
    let D = null;
    D = C / (A - B);
    console.log(D);

    // const thumbPosY = document.getElementById("modal").scrollHeight;

    const movableHeight = B - thumb.clientHeight;
    console.log(movableHeight);
    thumb.style.top = `${D * movableHeight}px`;
  }
  return num.current;
}
