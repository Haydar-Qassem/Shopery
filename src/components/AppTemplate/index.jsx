import React from "react";
import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
// import { useTranslation } from "react-i18next";
import environment from "../../environment";
import Header from "../Header";
import Footer from "../Footer";

const AppTemplate = ({
  pageTitle,
  pageDescription,
  path,
  keywords,
  robots = "index, follow",
  ogType = "website",
  ogImage,
  jsonLd,
  headerType = "main",
  footerType = "v1",
  children,
}) => {
  //   const { t, i18n } = useTranslation();
  const location = useLocation();
  //   const language = i18n.language || "ar";
  //   const direction = language === "ar" ? "rtl" : "ltr";
  const siteUrl = environment.siteUrl;
  const canonicalPath = path || location.pathname || "/";
  const canonicalUrl = `${siteUrl}${canonicalPath}`;
  const title = pageTitle;
  const description = pageDescription;
  const imageUrl = `${siteUrl}${ogImage || environment.ogImage}`;
  const keywordList = keywords || "Seo Keywords";
  const locale = "en_US";
  //   const alternateLocale = language === "ar" ? "en_US" : "ar_AR";

  return (
    <div className="app-shell">
      <Helmet>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta name="keywords" content={keywordList} />
        <meta name="robots" content={robots} />
        <meta name="author" content="Week 14 Project Structure" />
        <meta name="theme-color" content="#0f6b4c" />
        <link rel="canonical" href={canonicalUrl} />
        <link rel="alternate" hrefLang="en" href={canonicalUrl} />
        <link rel="alternate" hrefLang="ar" href={canonicalUrl} />
        <link rel="alternate" hrefLang="x-default" href={canonicalUrl} />

        <meta property="og:type" content={ogType} />
        <meta property="og:site_name" content={"App Name"} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content={canonicalUrl} />
        <meta property="og:image" content={imageUrl} />
        <meta property="og:image:alt" content={title} />
        <meta property="og:locale" content={locale} />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
        <meta name="twitter:image:alt" content={title} />

        {jsonLd && (
          <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
        )}
      </Helmet>

      {headerType && <Header type={headerType} />}
      <main className="app-main">{children}</main>
      {footerType && <Footer footerType={footerType} />}
    </div>
  );
};

export default AppTemplate;
