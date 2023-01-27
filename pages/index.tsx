import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";
// import blog4 from "./blog4";
import Navbar from "./components/NavBar";
import Trending from "./components/Trending";
import Footer from "./components/Footer";
import TopVisited from "./components/TopVisited";
import FAQ from "./components/Faq";
import SliderComponent from "./components/Slider";
import Ads from "./components/ads";
import { useQuery } from "@apollo/client";
import { FETCH_ALL_CATEGORIES, FETCH_ARTICLES } from "../lib/queries";
import client from "../apollo-client";
// import NewCard from "./components/NewCard";

interface HomePageProps {
  // allArticles: any;
  trendingArticles: any;
  topVisitedArticles: any;
  allCategories: any;
}

const Home: React.FC<HomePageProps> = ({
  // allArticles,
  trendingArticles,
  topVisitedArticles,
  allCategories,
}) => {
  // const router = useRouter();
  // const handleClick = (href: string) => {
  //   router.push(href);
  // };
  // console.log("allArticles", allArticles);
  // console.log("trendingArticles", trendingArticles);
  // console.log("topVisitedArticles", topVisitedArticles);
  return (
    <div className={styles.bgGray}>
      <Navbar categories={allCategories?.categories?.data} />
      {/* TODO: add content for slider */}
      <SliderComponent />
      {/* <Ads /> */}

      <Trending trendingArticles={trendingArticles} />
      {/* <Ads /> */}
      <TopVisited topVisitedArticles={topVisitedArticles} />
      {/* <Ads /> */}
      <FAQ />
      <Footer allCategories={allCategories.categories.data} />
    </div>
  );
};

export async function getStaticProps({}) {
  // const { data: allArticles } = await client.query({ query: FETCH_ARTICLES });
  // const { data: trendingArticles } = await client.query({
  //   query: FETCH_ARTICLES,
  //   variables: { filters: { isTrending: { eq: true } } },
  // });
  // const { data: topVisitedArticles } = await client.query({
  //   query: FETCH_ARTICLES,
  //   variables: { filters: { isTopVisited: { eq: true } } },
  // });

  const [
    // { data: allArticles },
    { data: trendingArticles },
    { data: topVisitedArticles },
    { data: allCategories },
  ] = await Promise.all([
    // client.query({ query: FETCH_ARTICLES }),
    client.query({
      query: FETCH_ARTICLES,
      variables: {
        filters: { isTrending: { eq: true } },
        pagination: { pageSize: 100000 },
        sort: ["isTrendingOrder:asc"],
      },
    }),
    client.query({
      query: FETCH_ARTICLES,
      variables: {
        filters: { isTopVisited: { eq: true } },
        pagination: { pageSize: 100000 },
        sort: ["isTopVisitedOrder:asc"],
      },
    }),
    client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { sort: ["id:asc"] },
    }),
  ]);
  return {
    props: {
      //  allArticles,
      trendingArticles,
      topVisitedArticles,
      allCategories,
    },
    revalidate: 10,
  };
}

export default Home;
