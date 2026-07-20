import { useEffect } from "react";
import { business } from "../data/business";

/** Redirects to Aesthetic Record booking. */
export default function BookPage() {
  useEffect(() => {
    window.location.replace(business.bookingUrl);
  }, []);

  return (
    <section className="page-hero">
      <div className="container">
        <h1>Opening booking…</h1>
        <p className="lede">
          If you are not redirected,{" "}
          <a href={business.bookingUrl} target="_blank" rel="noreferrer">
            open online booking
          </a>
          .
        </p>
      </div>
    </section>
  );
}
