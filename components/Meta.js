// import { prodHost } from "../features/core";

export default function Meta({
  ogTitleHead = "HKDC",
  ogTitle = "はれぽこてっくろぐ",
  isUseSiteName = false,
  ogSiteName = "はれぽこてっくろぐ",
  ogDescription = "WEBとか3Dとか",
  ogKeywords = "web,3d,js,react,next,threejs,blender,デジタルファブリケーション,fab",
  ogImgPath = "/example_thumbnail2.png",
  ogType = "website",
  ogUrl = "/",
}) {
  return (
    <>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0"
      ></meta>
      <meta http-equiv="X-UA-Compatible" content="IE=edge"></meta>
      <meta charset="utf-8"></meta>
      {/* <title>
        {ogTitleHead} - {ogTitle}
      </title> */}
      {isUseSiteName ? (
        <meta property="og:site_name" content={"HKTL - " + { ogTitle }}></meta>
      ) : (
        <meta property="og:title" content={"HKTL - " + { ogTitle }}></meta>
      )}
      <meta property="og:description" content={ogDescription}></meta>
      <meta property="og:type" content={ogType}></meta>
      <meta name="keywords" content={ogKeywords}></meta>
      <meta property="og:url" content={ogUrl}></meta>
      <meta property="og:image" content={ogImgPath}></meta>
      <link rel="icon" href={`/favicon.ico`}></link>
    </>
  );
}
