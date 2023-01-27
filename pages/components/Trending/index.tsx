import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import client from "../../../apollo-client";
import Ads from "../ads";
import ArticleCard from "../articleCard";
// import { FETCH_ARTICLES } from "../../../lib/queries";
import styles from "./trending.module.scss";

interface TrendingPropsType {
  trendingArticles: any;
}

const Trending: React.FC<TrendingPropsType> = ({ trendingArticles }) => {
  // const router = useRouter();
  const [articles, setArticles] = useState([]);
  // const handleClick = (href: string) => {
  //   router.push(href);
  // };
  useEffect(() => {
    if (trendingArticles?.articles?.data) {
      setArticles(trendingArticles?.articles?.data);
    }
  }, [trendingArticles]);

  // }
  //   console.log("trendingArticles ======>", trendingArticles);

  // const Trending = () => {

  const blogArray = [1, 2, 3];
  return articles.length ? (
    <div  className="auto-scroll" id="auto-scroll">
      {/* <div className={styles.adds}>
                <div className="add1">
                </div>
            </div>
            <div className={styles.adds1}>
                <div className="add1">
                </div>
            </div> */}
      <div className="container">
        <div>
          <h1 className={styles.Heading}>Trending Blogs</h1>
        </div>

        <div className="row row-cols-1 row-cols-md-2 g-4 mt-3 ">
          {articles.map((blog, index) => (
            <ArticleCard article={blog} key={index} />
            // <>
            //   <div className="col" key={index}>
            //     <div className="card">
            //       <img
            //         src="https://picsum.photos/1100/500"
            //         className="card-img-top"
            //         alt="..."
            //       />
            //       <div className="card-body">
            //         <h5 className="card-title">Card title</h5>
            //         <p className="card-text">
            //           This is a longer card with supporting text below as a
            //           natural lead-in to additional content. This content is a
            //           little bit longer.
            //         </p>
            //       </div>
            //       <div className="p-3">
            //         <a onClick={() => handleClick("blog1")}>Read More {">>"}</a>
            //       </div>
            //     </div>
            //   </div>
            // </>
          ))}
        </div>

        {/* <Ads /> */}

        {/* <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/1100/400" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card">
                        <img src="https://picsum.photos/1100/400" className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">Card title</h5>
                            <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        </div>
                    </div>
                </div>
            </div> */}
      </div>
    </div>
  ) : null;
};

// export async function getStaticProps({}) {
//   const { data } = await client.query({
//     query: FETCH_ARTICLES,
//     variables: { filters: { isTrending: { eq: true } } },
//   });
//   console.log("data -===>", data);

//   return {
//     props: { trendingArticles: data },
//     revalidate: 1,
//   };
// }

export default Trending;
