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
        title="FAQ"
        description="Frequently asked questions about Dose by Design consultations, location, hours, membership, and financing in San Diego."
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
          <h1>Answers before you book.</h1>
          <p className="lede">
            Still unsure? Book a consultation. We’ll walk through options without pressure.
          </p>
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
          </div>
        </div>
      </section>
    </>
  );
}
