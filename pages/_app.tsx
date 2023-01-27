import "../styles/globals.css";
import type { AppProps } from "next/app";
import "bootstrap/dist/css/bootstrap.css";
import Script from "next/script";
import { ApolloProvider } from "@apollo/client";
import client from "../apollo-client";
import Navbar from "./components/NavBar";
import Footer from "./components/Footer";
import Seo from "./components/seo";
import { useRouter } from "next/router";
import { useEffect } from "react";
import * as gtag from "../lib/gtag";
// import { FETCH_ALL_CATEGORIES } from "../lib/queries";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const seo = {
    metaTitle: "Personal Finance Ideas",
    metaDescription: "Best investment ideas for personal finance.",
    shareImage: "https://streetofinvestment.com/image/logo.png",
  };
  const router = useRouter();
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      if (process.env.NEXT_PUBLIC_NODE_ENV == "prod") {
        gtag.pageview(url);
      }
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    router.events.on("hashChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
      router.events.off("hashChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <>
      {process.env.NEXT_PUBLIC_NODE_ENV == "prod" && (
        <>
          <Script
            strategy="afterInteractive"
            src={`https://www.googletagmanager.com/gtag/js?id=G-FQ34EFWTZE`}
          />
          <Script
            id="gtag-init"
            strategy="afterInteractive"
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-FQ34EFWTZE', {
              page_path: window.location.pathname,
            });
          `,
            }}
          />
        </>
      )}
      <Script
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
        crossOrigin="anonymous"
      />
      <Script
        async={true}
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-5555291567829736"
        crossOrigin="anonymous"
      />
      <ApolloProvider client={client}>
        {/* <Navbar /> */}
        <Seo seo={seo} />
        <Component {...pageProps} />
        {/* <Footer /> */}
      </ApolloProvider>
    </>
  );
};

export default MyApp;
