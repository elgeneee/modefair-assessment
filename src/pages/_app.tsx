import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      {/* <Banner /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}
