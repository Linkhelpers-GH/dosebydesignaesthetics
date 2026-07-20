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
          <h1>Curated treatments for natural balance.</h1>
          <p className="lede">
            Every recommendation starts with your goals, anatomy, and comfort. Never a one-size plan.
          </p>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container grid-2">
          {services.map((service) => (
            <Link key={service.slug} className="service-tile" to={`/services/${service.slug}`}>
              <div className="service-tile__media">
                <img src={service.image} alt="" width="900" height="675" loading="lazy" />
              </div>
              <div>
                <h2 style={{ fontSize: "1.75rem" }}>{service.name}</h2>
                <p>{service.summary}</p>
                {service.priceFrom ? (
                  <div className="price-note">From ${service.priceFrom} · {service.duration}</div>
                ) : (
                  <div className="price-note">{service.duration}</div>
                )}
              </div>
            </Link>
          ))}
        </div>
        <div className="container" style={{ marginTop: "2rem" }}>
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
