import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import { business, services } from "../data/business";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../seo/schema";

export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Aesthetic Services in San Diego"
        description="Neurotoxins, dermal fillers, filler dissolving, and microneedling at Dose by Design in San Diego. Personalized plans with natural-looking results."
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
          <h1>Aesthetic services in San Diego.</h1>
          <p className="lede">
            Every recommendation starts with your goals, anatomy, and comfort. Never a one-size plan.
          </p>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container grid-services">
          {services.map((service) => (
            <article key={service.slug} className="service-card">
              <Link className="service-card__media" to={`/services/${service.slug}`}>
                <img
                  src={service.image}
                  alt=""
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
          <p className="muted">
            Consultations are available in person or virtually. Pricing shown reflects current
            online booking starting rates and may vary based on your personalized plan.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
