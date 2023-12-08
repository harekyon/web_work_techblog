import HeadGroup from "@/components/Seo";
import Image from "next/image";
import styles from "@/styles/Blogs.module.scss";

// import { client } from "../libs/client";
import { client } from "../../libs/client";

import Header from "@/components/Header";
import CardList from "@/components/atomic/CardList";
import CardUnit from "@/components/atomic/CardUnit";
import { convertDateStringToDate, formatDateDot, formatTag } from "@/libs/core";
import Footer from "@/components/Footer";
import MainWrap from "@/components/atomic/MainWrap";
import FieldSide from "@/components/atomic/FieldSide";
import SectionTitle from "@/components/atomic/SectionTitle";
import SidePanelProfile from "@/components/atomic/SidePanelProfile";
import { css } from "@emotion/react";
import Breadcrumb from "@/components/atomic/Breadcrumb";
import FieldMain from "@/components/atomic/FieldMain";
import TagList from "@/components/atomic/TagList";
import TagUnit from "@/components/atomic/TagUnit";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Pagination from "@/components/atomic/Pagination";

import { useAtom } from "jotai";
import { atomWithHash } from "jotai-location";
import { errorPop } from "@/libs/hp_assets";
import BlogMainContent from "@/components/atomic/BlogMainContent";
import Meta from "@/components/Meta";
import Seo from "@/components/Seo";

// import { errorPop } from "@/libs/hp_assets";

const breadcrumb = [
  { name: "HOME", href: "https://www.harekyon.com/" },
  { name: "BLOG", href: "/blogs" },
];

const cardunitTransitionDelayDiff = 50;
const paginationPerPage = 12;

const initJotaiTag = atomWithHash(`tag`);
const initJotaiPage = atomWithHash(`page`);

