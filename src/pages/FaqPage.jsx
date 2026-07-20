import Seo from "../components/Seo";
import { business, faqs } from "../data/business";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildLocalBusinessSchema,
} from "../seo/schema";

export default function FaqPage() {
  return (
    <>
      <Seo
        title="FAQ in San Diego, CA | Dose by Design"
        description="Answers about Dose by Design consultations, pricing factors, location, hours, membership, and financing in San Diego. Book or call when you are ready."
        path="/faq"
        jsonLd={[
          buildLocalBusinessSchema(),
          buildFaqSchema(),
          buildBreadcrumbSchema([
            { name: "Home", path: "/" },
            { name: "FAQ", path: "/faq" },
          ]),
        ]}
      />

      <section className="page-hero">
        <div className="container">
          <p className="eyebrow">FAQ</p>
          <h1>San Diego med spa FAQ.</h1>
          <p className="lede">
            Common questions before you book at Dose by Design. Still unsure? We’ll walk through
            options without pressure.
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
        <div className="container faq-list">
          {faqs.map((item) => (
            <details className="faq-item" key={item.question}>
              <summary>{item.question}</summary>
              <p>{item.answer}</p>
            </details>
          ))}
          <div className="btn-row" style={{ marginTop: "1rem" }}>
            <a className="btn btn--primary" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book consultation
            </a>
            <a className="btn btn--secondary" href={`tel:${business.phoneTel}`}>
              Call {business.phone}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
