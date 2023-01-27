import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useRef, useState } from "react";
import client from "../../../apollo-client";
import { FETCH_ARTICLES } from "../../../lib/queries";
import useDebounce from "../../../hooks/useDebounce";
import styles from "./navbar.module.scss";
import useClickOutside from "../../../hooks/useClickOutside";
import { getStrapiURL } from "../../../lib/helpers/utils";

interface NavBarProps {
  categories: any;
}

interface Options {
  coverImage: string;
  slug: string;
  title: string;
}

const Navbar: React.FC<NavBarProps> = ({ categories = [] }) => {
  const [searchText, setSearchText] = useState("");
  const [showOptions, setShowOptions] = useState(true);
  const [suggestOptions, setSuggestOptions] = useState<Options[]>([]);
  const searchTextDebounced = useDebounce(searchText, 500);
  const searchRef = useRef(null);
  const router = useRouter();
  const [categoriesList, setCategoriesList] = useState<any>([]);

  useEffect(() => {
    setCategoriesList(categories);
  }, []);

  const handleSearch = async () => {
    const queryParams = `${searchTextDebounced.trim()}`;
    const articlesRes = await client.query({
      query: FETCH_ARTICLES,
      variables: {
        filters: {
          or: [
            { title: { containsi: queryParams } },
            { description: { containsi: queryParams } },
          ],
        },
      },
    });
    let suggestionOptions = articlesRes.data.articles.data.map((blog: any) => {
      return {
        title: blog.attributes.title,
        slug: blog.attributes.slug,
        coverImage: blog.attributes.coverImage.data.attributes.url,
      };
    });
    setSuggestOptions(suggestionOptions);
    setShowOptions(true);
  };

  const handleSuggestionOptions = (e:any,val: any) => {
    router.push(`/article/${val?.slug}`)
    // setShowOptions(false);
  };

  useEffect(() => {
    handleSearch();
  }, [searchTextDebounced]);

  useClickOutside(searchRef, () => {
    setShowOptions(false);
  });

  return (
    <nav
      className={`navbar navbar-expand-lg fw-bold navbar-light bg-light sticky-top ${styles.navigation}`}
    >
      <div className="container">
        <a href="/">
          <Image
            src="/image/logo.png"
            className={styles.logo}
            alt="Logo"
            width={162}
            height={72}
          />
        </a>
        <input
          type="select"
          name="q"
          className={` ${styles.searchTextsm}`}
          placeholder="Looking for something?"
          autoComplete="off"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          ref={searchRef}
        />
        {showOptions && searchText !== "" && suggestOptions.length > 0 && (
          <div
            className={`${styles.selectedOptionsWrappersm}  ${styles.suggestionOptionsm}`}
          >
            {suggestOptions?.map(
              (item, i) => (
              <>
                {/* item?.title.toLowerCase()?.match(searchText.toLowerCase()) ? ( */}
                  <div
                    className={`${styles.selectOption}`}
                    onClick={(e) => handleSuggestionOptions(e,item)}
                    key={i}
                  >
                {/* <Link key={i}  href={`/article/${item?.slug}`}> */}
                    {/* <img
                      src={
                        item?.coverImage.startsWith("/")
                          ? getStrapiURL(item?.coverImage)
                          : item?.coverImage
                      }
                    ></img>{" "} */}
                    {item?.title}
                  </div>
                {/* </Link> */}
              </>
              )
              // ) : null
            )}
          </div>
       )} 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className={`collapse navbar-collapse`} id="navbarSupportedContent">
          <form action="#" role="search" className={styles.searchForm}>
            <input
              type="select"
              name="q"
              className={` ${styles.searchText}`}
              placeholder="Looking for something?"
              autoComplete="off"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              ref={searchRef}
            />
            {showOptions && searchText !== "" && suggestOptions.length > 0 && (
              <div
                className={`${styles.selectedOptionsWrapper}  ${styles.suggestionOption}`}
              >
                {suggestOptions?.map(
                  (item, i) => (
                    // item?.title.toLowerCase()?.match(searchText.toLowerCase()) ? (
                    // <Link key={i}  href={`/article/${item?.slug}`}>
                      <div
                        className={`${styles.selectOption}`}
                        onClick={(e) => handleSuggestionOptions(e,item)}
                        key={i}
                      >
                        {/* <img
                          src={
                            item?.coverImage.startsWith("/")
                              ? getStrapiURL(item?.coverImage)
                              : item?.coverImage
                          }
                        ></img>{" "} */}
                        {item?.title}
                      </div>
                    // </Link>
                  )
                  // ) : null
                )}
              </div>
            )} 

            <ul
              className={`navbar-nav mx-auto mb-2 mb-lg-0 ${styles.TitleText}`}
            >
              <li
                className={`nav-item ${
                  router.asPath === "/" ? styles.activeText : styles.menuItem
                }`}
              >
                <Link href="/">Home</Link>
              </li>
              <li
                className={`nav-item ${
                  router.asPath === "/articles"
                    ? styles.activeText
                    : styles.menuItem
                }`}
              >
                <Link href="/articles">All Blogs</Link>
              </li>
              {categoriesList.map((category: any, index: number) => (
                <li
                  className={`nav-item ${
                    router.asPath === `/category/${category?.attributes?.slug}`
                      ? styles.activeText
                      : styles.menuItem
                  }`}
                  key={index}
                >
                  <Link href={`/category/${category?.attributes?.slug}`}>
                    {category?.attributes?.name}
                  </Link>
                </li>
              ))}
              <li
                className={`nav-item ${
                  router.asPath === "/contact-us"
                    ? styles.activeText
                    : styles.menuItem
                }`}
              >
                <Link href="/contact-us">Contact Us</Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
    </nav>
  );
};

// export async function getServerSideProps() {
//   const {data} = await client.query({query: FETCH_ALL_CATEGORIES})
//   console.log("data ======>", data);

//   return {
//     // props: { categories: data. },
//     props:{},
//     revalidate: 1,
//   };
// }

export default Navbar;
