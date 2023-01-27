import React from "react";
import client from "../../apollo-client";
import Ads from "../components/ads";
import Footer from "../components/Footer";
import FullWidthArticleCard from "../components/fullArticleCard";
import Navbar from "../components/NavBar";
import { FETCH_ALL_CATEGORIES, FETCH_ARTICLES } from "../../lib/queries";
import styles from "../components/TopVisited/topvisited.module.scss";

interface AllBlogsPageProps {
  allArticles: any;
  categories: any;
}
const AllBlogsPage: React.FC<AllBlogsPageProps> = ({
  allArticles = [],
  categories,
}) => {
  return (
    <>
      <Navbar categories={categories} />
      <div className="container">
        <div className={`${styles.mainblog}`}>
          {allArticles.map((article: any) => (
            <>
              <FullWidthArticleCard article={article} />
              {/* <Ads /> */}
            </>
          ))}
        </div>
      </div>
      <Footer allCategories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const [articlesRes, categoriesRes] = await Promise.all([
    client.query({
      query: FETCH_ARTICLES,
      variables: { sort: ["createdAt:desc"], pagination: { pageSize: 100000 } },
    }),
    client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { sort: ["id:asc"] },
    }),
  ]);

  return {
    props: {
      allArticles: articlesRes.data?.articles?.data,
      categories: categoriesRes.data?.categories?.data,
    },
    revalidate: 10,
  };
};

export default AllBlogsPage;
