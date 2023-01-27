import { useRouter } from "next/router";
import React from "react";
import client from "../../apollo-client";
import Ads from "../components/ads";
import Footer from "../components/Footer";
import FullWidthArticleCard from "../components/fullArticleCard";
import Navbar from "../components/NavBar";
import { FETCH_ALL_CATEGORIES, FETCH_ARTICLES } from "../../lib/queries";
import styles from "../components/TopVisited/topvisited.module.scss";
import Seo from "../components/seo";

interface CategoryPageProps {
  articles: any[];
  categories: any;
  category: any;
}

const CategoryPage: React.FC<CategoryPageProps> = ({
  articles = [],
  categories,
  category,
}) => {
  const seo = {
    metaTitle: `${category} Blogs`,
    metaDescription: `Blogs for ${category}`,
  };
  return (
    <>
      <Navbar categories={categories} />
      <Seo seo={seo} />
      <div className="container">
        <div className={`${styles.mainblog}`}>
          {articles.map((article) => (
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

export const getStaticPaths = async () => {
  const categoryRes = await client.query({
    query: FETCH_ALL_CATEGORIES,
    variables: { sort: ["id:asc"] },
  });
  return {
    paths: categoryRes?.data?.categories?.data?.map((category: any) => ({
      params: {
        slug: category.attributes.slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  // const articlesRes = await client.query({
  //   query: FETCH_ARTICLES,
  //   variables: { filters: { categories: { slug: { eq: params.slug } } } },
  // });

  const [articlesRes, categoriesRes] = await Promise.all([
    client.query({
      query: FETCH_ARTICLES,
      variables: {
        filters: { categories: { slug: { eq: params.slug } } },
        pagination: { pageSize: 100000 },
      },
    }),
    client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { sort: ["id:asc"] },
    }),
  ]);
  const category = categoriesRes.data?.categories?.data?.find(
    (elem: any) => elem.attributes?.slug === params.slug
  );

  let newArray: any[] = [];
  category?.attributes?.blogOrders?.split(",").forEach((id: any) => {
    let obj = articlesRes.data?.articles?.data?.find(
      (blog: { id: any }) => blog.id === id
    );
    if (obj) {
      newArray.push(obj);
    }
  });

  const results = newArray.concat(
    articlesRes.data?.articles?.data.filter(
      (article: { id: any }) =>
        !newArray.some((category) => article.id === category.id)
    )
  );

  return {
    props: {
      articles: results,
      categories: categoriesRes.data?.categories?.data,
      category: category?.attributes?.name || "Investment",
    },
    revalidate: 10,
  };
};

export default CategoryPage;
