import type { AppProps } from "next/app";
// import Layout from "../src/layout";
import "../src/css/globals.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
