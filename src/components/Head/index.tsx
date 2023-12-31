import Head from "next/head";

export const HeadTitle = ({ title, description }) => {
  return (
    <Head>
      <title>{title} | zaiinhs.space</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
};
