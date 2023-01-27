import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Ads from "../ads";
import ArticleCard from "../articleCard";
import styles from "./topvisited.module.scss";

interface TopVisitedPropsType {
  topVisitedArticles: any;
}

const TopVisited: React.FC<TopVisitedPropsType> = ({ topVisitedArticles }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    if (topVisitedArticles?.articles?.data) {
      setArticles(topVisitedArticles?.articles?.data);
    }
  }, [topVisitedArticles]);

  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };

  const blogArray = [1, 2, 3, 4, 5];
  return articles.length ? (
    <div className="container">
      <div className={`mt-5 ${styles.mainblog}`}>
        {/* <div className="text-center"> */}
        <div>
          <h1>Top Visited</h1>
        </div>
        <div className={`h-100 row row-cols-1 row-cols-md-2 g-4 ${styles.cardstyale}`}>
        {/* <div className={`card-group row-cols-1 row-cols-md-2 g-4 ${styles.cardstyale}`}> */}
            {articles.map((blog, index) => (
              <ArticleCard article={blog} key={index} />
              // <>
              //   <div className="col">
              //     <div className="card img-wrapper">
              //       <img
              //         src="https://picsum.photos/1000/500"
              //         className="card-img-top inner-img"
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
        {/* <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="card-group">
            {articles.map((blog, index) => (
              <ArticleCard article={blog} />
              // <>
              //   <div className="col">
              //     <div className="card img-wrapper">
              //       <img
              //         src="https://picsum.photos/1000/500"
              //         className="card-img-top inner-img"
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
          </div> */}

        {/* <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/1100/500" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className='p-3'>
                <a onClick={() => handleClick("/")}>Read More {">>"}</a>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/1100/500" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className='p-3'>
                <a onClick={() => handleClick("/")}>Read More {">>"}</a>
              </div>
            </div>
          </div>
        </div>
        <Ads />
        <div className="row row-cols-1 row-cols-md-2 g-4">
          <div className="col">
            <div className="card">
              <img src="https://picsum.photos/1100/400" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
              <div className='p-3'>
                <a onClick={() => handleClick("/")}>Read More {">>"}</a>
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
              <div className='p-3'>
                <a onClick={() => handleClick("/")}>Read More {">>"}</a>
              </div>
            </div>
          </div>
        </div> */}
        {/* Full Blog Card */}
        {/* <div className={`mt-5 p-5 ${styles.blog}`}>
          <div className={styles.card}>
            <h3 className='mb-4'>How to Tax Save for FY 2021-22 – Download Tax Planning ebook</h3>
            <ul>
              <li><a href="#">budget</a></li>
              <li><a href="#">,Calculators</a></li>
              <li><a href="#">,blogs</a></li>
              <li><a href="#">,videoblog</a></li>
              <li><a href="#">,loveblog</a></li>
            </ul>
          </div>
          <div className='mt-4'>
            <img src="https://picsum.photos/1100/500" alt="" className='img-fluid' />
          </div>
          <div className={`mt-4 ${styles.text}`}>
            <p>
              How to Tax Save Income for Salaried and Professionals for FY 2021-22? – a question that is often asked by my friends, family and blog readers. This is expected mainly due to the complicated income tax structure. There are multiple tax sections and every year a few more are added or modified. It’s hard to …
            </p>
          </div>
          <div>
            <a onClick={() => handleClick("/")}>Read More {">>"}</a>
          </div>
        </div> */}
      </div>
    </div>
  ) : null;
};

export default TopVisited;
