import HeadGroup from "@/components/Seo";
import Image from "next/image";
import styles from "@/styles/Chokoz.module.scss";

// import { client } from "../libs/client";
import { client_unit } from "../../libs/client";

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

const breadcrumb = [
  { name: "HOME", href: "https://www.harekyon.com/" },
  { name: "BLOG", href: "/blogs" },
];

const cardunitTransitionDelayDiff = 50;
const paginationPerPage = 12;

const initJotaiTag = atomWithHash(`tag`);
const initJotaiPage = atomWithHash(`page`);

export default function Blogs({ blogs, categories, poppreset }) {
  return (
    <>
      <div
        css={css`
          position: relative;
        `}
      >
        <h1
          css={css`
            position: sticky;
            top: 0;
          `}
        >
          aaa
        </h1>
        <p>
          てきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすとてきすと
        </p>
        <div
          css={css`
            height: 200vh;
            background: red;
          `}
        ></div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await client_unit.get({ endpoint: "blogs" });
  const categories = await client_unit.get({ endpoint: "categories" });
  return {
    props: {
      blogs: data.contents,
      categories: categories.contents,
    },
  };
};
