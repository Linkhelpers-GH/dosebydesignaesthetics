import { Link } from "react-router-dom";
import CherryWidget from "../components/CherryWidget";
import Seo from "../components/Seo";
import { business, membership } from "../data/business";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../seo/schema";

export default function FinancingPage() {
  return (
    <>
      <Seo
        title="Financing & Membership"
        description="Explore Cherry financing and the Dose by Design Banking Membership for flexible aesthetic treatment planning in San Diego."
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
          <h1>Flexible ways to plan your care.</h1>
          <p className="lede">
            Choose Cherry financing for qualifying treatments, or build treatment credit with our
            Banking Membership.
          </p>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container grid-2">
          <div>
            <h2>Cherry financing</h2>
            <p>
              Cherry offers patient financing options for qualifying applicants. Use the widget
              below to explore payment plans, or ask our team during your consultation.
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
    </>
  );
}
