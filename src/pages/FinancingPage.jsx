import { Link } from "react-router-dom";
import CherryWidget from "../components/CherryWidget";
import Seo from "../components/Seo";
import { business, membership, whatHappensNext } from "../data/business";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../seo/schema";

export default function FinancingPage() {
  return (
    <>
      <Seo
        title="Financing & Membership in San Diego, CA | Dose by Design"
        description="Explore Cherry financing and the Banking Membership at Dose by Design in San Diego. Call or book a consultation to plan treatment flexibly."
        path="/financing"
        jsonLd={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Financing", path: "/financing" },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Financing</p>
          <h1>Financing and membership in San Diego, CA.</h1>
          <p className="lede">
            Choose Cherry financing for qualifying treatments, or build treatment credit with our
            Banking Membership at Dose by Design.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <a className="btn btn--secondary" href={`tel:${business.phoneTel}`}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container grid-2">
          <div>
            <h2>Cherry financing</h2>
            <p>
              Cherry offers patient financing options for qualifying applicants. Use the widget
              below to explore payment plans, or ask our team during your San Diego consultation.
            </p>
            <p className="muted">
              Financing approval, terms, and available plans are determined by Cherry. Dose by Design
              does not guarantee approval or a specific monthly payment.
            </p>
            <CherryWidget />
          </div>
          <div>
            <h2>Banking Membership</h2>
            <p>{membership.summary}</p>
            <div className="btn-row">
              <a
                className="btn btn--primary"
                href={business.patientPortalUrl}
                target="_blank"
                rel="noreferrer"
              >
                Open Patient Portal
              </a>
              <Link className="btn btn--secondary" to="/contact">
                Contact us
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--tight">
        <div className="container">
          <h2>What happens next</h2>
          <ol className="next-steps">
            <li>Explore Cherry estimates or membership details on this page.</li>
            <li>Book a consultation to confirm treatment goals and candidacy.</li>
            <li>Review financing or membership options with the team before you decide.</li>
            {whatHappensNext.slice(2).map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <a className="btn btn--secondary" href={`tel:${business.phoneTel}`}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
