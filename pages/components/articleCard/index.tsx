import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getStrapiMediaURL } from "../../../lib/helpers/utils";
import styles from "./article.module.scss";
interface ARticleCardProps {
  article: any;
}

const ArticleCard: React.FC<ARticleCardProps> = ({ article }) => {
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };
  return (
  <Link href={article?.attributes?.slug
    ? `article/${article?.attributes?.slug}`
    : "/"}>
    <div className={`col ${styles.linktag}`}>
      <div className="card h-100">
        <img
          // src="image/Cover Image for all blog/4.jpg"
          src={getStrapiMediaURL(article?.attributes?.coverImage)}
          className="card-img-top"
          alt="..."
        />
        <div className="card-body">
          <h5 className="card-title">{article?.attributes?.title}</h5>
          <p className={`card-text ${styles.description}`}>{article?.attributes?.description} </p>
          <div>
            <span role={"button"}>
              <a 
                className={styles.readmore}
                href={
                  article?.attributes?.slug ? `article/${article?.attributes?.slug}` : "/"
                }
                // onClick={() =>
                //   handleClick(
                //     article?.attributes?.slug
                //       ? `article/${article?.attributes?.slug}`
                //       : "/"
                //   )
                // }
              >
                Read More {">>"}
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  </Link>

    // <div className={`col ${styles.main} pl-sm-4 mt-4 mb-4`}>
    //   <div className={`card  ${styles.cardContainer}`}>
    //     <img
    //       src={getStrapiMediaURL(article?.attributes?.coverImage)}
    //       className="card-img-top"
    //       alt="..."
    //     />
    //     <div className="card-body">
    //       <h5 className="card-title">{article?.attributes?.title}</h5>
    //       <div className={styles.content}>
    //       <p className={`card-text ${styles.description}`}>
    //         {article?.attributes?.description}
    //       </p>
    //       </div>
    //     </div>
    //     <span className="p-3" role={"button"}>
    //       {/* TODO: Add Blog Link */}
    //       <a
    //         onClick={() =>
    //           handleClick(
    //             article?.attributes?.slug
    //               ? `article/${article?.attributes?.slug}`
    //               : "/"
    //           )
    //         }
    //       >
    //         Read More {">>"}
    //       </a>
    //     </span>
    //   </div>
    // </div>
  );
};

export default ArticleCard;
