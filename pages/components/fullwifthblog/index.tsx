import React from "react";
import styles from "./fullwidthblog.module.scss";

const FullWidthBlog = () => {
  return (
    <div>
      <div className={`p-5 ${styles.blog}`}>
        <div className={styles.card}>
          <h3 className="mb-4">
            Income Tax Calculator India in Excel★ (FY 2021-22) (AY 2022-23)
          </h3>
          <ul>
            <li>
              <a href="#">budget</a>
            </li>
            <li>
              <a href="#">,Calculators</a>
            </li>
            <li>
              <a href="#">,blogs</a>
            </li>
            <li>
              <a href="#">,videoblog</a>
            </li>
            <li>
              <a href="#">,loveblog</a>
            </li>
          </ul>
        </div>
        <div className="mt-4">
          <img
            src="https://picsum.photos/1100/500"
            alt=""
            className="img-fluid"
          />
        </div>
        <div className={`mt-4 ${styles.text}`}>
          <p>
            Download the Excel based Income Tax Calculator India for FY 2020-21
            (AY 2021-22). This compares the New Vs Old Tax regime and NRIs can
            also use this
          </p>
        </div>
      </div>
    </div>
  );
};

export default FullWidthBlog