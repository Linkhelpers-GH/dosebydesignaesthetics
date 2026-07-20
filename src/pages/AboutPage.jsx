import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { business, providers, whatHappensNext } from "../data/business";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildPersonSchemas,
} from "../seo/schema";

export default function AboutPage() {
  return (
    <>
      <Seo
        title="Cathy Tang, PA-C in San Diego, CA | Dose by Design"
        description="Meet Cathy Tang, PA-C, aesthetic injector and founder of Dose by Design in San Diego, and Medical Director Dr. Abiade Short, MD. Book a consultation."
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
          <h1>Cathy Tang, PA-C, aesthetic injector in San Diego, CA.</h1>
          <p className="lede">
            Dose by Design exists to help you look refreshed and confident, while still looking like
            yourself. {business.rating.value}.0 from {business.rating.count} Google reviews.
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
              <Link className="btn btn--secondary" to="/services">
                View services
              </Link>
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

      <section className="section section--lavender section--tight">
        <div className="container">
          <h2>What happens next</h2>
          <ol className="next-steps">
            {whatHappensNext.map((step) => (
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
            <Link className="btn btn--secondary" to="/contact">
              Contact & map
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
