import Footer from "../Footer";
import Header from "../Header";
import MainWrap from "../atomic/MainWrap";
import styles from "./Layout.module.scss";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <MainWrap>{children}</MainWrap>
      <Footer />
      <div id="jsErrorPopWrap" class="errorPopWrap"></div>
    </>
  );
}
