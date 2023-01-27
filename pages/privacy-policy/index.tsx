import React from "react";
import client from "../../apollo-client";
import { FETCH_ALL_CATEGORIES } from "../../lib/queries";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import PrivacyPolicyPage from "../components/PrivacyPolicyPage";
import styles from "../components/TopVisited/topvisited.module.scss";

interface PrivacyPolicyProps {
  categories: any;
}

const PrivacyPolicy: React.FC<PrivacyPolicyProps> = ({ categories }) => {
  return (
    <>
      <Navbar categories={categories} />
      <div className="container">
        <div className={`${styles.mainblog}`}>
          <PrivacyPolicyPage />
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

export default PrivacyPolicy;
