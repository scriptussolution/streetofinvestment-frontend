import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { getStrapiMediaURL } from "../../../lib/helpers/utils";
import styles from "../TopVisited/topvisited.module.scss";
// import { marked } from 'marked'
interface FullWidthArticleCardProps {
  article: any;
}
const FullWidthArticleCard: React.FC<FullWidthArticleCardProps> = ({
  article,
}) => {
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };
  return (
    <Link
      href={
        article?.attributes?.slug
          ? `/article/${article?.attributes?.slug}`
          : "/"
      }
    >
      <div className={`mt-5 p-5 ${styles.blog}`}>
        <div className={styles.card}>
          <h3 className={`mb-4 ${styles.animateCharcter   }`}>{article?.attributes?.title}</h3>
        </div>
        <div className="mt-4">
          <img
            src={getStrapiMediaURL(article?.attributes?.coverImage)}
            alt=""
            className="d-block img-fluid "
            // style={{ margin: "0px auto" }}
            width={1140}
            max-height={375}
          />
        </div>
        <div className={`mt-4  ${styles.text }`}>
          <p>{article?.attributes?.description}</p>
        </div>
        <div className={`font-weight-bold ${styles.width90 }`}>
          <a
            href={
              article?.attributes?.slug ? `/article/${article?.attributes?.slug}`: "/"
            }
            // onClick={() =>
            //   handleClick(
            //     article?.attributes?.slug
            //       ? `/article/${article?.attributes?.slug}`
            //       : "/"
            //   )
            // }
          >
            Read More {">>"}
          </a>
        </div>
      </div>
    </Link>
  );
};

export default FullWidthArticleCard;
