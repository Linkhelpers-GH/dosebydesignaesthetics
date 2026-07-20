import { useEffect, useRef, useState } from "react";
import { business } from "../data/business";

export default function MapEmbed({
  title = "Map showing Dose by Design in San Diego",
  className = "",
}) {
  const ref = useRef(null);
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return undefined;

    if (typeof IntersectionObserver === "undefined") {
      setShouldLoad(true);
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: "240px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className={`map-embed${className ? ` ${className}` : ""}`}>
      {shouldLoad ? (
        <iframe
          title={title}
          src={business.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      ) : (
        <div className="map-embed__placeholder" aria-hidden="true">
          <span>Loading map…</span>
        </div>
      )}
    </div>
  );
}
