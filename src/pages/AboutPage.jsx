import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { business, providers } from "../data/business";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildPersonSchemas,
} from "../seo/schema";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About Cathy Tang, PA-C"
        description="Meet Cathy Tang, PA-C, founder of Dose by Design in San Diego, and Medical Director Dr. Abiade Short, MD. Personalized aesthetic medicine focused on natural results."
        path="/about"
        image={providers.cathy.image}
        jsonLd={[
          buildLocalBusinessSchema(),
          ...buildPersonSchemas(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "About", path: "/about" },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">About</p>
          <h1>A practice built around personalized, honest care.</h1>
          <p className="lede">
            Dose by Design exists to help you look refreshed and confident, while still looking like
            yourself.
          </p>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container split">
          <div className="split__media">
            <img
              src={providers.cathy.image}
              alt="Cathy Tang, PA-C"
              width="800"
              height="1200"
              loading="eager"
            />
          </div>
          <div>
            <p className="eyebrow">{providers.cathy.role}</p>
            <h2>
              {providers.cathy.name}, {providers.cathy.credentials}
            </h2>
            {providers.cathy.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
            <div className="btn-row">
              <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
                Book with Cathy
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">{providers.medicalDirector.role}</p>
            <h2>
              {providers.medicalDirector.name}, {providers.medicalDirector.credentials}
            </h2>
            {providers.medicalDirector.bio.map((paragraph) => (
              <p key={paragraph.slice(0, 24)}>{paragraph}</p>
            ))}
          </div>
          <div className="split__media">
            <img
              src={providers.medicalDirector.image}
              alt="Dr. Abiade Short, MD, Medical Director"
              width="800"
              height="1000"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section--ink section--tight">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Curious whether we’re the right fit?</h2>
          <p className="lede" style={{ marginInline: "auto" }}>
            Start with a consultation, in person or virtual, and we’ll map a plan around your goals.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a className="btn btn--ghost-light" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <Link className="btn btn--ghost-light" to="/services">
              View services
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
