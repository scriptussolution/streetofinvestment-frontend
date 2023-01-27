import { useRouter } from "next/router";
import React from "react";
// import ReactMarkdown from "react-markdown";
import { marked } from "marked";

import client from "../../apollo-client";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";
import {
  FETCH_ALL_ARTICLES_SLUG,
  FETCH_ALL_CATEGORIES,
  FETCH_ARTICLES,
} from "../../lib/queries";
import { getStrapiMediaURL } from "../../lib/helpers/utils";
import styles from "./article.slug.module.scss";
import Seo from "../components/seo";
interface DetailedArticleProps {
  article: any;
  categories: any;
}

const DetailedArticle: React.FC<DetailedArticleProps> = ({
  article,
  categories,
}) => {
  const router = useRouter();
  const handleClick = (href: string) => {
    router.push(href);
  };

  const seo = {
    metaTitle: article?.attributes?.metaTitle || article?.attributes?.title,
    metaDescription: article?.attributes?.metaDescription,
    shareImage: article?.attributes?.coverImage,
  };

  return (
    <>
      <Navbar categories={categories} />
      <Seo seo={seo} />
      <div className="container mt-5">
        <div className="bgcolor">
          {/* <div
            onClick={() => handleClick("/")}
            className="backbutton rounded-pill"
          > */}
          {/* <div>
              <a href="#">Back to The Home</a>
            </div> */}
          <div className={`mt-5 ${styles.centeredtext}`}>
            <h1>
              {article?.attributes?.title}
              {/* {" "}
                How to Tax Save for FY 2021-22 – Download Tax Planning ebook */}
            </h1>
          </div>

          <div className="blogdetail mt-5">
            <div className="col-lg-12 col-12 blogpicture">
              <img
                src={getStrapiMediaURL(article?.attributes?.coverImage)}
                alt=""
                className="img-fluid d-block"
                style={{ margin: "0px auto" }}
                width={1120}
                height={512}
              />
            </div>

            <div className="post__container col-lg-12 col-12">
              <div className="post__content">
                <div
                  className={`mt-5 ${styles.centeredtext}`}
                  dangerouslySetInnerHTML={{
                    __html:
                      article?.attributes?.content &&
                      article?.attributes?.content,
                    // &&
                    // marked(article.attributes.content),
                  }}
                ></div>
                {/* <ReactMarkdown
                  // source={article.attributes.content}
                  // escapeHtml={false}
                  children={article.attributes.content}
                  skipHtml={false}
                /> */}
                {/* <p className="post__text w-100">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenean a augue justo. In mollis erat in elit tempus, feugiat
                    luctus ex sollicitudin. Maecenas euismod tortor dolor, vel
                    blandit augue aliquam sit amet. Vestibulum et eros
                    mollis,Lorem ipsum dolor sit amet, consectetur adipiscing
                    elit. Aenean a augue justo. In mollis erat in elit tempus,
                    feugiat luctus ex sollicitudin. Maecenas euismod tortor
                    dolor, vel blandit augue aliquam sit amet. Vestibulum et
                    eros mollis,Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Aenean a augue justo. In mollis erat in
                    elit tempus, feugiat luctus ex sollicitudin. Maecenas
                    euismod tortor dolor, vel blandit augue aliquam sit amet.
                    Vestibulum et eros mollis,Lorem ipsum dolor si. Aenean a
                    augue justo. In mollis erat in elit tempus, feugiat luctus
                    ex sollicitudin. Maecenas euismod tortor dolor, vel blandit
                    augue aliquam sit amet. Vestibulum et eros mollis,Lorem
                    ipsum dolor si Vestibulum et eros mollis,Lorem ipsum dolor
                    si
                  </p> */}
                {/* <main role="main">
                    <article>
                      <section className="introduction">
                        <h2>
                          What shall Lorem ipsum dolor sit amet consectetur
                          adipisicing elit.?
                        </h2>

                        <p>
                          <em></em> is a sea shanty, also known as Shall We Do
                          with a/the ispu
                        </p>

                        <p>
                          The shanty was sung to accompany certain work tasks
                          aboard sailing ships, especially those that required a
                          bright walking pace. It is believed to originate in
                          the early 19th century or before, during a period
                          whecrews, especially those of military vessels, were
                          large enough to permit hauling a rope whilst simply
                          marching along the deck. With the advent of merchant
                          packet and clipper ships and their smaller crews,
                          which required different working methods, use of the
                          shanty appears to have declined or shifted to other,
                          minor tasks.
                        </p>
                      </section>

                      <figure>
                        <img
                          src="https://picsum.photos/800/300"
                          alt="A girl rowing a boat on a lake"
                        />
                        <figcaption>Image by Roberto Nickson from</figcaption>
                      </figure>

                      <p>
                        And now for something hi hello this is me completely
                        different!
                      </p>

                      <blockquote>
                        <h3>A niversaleU Wb</h3>

                        <p>
                          “The power of the Web is in its universality. Access
                          by everyone regardless of disability is an essential
                          aspect.”
                          <br />
                          <strong>Lorem ipsum</strong>
                        </p>
                      </blockquote>

                      <h3>Text on lorem 2 the Web</h3>

                      <p>
                        Text is the most accessible format for information on
                        the web. Screen readers understand text best and the
                        same applies to most assistive technology, such as
                        translation apps and Braille displays. So, if you have
                        anything on your webpage that’s not text, you must add
                        some text that gives your user the same information.
                      </p>

                      <p>
                        The only exceptionlorem10 decoration, is used only
                        folorem 6 that it can be ignored by assistive
                        technology.
                      </p>

                      <p>
                        For example, ifs a video Lorem ipsum dolor sit.
                        transcripts. That way almost anyone can digest the
                        contents of said video.
                      </p>

                      <p>
                        Or, ifre going to use icons on your website, always give
                        textual labels close to them in order to convey their
                        meaning.
                      </p>

                      <figure>
                        <img
                          src="https://picsum.photos/900/300"
                          alt="A bridge leading to a forest"
                          className="img-fluid"
                        />
                        <figcaption>Image by Tim Swaan from</figcaption>
                      </figure>

                      <h3>lang-Attribute</h3>

                      <p>
                        Always add a <code></code> on your <code>&lt;</code>{" "}
                        element in order to make screen reader software read the
                        text on the page in the correct language. Remember to
                        set the ISO_639-1 language code (e.g.: de, en, fr, es,
                        it) while making sure that, if the language for your
                        website changed globally (i.e.: someone clicked on a
                        link inside a language navigation) you need to replace
                        the value dynamically.
                      </p>

                      <p>
                        If parts of a website are written in a different
                        language, set the same attribute with the correct
                        language code on the parent element. Wikipedia, for
                        example, almost always provides translations to articles
                        created and links to those translations in their
                        sidebar. Each link text is already translated into the
                        language the article linked to will be. So, each link in
                        the Wikipedia Translations Navigation has a
                        lang-Attribute.
                      </p>

                      <p>
                        <strong>Note:</strong> loremtake <code>ispum</code> for
                        something alike because that attribute is only relevant
                        for crawlers/SEO. It has nothing to do with
                        accessibility.
                      </p>

                      <blockquote>
                        <h3>
                          The Lorem ipsum dolor sit amet consectetur,
                          adipisicing elit. Praesentium voluptate architecto
                          sapiente.
                        </h3>

                        <p>
                          “In case of conflict, consider users over authors over
                          implementors over specifiers over theoretical purity.”
                          <br />–{" "}
                        </p>
                      </blockquote>

                      <h3>L ispum rks</h3>

                      <p>
                        As a sighted user, when we land on a webpage, we scan
                        the content and seek for the most relevant part
                        regarding our own interests – then we start from there
                        and navigate around the page and/or website. Landmarks
                        provide users of assistive technology with means to
                        first scan and then navigate webpages. By pressing
                        combinations of keys the user can jump around the DOM
                        and set focus to those elments.
                      </p>

                      <p>
                        s a wonderful, which gives you access to those landmarks
                        and enables you to jump through them, just like with
                        assistive technology.
                      </p>

                      <p>
                        Some landmarks you may only use once per webpage, like{" "}
                        <code>banner</code>, <code>contentinfo</code>,{" "}
                        <code>main</code> and <code>complementary</code>. Others
                        can be used as often as applicable, like{" "}
                        <code>region</code>, <code>form</code> or group among
                        others.
                      </p>

                      <figure>
                        <img
                          src="https://picsum.photos/700/300"
                          alt="A man with a hooded sweater standing in the woods"
                        />
                        <figcaption>Image by Dustin Scarpitti from</figcaption>
                      </figure>

                      <h3>Skiplinks</h3>

                      <p>
                        While landmarks are great for users with assistive
                        technology at their hands, sighted keyboard users do not
                        have any means to jump over headers, navigations and any
                        other elements between the start of the DOM tree and the
                        precious content they came to your site for. For thems
                        skip links.
                      </p>

                      <p>
                        By repeatedly hitting the{" "}
                        <code>
                          <kbd>Tab</kbd>
                        </code>{" "}
                        key, a user sets focus to the focusable elements in a
                        webpage. Setting focus on a skip link should reveal it,
                        if it is hidden in the first place! Skip links should be
                        the first elements of your HTML document. Depending on
                        your page structure you might need more than just one.
                      </p>

                      <h4>An Example for Skiplinks</h4>

                      <p>
                        You provide users with a navigation, a site-search, an
                        index navigation and a main content area. In any case
                        you should at least have a skip link pointing at the
                        main content! Always! It also makes sense to have a skip
                        link pointing at the site search, as experienced
                        (repeating) visitors to your website might prefer to
                        search for what they came looking for instead of moving
                        from page to page.
                      </p>

                      <p>
                        <strong>Note:</strong> all this advice about skip links
                        is depending on yoructure and, foremost, on your users’
                        needs!
                      </p>

                      <blockquote>
                        <h3>A Web Which Benefits All</h3>

                        <p>
                          “Making the web accessible benefits individuals,
                          businesses, and society. International web standards
                          define what is needed for accessibility.”
                          <br />
                          <strong>– Lorem ipsum dolor sit amet.e</strong>
                        </p>
                      </blockquote>
                    </article>
                  </main> */}
              </div>
            </div>
          </div>
          {/* </div> */}
        </div>
      </div>
      <Footer allCategories={categories} />
    </>
  );
};

export const getStaticPaths = async () => {
  const articlesRes = await client.query({
    query: FETCH_ALL_ARTICLES_SLUG,
    variables: { pagination: { pageSize: 100000 } },
  });
  return {
    paths: articlesRes?.data?.articles?.data?.map((article: any) => ({
      params: {
        slug: article?.attributes.slug,
      },
    })),
    fallback: true,
  };
};

export const getStaticProps = async ({ params }: any) => {
  const [articlesRes, categoriesRes] = await Promise.all([
    client.query({
      query: FETCH_ARTICLES,
      variables: {
        filters: { slug: { eq: params?.slug } },
        pagination: { pageSize: 100000 },
      },
    }),
    client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { sort: ["id:asc"] },
    }),
  ]);

  return {
    props: {
      article: articlesRes.data?.articles?.data[0],
      categories: categoriesRes.data?.categories?.data,
    },
    revalidate: 10,
  };
};

export default DetailedArticle;
