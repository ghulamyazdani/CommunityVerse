import "../styles/globals.scss";
import "../styles/Home.module.scss";
import "../styles/blogpage.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
