import { GetServerSideProps } from "next";
import React from "react";
import client from "../apollo-client";
import { FETCH_ALL_ARTICLES_SLUG, FETCH_ALL_CATEGORIES } from "../lib/queries";

const Sitemap = () => {};

export default Sitemap;

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  const baseUrl = process.env.NEXT_PUBLIC_WEBSITE_URL!;

  const sitemapComponent = (
    loc: string,
    changefreq: string,
    priority: string,
    lastmod?: string
  ) => {
    return `
    <url>
      <loc>${loc}</loc>
      <lastmod>${lastmod || new Date().toISOString()}</lastmod>
      <changefreq>${changefreq}</changefreq>
      <priority>${priority}</priority>
    </url>
    `;
  };

  const staticPages = [
    `${baseUrl}`,
    `${baseUrl}/contact-us`,
    `${baseUrl}/articles`,
    `${baseUrl}/about-us`,
    `${baseUrl}/disclaimer`,
    `${baseUrl}/privacy-policy`,
  ];

  const articlePagesData = async () => {
    const articlesRes = await client.query({
      query: FETCH_ALL_ARTICLES_SLUG,
      variables: { pagination: { pageSize: 100000 } },
    });
    return articlesRes?.data?.articles?.data
      ?.map((article: any) => {
        return sitemapComponent(
          `${baseUrl}/article/${article?.attributes.slug}`,
          "monthly",
          "1.0"
        );
      })
      ?.join("");
  };

  const categoryPagesData = async () => {
    const categoryRes = await client.query({
      query: FETCH_ALL_CATEGORIES,
      variables: { pagination: { pageSize: 100000 } },
    });
    return categoryRes?.data?.categories?.data
      ?.map((category: any) => {
        return sitemapComponent(
          `${baseUrl}/category/${category.attributes.slug}`,
          "monthly",
          "1.0"
        );
      })
      ?.join("");
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages.map((url) => sitemapComponent(url, "daily", "1.0")).join("")}
    ${await articlePagesData()}
    ${await categoryPagesData()}
  </urlset>
`;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return { props: {} };
};
