import "tailwindcss/tailwind.css";
import Head from "next/head";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return <>
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=DM+Sans:wght@700&family=Inter:wght@400;500&display=swap" rel="stylesheet" />
    </Head>
    <Component {...pageProps} />
  </>;
}

export default MyApp;
