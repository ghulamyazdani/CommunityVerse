import "../styles/globals.scss";
import "../styles/Home.module.scss";
import "../styles/blogpage.scss";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import "../styles/footer.scss";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
