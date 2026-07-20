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

  const seoBySlug = {
    neurotoxins: {
      title: "Neurotoxins & Botox in San Diego",
      description:
        "Neurotoxin treatments in San Diego with Cathy Tang, PA-C, including Botox and similar wrinkle relaxers for natural-looking, rested results.",
      h1: "Neurotoxins in San Diego",
    },
    "dermal-fillers": {
      title: "Dermal Fillers in San Diego",
      description:
        "Dermal fillers in San Diego for natural volume and contour, including lips, cheeks, jawline, and under-eyes, with Cathy Tang, PA-C.",
      h1: "Dermal fillers in San Diego",
    },
    "filler-dissolver": {
      title: "Filler Dissolver in San Diego",
      description:
        "Hyaluronic acid filler dissolving in San Diego for overcorrection, migration, or unwanted results, with a precise, conservative approach.",
      h1: "Filler dissolver in San Diego",
    },
    microneedling: {
      title: "Microneedling in San Diego",
      description:
        "Microneedling in San Diego to support smoother-looking skin and a refreshed glow, tailored to your skin goals with Cathy Tang, PA-C.",
      h1: "Microneedling in San Diego",
    },
  };

  const seo = seoBySlug[service.slug] || {
    title: `${service.name} in San Diego`,
    description: service.summary,
    h1: `${service.name} in San Diego`,
  };

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
        <div className="container split split--top">
          <div className="split__media">
            <img
              src={service.image}
              alt=""
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