export default function Blogs({ blogs, categories, poppreset }) {
  const [page, setPage] = useState(0);
  const [tag, setTag] = useState(formatTag(null, "All"));
  const [jotaiTag, setJotaiTag] = useAtom(initJotaiTag);
  const [jotaiPage, setJotaiPage] = useAtom(initJotaiPage);
  const articleNoneError = useRef(false);

  const sliceByNumber = (array, number) => {
    const length = Math.ceil(array.length / number);
    return new Array(length)
      .fill()
      .map((_, i) => array.slice(i * number, (i + 1) * number));
  };
  const [sortedArticleList, setSortedArticleList] = useState(blogs);
  const [resultArticleList, setResultArticleList] = useState(
    sliceByNumber(blogs, paginationPerPage)
  );
  //記事が存在しない場合のエラー
  useEffect(() => {
    !(resultArticleList.length > 0) &&
      errorPop("<span>記事は見つかりませんでした</span>");
  }, []);

  // {id:'f8yknsryw',name:"WEB"}のような形。
  // カテゴリを全て取得し
  const categoryList = useRef(
    categories.map((c) => {
      return { id: c.id, name: c.name };
    })
  );
  // console.log(jotaiTag);
  //
  const [listAdmin, setListAdmin] = useState(
    jotaiTag === undefined
      ? {
          tag: formatTag(null, "All"),
          page: 1,
        }
      : {
          tag: formatTag(categoryList, jotaiTag),
          page: /^([1-9]\d*|0)$/.test(jotaiPage) ? jotaiPage : 1,
        }
  );
  useEffect(() => {
    if (jotaiTag === undefined || jotaiPage === undefined) {
      setJotaiTag(`all`);
      setJotaiPage(1);
    }
  }, []);

  useEffect(() => {
    let categoriesCache = [];
    if (jotaiTag !== undefined || jotaiPage !== undefined) {
      categories.map((c) => {
        categoriesCache.push(c.name.toLowerCase());
      });
      categoriesCache.includes(jotaiTag)
        ? setTag(formatTag(categoryList, jotaiTag))
        : (() => {
            setTag(formatTag(null, "All"));
            setJotaiTag(formatTag(null, "All").id);
          })();

      setPage(/^([1-9]\d*|0)$/.test(jotaiPage) ? jotaiPage - 1 : 1);
      //errorPop

      if (
        !categoriesCache.includes(jotaiTag) &&
        jotaiTag.toLowerCase() !== "all"
      ) {
        errorPop("<span>パラメータの値が正しくありません。</span>");
      }

      if (!(resultArticleList.length > 0)) {
        articleNoneError.current = true;
      } else {
        articleNoneError.current = false;
      }
    }
  }, [jotaiTag, jotaiPage]);

  // accurateArticleList
  // ページやタグ変更時に一瞬だけundefindになる場合があり
  // その時何も表示されなくなってレイアウトが一瞬崩れるため
  // undefined以外の正しい記事情報のみ格納し表示させる
  const accurateArticleList = useRef();

  const blogList = useRef(blogs);

  const cardunitDom = useRef();
  const beforeCardUnitValue = useRef(0);
  //TODO:カテゴリでソートするようにする
  const sortBlogList = () => {
    let sortedArticleListResult = [];
    switch (tag.id) {
      case "all":
        sortedArticleListResult = blogList.current;
      default:
        blogList.current.map((b) => {
          if (b.category.id.includes(tag.id)) {
            sortedArticleListResult.push(b);
          }
        });
    }
    setSortedArticleList(sortedArticleListResult);
    setResultArticleList(
      sliceByNumber(sortedArticleListResult, paginationPerPage)
    );
  };

  //opacity:0初期値を1にするアニメーション。
  useEffect(() => {
    Array.from(document.getElementsByClassName("cardunit")).forEach((d) => {
      d.classList.add("articleAppearAnimation");
    });
  }, []);
  //タグ変更時の再描画
  useEffect(() => {
    setPage(0);
  }, [jotaiTag]);
  useEffect(() => {
    //DOM情報を更新する
    cardunitDom.current = Array.from(
      document.getElementsByClassName("cardunit")
    );
    //cardunitを消してからソートを開始する
    new Promise((resolveCompleteAnim) => {
      Array.from(document.getElementsByClassName("cardunit")).forEach(
        (c, idx) => {
          c.classList.remove("articleAppearAnimation");
        }
      );
      setTimeout(() => {
        sortBlogList();
        resolveCompleteAnim();
      }, cardunitTransitionDelayDiff * cardunitDom.current.length);
    }).then(() => {
      setListAdmin({ page: page, tag: tag });
    });
  }, [page, tag]);
  //cardunitのDOM情報を更新し見える状態にするクラスを付与
  useEffect(() => {
    cardunitDom.current = Array.from(
      document.getElementsByClassName("cardunit")
    );
    setTimeout(() => {
      Array.from(document.getElementsByClassName("cardunit")).forEach((c) => {
        c.classList.add("articleAppearAnimation");
      });
    }, cardunitTransitionDelayDiff * (beforeCardUnitValue.current - 1));
    beforeCardUnitValue.current = cardunitDom.current.length;
    if (!(resultArticleList.length > 0)) {
      articleNoneError.current = true;
    } else {
      articleNoneError.current = false;
    }
    // console.log(articleNoneError.current);
    if (articleNoneError.current) {
      errorPop("<span>記事は見つかりませんでした。タグ名を確認するのだ</span>");
    }
    // console.log(sortedArticleList);
  }, [sortedArticleList, resultArticleList]);

  return (
    <>
      <Seo
        title="HKTL - BLOG"
        description="ゆったりてっくぶろぐ"
        keywords="web,3d,js,react,next,threejs,blender,デジタルファブリケーション,fab"
        url="https://harekyon.com/blogs/"
      />
      <Header></Header>
      <MainWrap>
        <FieldMain>
          <SectionTitle>BLOG LIST</SectionTitle>
          <BlogMainContent>
            <Breadcrumb breadcrumb={breadcrumb}></Breadcrumb>
            <TagList tag={listAdmin.tag}>
              <TagUnit
                tag={listAdmin.tag}
                setTag={setTag}
                setPage={setPage}
                setJotaiTag={setJotaiTag}
                setJotaiPage={setJotaiPage}
                inputId="All"
              >
                All
              </TagUnit>

              {categoryList.current.map((c, idx) => {
                return (
                  <TagUnit
                    categoryList={categoryList}
                    key={idx}
                    tag={listAdmin.tag}
                    setTag={setTag}
                    setPage={setTag}
                    setJotaiTag={setJotaiTag}
                    setJotaiPage={setJotaiPage}
                    inputId={c.name}
                  >
                    {c.name}
                  </TagUnit>
                );
              })}
            </TagList>
            <div className={`${styles["main--card-list"]} `}>
              <CardList>
                {/* divで隠しているこの仕様はソート中の不自然な描画を見せないようにするため */}
                <div
                  css={css`
                    display: none;
                  `}
                >
                  {resultArticleList[listAdmin.page] !== undefined ? (
                    (accurateArticleList.current = resultArticleList[
                      listAdmin.page
                    ].map((b, idx) => {
                      return (
                        <CardUnit
                          key={idx}
                          id={b.id}
                          title={b.title}
                          thumbnail={b.thumbnail.url}
                          publishedAt={formatDateDot(
                            convertDateStringToDate(b.createdAt)
                          )}
                          category={b.category?.name}
                          cardunitTransitionDelayDiff={
                            cardunitTransitionDelayDiff
                          }
                          delayAnimValue={idx}
                        />
                      );
                    }))
                  ) : (
                    <>run</>
                  )}
                </div>
                {resultArticleList.length > 0
                  ? accurateArticleList.current
                  : (() => {
                      // errorPop("<span>記事は見つかりませんでした</span>");
                      return <>NOT FOUND m(__)m</>;
                    })()}
              </CardList>
            </div>
            <Pagination
              resultArticleList={resultArticleList}
              paginationPerPage={paginationPerPage}
              page={page}
              setPage={setPage}
              setJotaiPage={setJotaiPage}
            ></Pagination>
            <div className={styles["main--side"]}></div>
          </BlogMainContent>
        </FieldMain>
        <FieldSide>
          <SectionTitle>SIDE</SectionTitle>
          <div
            css={css`
              width: 100%;
              height: 100%;
              padding: 0 10px 10px;
              display: flex;
              flex-direction: column;
              row-gap: 10px;
            `}
          >
            <SidePanelProfile></SidePanelProfile>
          </div>
        </FieldSide>
      </MainWrap>
      <Footer />
      <div id="jsErrorPopWrap" class="errorPopWrap"></div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client.get({ endpoint: "blogs" });
  const categories = await client.get({ endpoint: "categories" });
  const poppreset = await client.get({ endpoint: "poppreset" });
  return {
    props: {
      blogs: data.contents,
      categories: categories.contents,
      poppreset: poppreset.contents,
    },
  };
};
