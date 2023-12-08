import Head from "next/head";

export default function Seo({
  title = "harekyon.com",
  description = "くりえいしょん",
  keywords = "web,3d,js,react,next,threejs,blender,デジタルファブリケーション,fab",
  url = "https://harekyon.com",
  type = "website",
  image = "https://harekyon.com/ogp.jpg",
}) {
  return (
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />

      <title key="title">{title}</title>
      <meta name="description" content={description} />
      <meta property="og:site_name" content={title} />
      <meta property="og:title" content={title} />
      <meta property="og:type" content={type} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={image} />
      <meta property="og:locale" content="ja_JP" />
      <meta name="twitter:card" content="summary" />
      <meta name="keywords" content={keywords} />
    </Head>
  );
}
