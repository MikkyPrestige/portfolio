import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";

const SITE_URL = "https://elue-michael.vercel.app";
const DEFAULT_TITLE = "Elue Michael | Front-End Software Engineer";
const DEFAULT_DESC =
  "Front‑end software engineer passionate about building accessible, performant web apps with React and modern JavaScript. Let's create something great together.";
const DEFAULT_IMAGE = `${SITE_URL}/social-share.png`;
const DEFAULT_IMAGE_ALT = "Elue Michael portfolio preview";

const SEO = ({
  title = DEFAULT_TITLE,
  description = DEFAULT_DESC,
  canonical: customCanonical,
  image = DEFAULT_IMAGE,
  imageAlt = DEFAULT_IMAGE_ALT,
  type = "website",
  noindex = false,
}) => {
  const { pathname } = useLocation();
  const canonical = customCanonical || `${SITE_URL}${pathname}`;

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
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content={imageAlt} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonical} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:image:alt" content={imageAlt} />
    </Helmet>
  );
};

export default SEO;