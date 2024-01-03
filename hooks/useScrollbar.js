import { useEffect, useRef } from "react";

export function useScrollbar({
  contentsWrapper = "contentsWrapper",
  barTumb = "barTumb",
  barWrapper = "barWrapper",
}) {
  const contentsWrapperEle = useRef(undefined);
  const barTumbEle = useRef(undefined);
  const barWrapperEle = useRef(undefined);
  const adjust = 26;
  const initBarWrapperPadding = useRef(null);

  useEffect(() => {
    initBarWrapperPadding.current = document.getElementById(contentsWrapper);

    resizeFunc();
    window.addEventListener("resize", resizeFunc);
    contentsWrapperEle.current.addEventListener("scroll", scrollFunc);
  }, []);
  function resizeFunc() {
    console.log(initBarWrapperPadding.current.style.padding);
    scrollFunc();
    contentsWrapperEle.current = document.getElementById(contentsWrapper);
    barTumbEle.current = document.getElementById(barTumb);
    barWrapperEle.current = document.getElementById(barWrapper);
    barWrapperEle.current.style.height = `calc(100% - ${adjust}px)`;
    barWrapperEle.current.style.marginTop = adjust / 2 + "px";
    barWrapperEle.current.style.marginBottom = adjust / 2 + "px";

    const scrollableHeight = contentsWrapperEle.current.scrollHeight;
    const clientHeight = contentsWrapperEle.current.clientHeight;
    barTumbEle.current.style.height = `${
      (clientHeight / scrollableHeight) * clientHeight - adjust
    }px`;
    if (scrollableHeight > clientHeight) {
      barTumbEle.current.style.opacity = 0.3;
      barWrapperEle.current.style.display = "flex";
      contentsWrapperEle.current.style.padding = null;
    } else {
      barTumbEle.current.style.opacity = 0;
      barWrapperEle.current.style.display = "none";
      contentsWrapperEle.current.style.padding = "10px";
    }
  }

  function scrollFunc() {
    const thumb = document.getElementById("barTumb");

    const A = document.getElementById(contentsWrapper).scrollHeight;
    const B =
      document.getElementById(contentsWrapper).clientHeight - adjust / 2;
    const C = document.getElementById(contentsWrapper).scrollTop;
    let D = null;
    D = C / (A - B);

    const movableHeight = B - thumb.clientHeight;
    thumb.style.top = `${D * movableHeight}px`;
  }
}
