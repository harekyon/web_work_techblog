import HeadGroup from "@/components/Seo";
import Image from "next/image";
import styles from "@/styles/Blogs.module.scss";

// import { client } from "../libs/client";
import { client } from "../libs/client";

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
import { useRouter } from "next/router";
import NextNProgress from "nextjs-progressbar";
import Window from "@/components/atomic/Window";

// import { errorPop } from "@/libs/hp_assets";

const breadcrumb = [{ name: "HOME", href: "/" }];

export default function Blogs({ blogs, categories }) {
  //pageが読み込まれたか判定
  const [isMounted, setIsMounted] = useState(false);

  const paginationPerPage = 6;
  const sliceByNumber = (array, number) => {
    const length = Math.ceil(array.length / number);
    return new Array(length)
      .fill()
      .map((_, i) => array.slice(i * number, (i + 1) * number));
  };
  const router = useRouter();
  const query = router.query;
  //カテゴリーのリストを呼び出しておく
  const categoryList = useRef(
    categories.map((c) => {
      return { id: c.id, name: c.name };
    })
  );

  //出力される記事の状態をまとめる
  const [resultArticleList, setResultArticleList] = useState(
    sliceByNumber(blogs, paginationPerPage)
  );
  const cardunitDom = useRef();
  const beforeCardUnitValue = useRef(0);
  const errorResult = useRef(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    console.log(isError);
  }, [isError]);

  useEffect(() => {
    if (router.isReady) {
      errorResult.current = false;
      if (Object.keys(query).length === 0) {
        //   //初期値
        router.replace({ query: { tag: "All", page: 1 } });
      } else {
        new Promise((resolve, reject) => {
          checkKey(resolve, reject);
        })
          .then(() => {
            console.log("correct");
          })
          .catch(() => {
            new Promise((resolve, reject) => {
              if (resultArticleList.length === 0) {
                errorPop("<span>このカテゴリの記事はありません</span>");
                errorResult.current = true;
                new Promise((resolve) => {
                  sortBlogList(resolve, "All");
                }).then(() => {
                  router.push({ query: { tag: "All", page: 1 } });
                  reject();
                });
                return;
              } else if (resultArticleList.length < query.page) {
                errorPop(
                  `<span>無効なパラメータです(${query.tag}カテゴリは${resultArticleList.length}が最大です)</span>`
                );
                errorResult.current = true;
                router.replace({ query: { tag: query.tag, page: 1 } });
                reject();
              }
              if (query.page !== undefined && query.page.match(/[^0-9]/)) {
                errorPop(
                  "<span>無効なパラメータです(数字以外が使われている)</span>"
                );
                errorResult.current = true;
                router.replace({ query: { tag: query.tag, page: 1 } });
                reject();
              }

              let tagNameInvalid = true;
              categoryList.current.map((c) => {
                c.name.toLowerCase() === query.tag.toLowerCase() &&
                  (tagNameInvalid = false);
              });
              query.tag.toLowerCase() === "all" && (tagNameInvalid = false);
              if (tagNameInvalid) {
                errorPop(`<span>カテゴリ "${query.tag}" は存在しません</span>`);
                errorResult.current = true;
                router.replace({ query: { tag: "All", page: 1 } });
                reject();
              }
              setTimeout(() => {
                resolve();
              }, 1000);
            })
              .then(() => {
                console.log("success!");
              })
              .catch(() => {
                console.log("reject!");
              });

            // console.log(errorResult.current);
            if (errorResult.current) {
              setIsError(true);
            } else {
              setIsError(false);
            }
          });
      }
      function checkKey(resolve, reject) {
        let correctKeyResult = { tag: false, page: false };
        const checkTargetKeyArray = ["tag", "page"];
        Object.keys(query).map((key) => {
          if (checkTargetKeyArray.includes(key)) {
            correctKeyResult[key] = true;
          }
        });
        let formatKeyBool = Object.values(correctKeyResult);
        console.log(checkTargetKeyArray);
        let invalidResult = false;
        formatKeyBool.map((m) => {
          if (m === false) {
            errorPop("<span>無効なパラメータです</span>");

            router.replace({ query: { tag: "All", page: 1 } });
            invalidResult = true;
            return;
          }
        });
        invalidResult ? resolve() : reject();
      }
    }
  }, [router, query]);

  function sortBlogList(sortBlogListResolve, tagName) {
    let sortedArticleListResult = [];
    console.log(tagName);
    switch (tagName) {
      case "All":
        sortedArticleListResult = blogs;
        break;
      default:
        blogs.map((b) => {
          if (b.category.name.includes(tagName)) {
            sortedArticleListResult.push(b);
          }
        });
        break;
    }

    setResultArticleList(
      sliceByNumber(sortedArticleListResult, paginationPerPage)
    );
    sortBlogListResolve(
      sliceByNumber(sortedArticleListResult, paginationPerPage)
    );
  }
  // useEffect(() => {
  //   // new Promise((resolve) => {
  //   //   cardDisappearAnimation(resolve);
  //   // }).then(() => {
  //   //   cardAppearAnimation();
  //   // });
  //   cardAppearAnimation(resultArticleList);
  // }, [router.query.tag, router.query.page]);

  useEffect(() => {
    // new Promise((resolve) => {
    //   cardDisappearAnimation(resolve);
    // }).then(() => {
    //   cardAppearAnimation();
    // });
    const mainElement = document.getElementsByTagName("main")[0];
    mainElement.classList.remove("transition-anim");
    mainElement.classList.add("anim-main");
    console.log(
      `router.query.tag:${router.query.tag} router.query.page:${router.query.page}`
    );
    new Promise((resolve) => {
      console.log(router.query.tag);
      if (router.query.tag !== undefined) {
        sortBlogList(resolve, router.query.tag);
      }
    }).then(() => {
      cardAppearAnimation(resultArticleList);
    });
  }, [router.query.tag, router.query.page]);

  function cardDisappearAnimation(resolve, reject) {
    /**
     * ページ遷移時のアニメーション(2/5)
     * removeEventClick：このタイミングでクリックイベント削除関数を実行。
     * ソート前のクリックイベントを削除したいため、
     */
    removeEventClick();
    // console.log(Array.from(document.getElementsByClassName("cardunit")).length);
    Array.from(document.getElementsByClassName("cardunit")).forEach(
      (d, idx) => {
        setTimeout(() => {
          d.classList.remove("articleAppearAnimation");
          if (
            idx + 1 ===
            Array.from(document.getElementsByClassName("cardunit")).length
          ) {
            const whatsnew = document.getElementById("whatsnew");
            whatsnew.classList.remove(styles["fieldMainWrapAnim"]);
            setTimeout(() => {
              resolve();
            }, 150);
          }
        }, 80 * idx);
      }
    );
    if (Array.from(document.getElementsByClassName("cardunit")).length === 0) {
      resolve();
    }
  }
  function cardAppearAnimation(result) {
    /**
     * ページ遷移時のアニメーション(3/5)
     * addEventClick：このタイミングでクリックイベント追加関数を実行
     */
    addEventClick();
    cardunitDom.current = Array.from(
      document.getElementsByClassName("cardunit")
    );
    Array.from(document.getElementsByClassName("cardunit")).forEach(
      (c, idx) => {
        setTimeout(() => {
          c.classList.add("articleAppearAnimation");

          if (
            idx + 1 ===
            Array.from(document.getElementsByClassName("cardunit")).length
          ) {
            const whatsnew = document.getElementById("whatsnew");
            const jsErrorPopWrap = document.getElementById("jsErrorPopWrap");
            setTimeout(() => {
              whatsnew.classList.add(styles["fieldMainWrapAnim"]);
            }, 100);
          }
        }, 100 * idx);
      }
    );
    beforeCardUnitValue.current = cardunitDom.current.length;
    // console.log(resultArticleList.length);
    let counter = 0;
    blogs.map((b) => {
      if (b.category.name.includes(result.tag)) {
        ++counter;
      }
    });
  }

  /**
   * ページ遷移時のアニメーション(4/5)
   * このuseEffectでページ遷移時のアニメーションを実行
   * 5/5はglobal.scssの最後の方に記述
   */
  useEffect(() => {
    setIsMounted(true);
  }, []);
  useEffect(() => {}, []);

  /**
   * ページ遷移時のアニメーション(1/5)
   *  clickFunc：クリック時の処理
   *  addEventClick：クリックイベントを追加
   * removeEventClick：クリックイベントを削除
   */
  function clickFunc(e) {
    const mainElement = document.getElementsByTagName("main")[0];
    e.preventDefault();
    console.log("start");
    if (e.target.href !== undefined) {
      mainElement.classList.add("transition-anim");
      document.getElementsByTagName("main")[0].classList.remove("anim-main");
      setTimeout(() => {
        console.log("end");
        router.push(e.target.href);
      }, 500);
    }
  }
  function addEventClick() {
    const buttonElements = document.getElementsByTagName("a");
    Array.from(buttonElements).map((b, idx) => {
      b.addEventListener("click", clickFunc);
    });
  }
  function removeEventClick() {
    const buttonElements = document.getElementsByTagName("a");
    Array.from(buttonElements).map((b, idx) => {
      b.removeEventListener("click", clickFunc);
    });
  }

  return (
    <>
      <Seo
        title="HKTL - BLOG"
        description="ゆったりてっくぶろぐ"
        keywords="web,3d,js,react,next,threejs,blender,デジタルファブリケーション,fab"
        url="https://harekyon.com/"
      />

      <FieldMain>
        <Window id="whatsnew">
          <SectionTitle>WHAT'S NEW</SectionTitle>
          <BlogMainContent>
            <NextNProgress
              color="#29D"
              startPosition={0.3}
              stopDelayMs={200}
              height={3}
              showOnShallow={true}
            />
            <Breadcrumb
              cssOverrides={css`
                margin: 0;
                padding-left: 30px;
              `}
              breadcrumb={breadcrumb}
            ></Breadcrumb>
            <TagList>
              <TagUnit
                cardDisappearAnimation={cardDisappearAnimation}
                cardAppearAnimation={cardAppearAnimation}
                sortBlogList={sortBlogList}
                setResultArticleList={setResultArticleList}
                tag={router.query.tag}
                router={router}
                name="All"
              >
                All
              </TagUnit>

              {categoryList.current.map((c, idx) => {
                // console.log(paramState.tag);
                return (
                  <TagUnit
                    cardDisappearAnimation={cardDisappearAnimation}
                    cardAppearAnimation={cardAppearAnimation}
                    sortBlogList={sortBlogList}
                    setResultArticleList={setResultArticleList}
                    categoryList={categoryList}
                    key={idx}
                    tag={router.query.tag}
                    router={router}
                    name={c.name}
                  >
                    {c.name}
                  </TagUnit>
                );
              })}
            </TagList>
            <div className={`${styles["main--card-list"]} `}>
              <CardList>
                {/* divで隠しているこの仕様はソート中の不自然な描画を見せないようにするため */}
                {/* <div
                // css={css`
                //   display: none;
                // `}
                > */}
                {resultArticleList[router?.query?.page - 1]?.map((b, idx) => {
                  if (b.thumbnail?.url) {
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
                        delayAnimValue={idx}
                      />
                    );
                  } else {
                    console.log("else");
                    return (
                      <CardUnit
                        key={idx}
                        id={b.id}
                        title={b.title}
                        thumbnail={b.thumbnail?.url}
                        publishedAt={formatDateDot(
                          convertDateStringToDate(b.createdAt)
                        )}
                        category={b.category?.name}
                        // cardunitTransitionDelayDiff={
                        //   cardunitTransitionDelayDiff
                        // }
                        delayAnimValue={idx}
                      />
                    );
                  }
                })}
                {/* </div> */}
              </CardList>
            </div>
            <Pagination
              resultArticleList={resultArticleList}
              paginationPerPage={paginationPerPage}
              cardDisappearAnimation={cardDisappearAnimation}
              cardAppearAnimation={cardAppearAnimation}
            ></Pagination>
            <div className={styles["main--side"]}></div>
          </BlogMainContent>
        </Window>
        <Window>
          <SectionTitle>THREEJS 研究所</SectionTitle>
          <div
            css={css`
              width: 100%;
              height: 300px;
              display: flex;
              align-items: center;
              justify-content: center;
              padding: 10px;
            `}
          >
            <div
              css={css`
                width: calc(100% - 20px);
                height: calc(100% - 20px);
                background: #00000e99;

                display: flex;
                align-items: center;
                justify-content: center;
              `}
            >
              COMMING SOON
            </div>
          </div>
        </Window>
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
