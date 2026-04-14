import React from 'react';
import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: string;
  ogUrl?: string;
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: string;
  canonical?: string;
  jsonLd?: object;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  ogTitle,
  ogDescription,
  ogImage,
  ogUrl,
  twitterTitle,
  twitterDescription,
  twitterImage,
  canonical,
  jsonLd,
}) => {
  const siteTitle = "Illuminati Lodge of New York";
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const defaultDescription = "The Illuminati Lodge of New York - A distinguished brotherhood dedicated to the pursuit of knowledge, enlightenment, and the betterment of humanity.";
  const defaultKeywords = "Illuminati, official Illuminati website, how to join Illuminati, Illuminati New York, enlightenment, brotherhood, knowledge, wisdom, secret society, wealth, power, success, global elite, spiritual awakening, prosperity, global leadership, ancient wisdom, modern enlightenment, Illuminati members, Illuminati secrets";
  const defaultUrl = "https://illuminati-ny.org/";
  const defaultImage = "/logo.svg";

  const organizationJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Illuminati Lodge of New York",
    "url": "https://illuminati-ny.org/",
    "logo": "https://illuminati-ny.org/logo.svg",
    "description": defaultDescription,
    "sameAs": [
      "https://twitter.com/illuminati_ny",
      "https://facebook.com/illuminati_ny"
    ]
  };

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description || defaultDescription} />
      <meta name="keywords" content={keywords || defaultKeywords} />

      {/* Open Graph / Facebook */}
      <meta property="og:title" content={ogTitle || fullTitle} />
      <meta property="og:description" content={ogDescription || description || defaultDescription} />
      <meta property="og:image" content={ogImage || defaultImage} />
      <meta property="og:url" content={ogUrl || defaultUrl} />
      <meta property="og:type" content="website" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={twitterTitle || ogTitle || fullTitle} />
      <meta name="twitter:description" content={twitterDescription || ogDescription || description || defaultDescription} />
      <meta name="twitter:image" content={twitterImage || ogImage || defaultImage} />

      {/* Canonical Link */}
      {canonical && <link rel="canonical" href={canonical} />}

      {/* Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify(jsonLd || organizationJsonLd)}
      </script>
    </Helmet>
  );
};

export default SEO;
