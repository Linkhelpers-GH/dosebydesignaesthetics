import { Link } from "react-router-dom";
import Seo from "../components/Seo";

export default function NotFoundPage() {
  return (
    <>
      <Seo
        title="Page not found"
        description="The page you requested could not be found on the Dose by Design website."
        path="/404"
        noIndex
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">404</p>
          <h1>Page not found.</h1>
          <p className="lede">
            That link may be outdated. Browse services or return home to continue.
          </p>
          <div className="btn-row">
            <Link className="btn btn--primary" to="/">
              Back to home
            </Link>
            <Link className="btn btn--secondary" to="/services">
              View services
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
