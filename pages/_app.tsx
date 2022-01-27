import Header from "../components/Header";
import "../styles/globals.scss";
import "../styles/Home.module.scss";
import "../styles/blogpage.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
