import { useEffect } from "react";
import { business } from "../data/business";

export default function Seo({
  title,
  description,
  path = "/",
  image = "/images/logo.png",
  jsonLd = [],
  noIndex = false,
}) {
  const fullTitle = title.includes("Dose by Design")
    ? title
    : `${title} | Dose by Design`;
  const url = `${business.website}${path === "/" ? "/" : path}`;
  const imageUrl = image.startsWith("http") ? image : `${business.website}${image}`;
  const jsonLdKey = JSON.stringify(jsonLd);

  useEffect(() => {
    document.title = fullTitle;

    const setMeta = (attr, key, value) => {
      let el = document.head.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute("content", value);
    };

    setMeta("name", "description", description);
    setMeta("property", "og:title", fullTitle);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url", url);
    setMeta("property", "og:type", "website");
    setMeta("property", "og:site_name", business.name);
    setMeta("property", "og:image", imageUrl);
    setMeta("name", "twitter:card", "summary_large_image");
    setMeta("name", "twitter:title", fullTitle);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image", imageUrl);
    setMeta("name", "robots", noIndex ? "noindex, nofollow" : "index, follow");

    let canonical = document.head.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", noIndex ? `${business.website}/` : url);

    const existing = document.head.querySelectorAll("script[data-seo-jsonld]");
    existing.forEach((node) => node.remove());

    if (!noIndex) {
      JSON.parse(jsonLdKey)
        .flat()
        .forEach((schema) => {
          const script = document.createElement("script");
          script.type = "application/ld+json";
          script.dataset.seoJsonld = "true";
          script.textContent = JSON.stringify(schema);
          document.head.appendChild(script);
        });
    }
  }, [fullTitle, description, url, imageUrl, jsonLdKey, noIndex]);

  return null;
}
