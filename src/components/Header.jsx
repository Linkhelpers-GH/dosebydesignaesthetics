import { useState } from "react";
import { NavLink } from "react-router-dom";
import { business } from "../data/business";

const links = [
  { to: "/services", label: "Services" },
  { to: "/about", label: "About" },
  { to: "/financing", label: "Financing" },
  { to: "/faq", label: "FAQ" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="site-header">
      <div className="container header-inner">
        <NavLink to="/" className="brand-link" onClick={() => setOpen(false)}>
          <img src="/images/logo.png" alt="Dose by Design logo" width="44" height="44" />
          <span className="brand-text">Dose by Design</span>
        </NavLink>

        <nav className="nav-desktop" aria-label="Primary">
          {links.map((link) => (
            <NavLink key={link.to} to={link.to}>
              {link.label}
            </NavLink>
          ))}
          <a className="btn btn--brand" href={business.bookingUrl} target="_blank" rel="noreferrer">
            Book consultation
          </a>
        </nav>

        <button
          className="menu-toggle"
          type="button"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((value) => !value)}
        >
          <span />
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`container nav-mobile${open ? " open" : ""}`}
        aria-label="Mobile"
      >
        {links.map((link) => (
          <NavLink key={link.to} to={link.to} onClick={() => setOpen(false)}>
            {link.label}
          </NavLink>
        ))}
        <a
          className="btn btn--brand"
          href={business.bookingUrl}
          target="_blank"
          rel="noreferrer"
          onClick={() => setOpen(false)}
        >
          Book consultation
        </a>
      </nav>
    </header>
  );
}
