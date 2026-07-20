import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { business, providers, services, whatHappensNext } from "../data/business";
import {
  buildBreadcrumbSchema,
  buildLocalBusinessSchema,
  buildServiceSchema,
} from "../seo/schema";

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) {
    return <Navigate to="/services" replace />;
  }

  const seoBySlug = {
    neurotoxins: {
      title: "Neurotoxins & Botox in San Diego, CA | Dose by Design",
      description:
        "Book neurotoxins and Botox in San Diego with Cathy Tang, PA-C. Natural-looking wrinkle relaxers, clear candidacy guidance, and unhurried consultations.",
      h1: "Neurotoxins & Botox in San Diego, CA",
    },
    "dermal-fillers": {
      title: "Dermal Fillers & Lip Filler in San Diego, CA | Dose by Design",
      description:
        "Book dermal fillers and lip filler in San Diego with Cathy Tang, PA-C. Conservative volume and contour planning with education-first consultations.",
      h1: "Dermal fillers & lip filler in San Diego, CA",
    },
    "filler-dissolver": {
      title: "Filler Dissolver in San Diego, CA | Dose by Design",
      description:
        "Book hyaluronic acid filler dissolving in San Diego for overcorrection, migration, or unwanted results. Precise, consultation-first care.",
      h1: "Filler dissolver in San Diego, CA",
    },
    microneedling: {
      title: "Microneedling in San Diego, CA | Dose by Design",
      description:
        "Book microneedling in San Diego to support smoother-looking skin and a refreshed glow. Tailored sessions with clear aftercare guidance.",
      h1: "Microneedling in San Diego, CA",
    },
  };

  const seo = seoBySlug[service.slug] || {
    title: `${service.name} in San Diego, CA | Dose by Design`,
    description: service.summary,
    h1: `${service.name} in San Diego, CA`,
  };

  const relatedServices = (service.related || [])
    .map((relatedSlug) => services.find((item) => item.slug === relatedSlug))
    .filter(Boolean);

  return (
    <>
      <Seo
        title={seo.title}
        description={seo.description}
        path={`/services/${service.slug}`}
        image={service.image}
        jsonLd={[
          buildLocalBusinessSchema(),
          buildServiceSchema(service),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Services", path: "/services" },
            { name: service.name, path: `/services/${service.slug}` },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">
            <Link to="/services">Services</Link> / {service.name}
          </p>
          <h1>{seo.h1}</h1>
          <p className="lede">{service.opening || service.summary}</p>
          <p className="muted">
            With {providers.cathy.name}, {providers.cathy.credentials}, at {business.address.full}.{" "}
            {business.rating.value}.0 from {business.rating.count} Google reviews.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <a className="btn btn--secondary" href={`tel:${business.phoneTel}`}>
              Call {business.phone}
            </a>
            {service.priceFrom ? (
              <span className="price-note" style={{ alignSelf: "center" }}>
                From ${service.priceFrom} · {service.duration}
              </span>
            ) : (
              <span className="price-note" style={{ alignSelf: "center" }}>
                {service.duration}
              </span>
            )}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split split--top">
          <div className="split__media">
            <img
              src={service.image}
              alt={service.imageAlt || service.name}
              width="1000"
              height="750"
              loading="eager"
              style={
                service.imagePosition
                  ? { objectPosition: service.imagePosition }
                  : undefined
              }
            />
          </div>
          <div className="split__copy">
            {(service.sections || []).map((section) => (
              <div key={section.heading} className="service-block">
                <h2>{section.heading}</h2>
                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph.slice(0, 32)}>{paragraph}</p>
                ))}
              </div>
            ))}

            <h2>Commonly related concerns</h2>
            <ul className="concern-list">
              {service.concerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>

            <h2>What happens next</h2>
            <ol className="next-steps">
              {whatHappensNext.map((step) => (
                <li key={step}>{step}</li>
              ))}
            </ol>

            <div className="service-nap">
              <p>
                <strong>{business.name}</strong>
                <br />
                {business.address.full}
                <br />
                <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
              </p>
              <p className="muted" style={{ marginTop: "0.75rem" }}>
                <a href={business.mapsUrl} target="_blank" rel="noreferrer">
                  Read Google reviews
                </a>
              </p>
            </div>

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

            {relatedServices.length ? (
              <div className="related-services">
                <h2>Related services</h2>
                <ul className="related-services__list">
                  {relatedServices.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/services/${item.slug}`}>{item.name}</Link>
                    </li>
                  ))}
                  <li>
                    <Link to="/about">Meet Cathy Tang, PA-C</Link>
                  </li>
                </ul>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}
