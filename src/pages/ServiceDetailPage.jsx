import { Link, Navigate, useParams } from "react-router-dom";
import Seo from "../components/Seo";
import { business, services } from "../data/business";
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

  return (
    <>
      <Seo
        title={`${service.name} in San Diego`}
        description={service.summary}
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
          <h1>{service.name}</h1>
          <p className="lede">{service.summary}</p>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book now
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
        <div className="container split">
          <div className="split__media">
            <img src={service.image} alt="" width="1000" height="750" loading="eager" />
          </div>
          <div>
            <h2>What to expect</h2>
            {service.description.map((paragraph) => (
              <p key={paragraph.slice(0, 28)}>{paragraph}</p>
            ))}
            <h3>Commonly related concerns</h3>
            <ul className="concern-list">
              {service.concerns.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <div className="btn-row">
              <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
                Book consultation
              </a>
              <Link className="btn btn--secondary" to="/contact">
                Ask a question
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
