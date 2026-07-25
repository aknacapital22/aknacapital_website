import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  ogImage?: string;
  type?: "website" | "article";
  jsonLd?: object | object[];
  keywords?: string;
  noindex?: boolean;
}

const BASE_URL = "https://aknacapital.com";
const DEFAULT_OG_IMAGE = "/logo.jpg";

export function SEO({
  title,
  description,
  path = "/",
  ogImage = DEFAULT_OG_IMAGE,
  type = "website",
  jsonLd,
  keywords,
  noindex = false,
}: SEOProps) {
  const fullTitle = title.includes("AKNA Capital")
    ? title
    : `${title} | AKNA Capital`;
  const canonicalUrl = `${BASE_URL}${path}`;
  const ogImageUrl = `${BASE_URL}${ogImage}`;

  return (
    <Helmet>
      {/* Primary */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <>
          <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
          <link rel="canonical" href={canonicalUrl} />
        </>
      )}
      {keywords && <meta name="keywords" content={keywords} />}

      {/* Open Graph */}
      <meta property="og:type" content={type} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImageUrl} />
      <meta property="og:image:alt" content={fullTitle} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content={canonicalUrl} />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImageUrl} />

      {/* Per-page JSON-LD — supports single schema or array of schemas */}
      {Array.isArray(jsonLd)
        ? jsonLd.map((schema, i) => (
            <script key={`ld-${i}`} type="application/ld+json">
              {JSON.stringify(schema)}
            </script>
          ))
        : jsonLd && (
            <script type="application/ld+json">
              {JSON.stringify(jsonLd)}
            </script>
          )
      }
    </Helmet>
  );
}
