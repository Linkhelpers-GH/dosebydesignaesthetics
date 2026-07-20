import { Link } from "react-router-dom";
import { business } from "../data/business";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-grid">
        <div>
          <h3>Dose by Design</h3>
          <p>
            Personalized aesthetic medicine in San Diego with natural results, education-first care,
            and appointments that never feel rushed.
          </p>
          <div className="btn-row">
            <a className="btn btn--ghost-light" href={business.bookingUrl} target="_blank" rel="noreferrer">
              Book online
            </a>
            <a className="btn btn--ghost-light" href={`tel:${business.phoneTel}`}>
              Call {business.phone}
            </a>
          </div>
        </div>

        <div>
          <h3>Visit</h3>
          <div className="nap-block">
            <p style={{ margin: 0 }}>{business.address.full}</p>
            <p style={{ margin: "0.5rem 0 0", color: "rgba(255,255,255,0.8)" }}>
              {business.locationNote}
            </p>
            <p style={{ margin: "0.75rem 0 0" }}>
              <a href={`tel:${business.phoneTel}`}>{business.phone}</a>
              <br />
              <a href={`mailto:${business.email}`}>{business.email}</a>
            </p>
          </div>
        </div>

        <div>
          <h3>Explore</h3>
          <div className="footer-links">
            <Link to="/services">Services</Link>
            <Link to="/about">About</Link>
            <Link to="/financing">Financing</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/contact">Contact</Link>
            <a href={business.instagram} target="_blank" rel="noreferrer">
              Instagram
            </a>
          </div>
        </div>
      </div>

      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} Dose by Design. All rights reserved.</span>
        <span>Personalized aesthetic medicine in San Diego, CA.</span>
      </div>
    </footer>
  );
}
