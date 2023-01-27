import React from "react";
import client from "../../apollo-client";
import { FETCH_ALL_CATEGORIES } from "../../lib/queries";
import AboutUsPage from "../components/AboutUsPage";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import styles from "../components/TopVisited/topvisited.module.scss";

interface AboutUsProps {
  categories: any;
}

const AboutUs: React.FC<AboutUsProps> = ({ categories }) => {
  return (
    <>
      <Navbar categories={categories} />
      <div className="container">
        <div className={`${styles.mainblog}`}>
           <AboutUsPage />
        </div>
      </div>
      <Footer allCategories={categories} />
    </>
  );
};

export const getStaticProps = async () => {
  const [categoriesRes] = await Promise.all([
    client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { sort: ["id:asc"] },
    }),
  ]);

  return {
    props: {
      categories: categoriesRes.data?.categories?.data,
    },
    revalidate: 10,
  };
};

export default AboutUs;
