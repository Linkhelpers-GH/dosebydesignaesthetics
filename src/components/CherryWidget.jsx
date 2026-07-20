import { useEffect } from "react";

/**
 * Preserves the existing Cherry Financing embed from the Wix site
 * (slug: dose-by-design, floating estimator).
 */
export default function CherryWidget() {
  useEffect(() => {
    const initCherry = () => {
      if (typeof window._hw !== "function") return false;
      window._hw(
        "init",
        {
          debug: false,
          variables: {
            slug: "dose-by-design",
            name: "Dose by Design",
            images: [26],
            customLogo: "",
            defaultPurchaseAmount: 750,
            customImage: "",
            imageCategory: "medspa",
            language: "en",
          },
          styles: {
            primaryColor: "#d6b8f8",
            secondaryColor: "#d6b8f810",
            fontFamily: "Figtree",
            headerFontFamily: "Bodoni Moda",
            floatingEstimator: {
              position: "bottom-right",
              offset: { x: "0px", y: "0px" },
              zIndex: 9999,
              ctaFontFamily: "Figtree",
              bodyFontFamily: "Figtree",
              ctaColor: "#d6b8f8",
              ctaTextColor: "#FFFFFF",
            },
          },
        },
        ["floatingEstimator"]
      );
      return true;
    };

    if (initCherry()) return undefined;

    if (!document.getElementById("cherry-widget-script")) {
      const script = document.createElement("script");
      script.id = "cherry-widget-script";
      script.src = "https://files.withcherry.com/widgets/widget.js";
      script.async = true;
      script.onload = () => {
        initCherry();
      };
      document.body.appendChild(script);
    }

    return undefined;
  }, []);

  return (
    <div className="cherry-wrap">
      <div id="floatingEstimator" />
      <p className="muted" style={{ margin: 0 }}>
        Cherry financing is available for qualifying patients. A floating payment estimator may also
        appear on this page. Questions? Contact the practice during your consultation.
      </p>
    </div>
  );
}
