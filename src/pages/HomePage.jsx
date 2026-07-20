import { Link } from "react-router-dom";
import Seo from "../components/Seo";
import {
  business,
  concerns,
  faqs,
  journey,
  membership,
  providers,
  services,
} from "../data/business";
import {
  buildFaqSchema,
  buildLocalBusinessSchema,
  buildOrganizationSchema,
  buildPersonSchemas,
} from "../seo/schema";

export default function HomePage() {
  return (
    <>
      <Seo
        title="Dose by Design | Aesthetic Medicine in San Diego"
        description="Personalized aesthetic medicine in San Diego with Cathy Tang, PA-C. Natural-looking neurotoxins, dermal fillers, and skin rejuvenation. Education first, never rushed."
        path="/"
        image="/images/provider-portrait-1.jpg"
        jsonLd={[
          buildLocalBusinessSchema(),
          buildOrganizationSchema(),
          ...buildPersonSchemas(),
          buildFaqSchema(),
        ]}
      />

      <section className="hero">
        <div className="hero__media" aria-hidden="true">
          <img
            src="/images/provider-portrait-1.jpg"
            alt=""
            width="1600"
            height="2400"
            fetchPriority="high"
          />
        </div>
        <div className="hero__overlay" aria-hidden="true" />
        <div className="container hero__content">
          <p className="hero__brand">Dose by Design</p>
          <h1>Look refreshed, still unmistakably you.</h1>
          <p>
            Personalized aesthetic treatments in San Diego with a calm, educational approach to
            natural-looking results.
          </p>
          <div className="btn-row">
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <Link className="btn btn--ghost-light" to="/services">
              Explore services
            </Link>
          </div>
        </div>
      </section>

      <div className="trust-bar">
        <div className="container trust-bar__grid">
          <div className="trust-item">
            <strong>{business.rating.value}.0 · {business.rating.count} reviews</strong>
            <span>Google rating</span>
          </div>
          <div className="trust-item">
            <strong>Board-certified PA</strong>
            <span>Cathy Tang, PA-C</span>
          </div>
          <div className="trust-item">
            <strong>~1 hour visits</strong>
            <span>Unhurried appointments</span>
          </div>
          <div className="trust-item">
            <strong>San Diego</strong>
            <span>Suite 104A, University Heights</span>
          </div>
        </div>
      </div>

      <section className="section">
        <div className="container grid-concerns">
          <div>
            <p className="eyebrow">Concerns we help</p>
            <h2>Thoughtful care for how you want to feel in your own face.</h2>
            <p className="lede">
              Patients often come to us wanting to look rested and age gracefully, not dramatically
              different. We plan treatments around your features, your pace, and your long-term goals.
            </p>
          </div>
          <ul className="concern-list">
            {concerns.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <p className="eyebrow">Featured services</p>
          <h2>Treatments designed for balance.</h2>
          <p className="lede">
            Verified offerings from our practice: injectables, corrective dissolving, microneedling,
            and consultations, booked online when you’re ready.
          </p>
          <div className="grid-3" style={{ marginTop: "2rem" }}>
            {services.slice(0, 3).map((service) => (
              <Link key={service.slug} className="service-tile" to={`/services/${service.slug}`}>
                <div className="service-tile__media">
                  <img src={service.image} alt="" width="800" height="600" loading="lazy" />
                </div>
                <div>
                  <h3>{service.name}</h3>
                  <p>{service.summary}</p>
                  {service.priceFrom ? (
                    <div className="price-note">From ${service.priceFrom}</div>
                  ) : null}
                </div>
              </Link>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--secondary" to="/services">
              View all services
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img
              src={providers.cathy.image}
              alt="Cathy Tang, PA-C, founder of Dose by Design"
              width="800"
              height="1200"
              loading="lazy"
            />
          </div>
          <div>
            <p className="eyebrow">Meet Cathy</p>
            <h2>Founded for personalized care, not high-volume aesthetics.</h2>
            <p>
              Cathy Tang, PA-C, created Dose by Design after leaving a previous clinic where her
              values around patient care no longer aligned. Her practice centers on education,
              honest recommendations, and helping you look like the best version of yourself.
            </p>
            <p className="muted">
              Board-certified Physician Assistant · MCPHS 2016 · 8+ years in aesthetic medicine
            </p>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/about">
                About Cathy & our team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <p className="eyebrow">Patient journey</p>
          <h2>Education first. Decisions at your pace.</h2>
          <div className="grid-journey" style={{ marginTop: "1.5rem" }}>
            {journey.map((step, index) => (
              <div className="journey-step" key={step.title}>
                <div className="journey-step__num">{String(index + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{step.title}</h3>
                  <p>{step.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ink">
        <div className="container split">
          <blockquote className="quote">“{business.philosophy}”</blockquote>
          <div>
            <p className="eyebrow">Our philosophy</p>
            <h2>Never rushed. Never oversold.</h2>
            <p className="lede">
              Most visits are about an hour. You’ll leave with clarity, whether you treat the same
              day or take time to decide.
            </p>
            <div className="btn-row">
              <a className="btn btn--ghost-light" href={business.bookingUrl} target="_blank" rel="noreferrer">
                Book in person or virtual
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container grid-2">
          <div>
            <p className="eyebrow">Patient trust</p>
            <h2>{business.rating.value}.0 on Google from {business.rating.count} reviews</h2>
            <p className="lede">
              Patients choose Dose by Design for natural results and a practice that listens. Read
              recent experiences on Google, then book when you’re ready.
            </p>
            <div className="btn-row">
              <a className="btn btn--secondary" href={business.mapsUrl} target="_blank" rel="noreferrer">
                View Google reviews
              </a>
            </div>
          </div>
          <div>
            <p className="eyebrow">Membership</p>
            <h2>Banking Membership</h2>
            <p>{membership.summary}</p>
            <div className="btn-row">
              <a
                className="btn btn--primary"
                href={business.patientPortalUrl}
                target="_blank"
                rel="noreferrer"
              >
                Join in Patient Portal
              </a>
              <Link className="btn btn--secondary" to="/financing">
                Financing options
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h2>Common questions</h2>
          <div className="faq-list" style={{ marginTop: "1.5rem" }}>
            {faqs.slice(0, 4).map((item) => (
              <details className="faq-item" key={item.question}>
                <summary>{item.question}</summary>
                <p>{item.answer}</p>
              </details>
            ))}
          </div>
          <div className="btn-row">
            <Link className="btn btn--secondary" to="/faq">
              See all FAQs
            </Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div>
            <p className="eyebrow">Location</p>
            <h2>Visit us in San Diego</h2>
            <p>
              <strong>{business.address.full}</strong>
            </p>
            <p>{business.locationNote}</p>
            <div className="hours-table" style={{ marginTop: "1.25rem" }}>
              {business.hours.map((row) => (
                <div className="hours-row" key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.hours}</span>
                </div>
              ))}
            </div>
            <div className="btn-row">
              <Link className="btn btn--primary" to="/contact">
                Contact & directions
              </Link>
              <a className="btn btn--secondary" href={`tel:${business.phoneTel}`}>
                {business.phone}
              </a>
            </div>
          </div>
          <div className="split__media">
            <img
              src="/images/atmosphere-1.jpg"
              alt="Dose by Design clinic atmosphere"
              width="1200"
              height="800"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      <section className="section section--ink section--tight">
        <div className="container" style={{ textAlign: "center" }}>
          <h2>Ready when you are.</h2>
          <p className="lede" style={{ marginInline: "auto" }}>
            Book a consultation to talk through your goals and build a plan that feels natural.
          </p>
          <div className="btn-row" style={{ justifyContent: "center" }}>
            <a className="btn btn--ghost-light" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
