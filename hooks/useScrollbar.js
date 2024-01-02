import { useEffect, useRef } from "react";
import styles from "./useScrollbar.module.scss";
export function useScrollbar({ wrapEle, childEle }) {
  const num = useRef(0);

  useEffect(() => {
    console.log(document.getElementById(wrapEle));
    num.current += 1;
  }, []);
  return num.current;
}
