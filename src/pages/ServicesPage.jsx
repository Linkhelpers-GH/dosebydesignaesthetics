import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { business, services, whatHappensNext } from "../data/business";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../seo/schema";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Aesthetic Services in San Diego, CA | Dose by Design"
        description="Browse neurotoxins, dermal fillers, filler dissolving, and microneedling in San Diego. Book a consultation with Cathy Tang, PA-C, at Dose by Design."
        path="/services"
        image="/images/service-neurotoxins.jpg"
        jsonLd={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Services</p>
          <h1>Aesthetic services in San Diego, CA.</h1>
          <p className="lede">
            Dose by Design offers personalized neurotoxins, dermal fillers, filler dissolving, and
            microneedling with Cathy Tang, PA-C. Every plan starts with your goals, anatomy, and
            comfort.
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
        <div className="container grid-services">
          {services.map((service) => (
            <article key={service.slug} className="service-card">
              <Link className="service-card__media" to={`/services/${service.slug}`}>
                <img
                  src={service.image}
                  alt={service.imageAlt || service.name}
                  width="720"
                  height="900"
                  loading="lazy"
                  style={
                    service.imagePosition
                      ? { objectPosition: service.imagePosition }
                      : undefined
                  }
                />
              </Link>
              <div className="service-card__body">
                <h2>{service.name}</h2>
                <p>{service.summary}</p>
                <p className="price-note">
                  {service.priceFrom
                    ? `From $${service.priceFrom} · ${service.duration}`
                    : service.duration}
                </p>
                <div className="btn-row">
                  <Link className="btn btn--primary" to={`/services/${service.slug}`}>
                    View details
                  </Link>
                  <a
                    className="btn btn--secondary"
                    href={business.bookingUrl}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="container" style={{ marginTop: "2.5rem" }}>
          <h2>What happens next</h2>
          <ol className="next-steps">
            {whatHappensNext.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
          <p className="muted">
            Consultations are available in person or virtually. Pricing shown reflects current
            online booking starting rates and may vary based on your personalized plan.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <a className="btn btn--secondary" href={`tel:${business.phoneTel}`}>
              Call {business.phone}
            </a>
            <Link className="btn btn--secondary" to="/about">
              Meet the team
            </Link>
            <Link className="btn btn--secondary" to="/contact">
              Contact & map
            </Link>
            <Link className="btn btn--secondary" to="/faq">
              FAQ
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
