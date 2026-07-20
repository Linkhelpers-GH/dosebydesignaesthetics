import Seo from "../components/Seo";
import { business } from "../data/business";
import { buildBreadcrumbSchema, buildLocalBusinessSchema } from "../seo/schema";

export default function ContactPage() {
  return (
    <>
      <Seo
        title="Contact & Location"
        description="Visit Dose by Design at 4642 30th St Suite 104A, San Diego, CA 92116. Call (209) 991-2227 or book online."
        path="/contact"
        jsonLd={[
          buildLocalBusinessSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "Contact", path: "/contact" },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h1>We’re here when you’re ready.</h1>
          <p className="lede">
            Book online, call, or email. We’re happy to help you find Suite 104A for your visit.
          </p>
        </div>
      </section>

      <section className="section section--lavender">
        <div className="container grid-2">
          <div>
            <h2>Visit</h2>
            <p>
              <strong>{business.name}</strong>
              <br />
              {business.address.full}
            </p>
            <p>{business.locationNote}</p>
            <p>
              <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
              <br />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
            <div className="btn-row">
              <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
                Book consultation
              </a>
              <a className="btn btn--secondary" href={business.mapsUrl} target="_blank" rel="noreferrer">
                Open in Google Maps
              </a>
            </div>
          </div>

          <div>
            <h2>Hours</h2>
            <div className="hours-table">
              {business.hours.map((row) => (
                <div className="hours-row" key={row.day}>
                  <span>{row.day}</span>
                  <span>{row.hours}</span>
                </div>
              ))}
            </div>
            <p className="muted" style={{ marginTop: "1rem" }}>
              Hours match our Google Business Profile. Appointments are scheduled through online
              booking.
            </p>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container split">
          <div className="split__media">
            <img
              src="/images/clinic-1.jpg"
              alt="Dose by Design treatment setting"
              width="1000"
              height="1200"
              loading="lazy"
            />
          </div>
          <div>
            <h2>Prefer to message first?</h2>
            <p>
              Email{" "}
              <a href={`mailto:${business.email}`}>{business.email}</a> with your questions, or
              follow{" "}
              <a href={business.instagram} target="_blank" rel="noreferrer">
                @dosebydesign
              </a>{" "}
              on Instagram.
            </p>
            <p className="muted">
              Personalized aesthetic medicine for patients who want natural-looking results in San
              Diego.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
