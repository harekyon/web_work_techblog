import { useEffect, useRef } from "react";
import styles from "./useScrollbar.module.scss";
export function useScrollbar() {
  const num = useRef(0);
  useEffect(() => {
    num.current += 1;
  }, []);
  return num.current;
}
