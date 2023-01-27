import React from "react";
import client from "../../apollo-client";
import { FETCH_ALL_CATEGORIES } from "../../lib/queries";
import DesclaimerInvestmest from "../components/DesclaimerInvestmest";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import styles from "../components/TopVisited/topvisited.module.scss";

interface DesclaimerProps {
  categories: any;
}

const Desclaimer: React.FC<DesclaimerProps> = ({ categories }) => {
  return (
    <>
      <Navbar categories={categories} />
      <div className="container">
        <div className={`${styles.mainblog}`}>
          <DesclaimerInvestmest />
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
      categories: categoriesRes?.data?.categories?.data,
    },
    revalidate: 10,
  };
};

export default Desclaimer;
