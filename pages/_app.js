import "@/styles/globals.scss";
import "@/styles/fonts.scss";
import "../styles/highlight/styles/atom-one-dark.min.css";
import { Provider as JotaiProvider } from "jotai";
import Script from "next/script";
import NextNProgress from "nextjs-progressbar";
import NextTopLoader from "nextjs-toploader";
import Layout from "@/components/layout/Layout";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Layout>
        {/* <!-- Google tag (gtag.js) --> */}
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="gtag-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
           window.dataLayer = window.dataLayer || [];
           function gtag(){dataLayer.push(arguments);}
           gtag('js', new Date());
 
           gtag('config', '${process.env.GA_MEASUREMENT_ID}');
           `,
          }}
        />
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
