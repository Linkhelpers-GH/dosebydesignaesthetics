import { useEffect } from "react";

/**
 * Optional analytics. Set in Vercel / .env:
 * VITE_GA_MEASUREMENT_ID=G-XXXXXXXX
 * VITE_GSC_VERIFICATION=google-site-verification-token
 */
export default function Analytics() {
  useEffect(() => {
    const gsc = import.meta.env.VITE_GSC_VERIFICATION;
    if (gsc) {
      let el = document.head.querySelector('meta[name="google-site-verification"]');
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute("name", "google-site-verification");
        document.head.appendChild(el);
      }
      el.setAttribute("content", gsc);
    }

    const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID;
    if (!measurementId || window.gtag) return undefined;

    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    document.head.appendChild(script);

    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("config", measurementId);

    return undefined;
  }, []);

  return null;
}
