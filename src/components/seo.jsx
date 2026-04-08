import React from "react";
import { Helmet } from "react-helmet-async";

const SITE_URL = "https://michaelelue.netlify.app";
const DEFAULT_TITLE = "Elue Michael | Front-End Software Engineer";
const DEFAULT_DESC =
  "Front-end software engineer building accessible, performant web applications with React and modern JavaScript tooling.";
const DEFAULT_IMAGE = `${SITE_URL}/android-chrome-384x384.png`;

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical = SITE_URL,
  image = DEFAULT_IMAGE,
  type = "website",
  noindex = false,
}) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      {noindex && <meta name="robots" content="noindex,nofollow" />}

      <link rel="canonical" href={canonical} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content="Elue Michael Portfolio" />
      <meta property="og:url" content={canonical} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
    </Helmet>
  );
};

export default SEO;