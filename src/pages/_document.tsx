import { Html, Head, Main, NextScript } from "next/document";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <Banner />
      <body>
        <Main />
        <NextScript />
      </body>
      <Footer />
    </Html>
  );
}
