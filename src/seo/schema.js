import { business, faqs, providers, services } from "../data/business";

const dayMap = {
  Monday: "Monday",
  Tuesday: "Tuesday",
  Wednesday: "Wednesday",
  Thursday: "Thursday",
  Friday: "Friday",
  Saturday: "Saturday",
  Sunday: "Sunday",
};

export function buildLocalBusinessSchema() {
  const openingHoursSpecification = business.hours
    .filter((h) => h.opens && h.closes)
    .map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: dayMap[h.day],
      opens: h.opens,
      closes: h.closes,
    }));

  return {
    "@context": "https://schema.org",
    "@type": "MedicalBusiness",
    "@id": `${business.website}/#business`,
    name: business.name,
    description: business.description,
    url: business.website,
    telephone: business.phoneTel,
    email: business.email,
    image: `${business.website}/images/logo.png`,
    priceRange: "$$",
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.geo.latitude,
      longitude: business.geo.longitude,
    },
    openingHoursSpecification,
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: business.rating.value,
      reviewCount: business.rating.count,
      bestRating: 5,
    },
    sameAs: [business.instagram, business.mapsUrl],
    hasMap: business.mapsUrl,
    medicalSpecialty: "Aesthetic Medicine",
  };
}

export function buildOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: business.name,
    url: business.website,
    logo: `${business.website}/images/logo.png`,
    email: business.email,
    telephone: business.phoneTel,
    sameAs: [business.instagram],
  };
}

export function buildPersonSchemas() {
  return [
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: `${providers.cathy.name}, ${providers.cathy.credentials}`,
      jobTitle: providers.cathy.role,
      worksFor: { "@id": `${business.website}/#business` },
      image: `${business.website}${providers.cathy.image}`,
      description: providers.cathy.shortBio,
    },
    {
      "@context": "https://schema.org",
      "@type": "Person",
      name: `${providers.medicalDirector.name}, ${providers.medicalDirector.credentials}`,
      jobTitle: providers.medicalDirector.role,
      worksFor: { "@id": `${business.website}/#business` },
      image: `${business.website}${providers.medicalDirector.image}`,
      description: providers.medicalDirector.shortBio,
    },
  ];
}

export function buildFaqSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };
}

export function buildBreadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${business.website}${item.path}`,
    })),
  };
}

export function buildServiceSchema(service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.summary,
    provider: { "@id": `${business.website}/#business` },
    areaServed: {
      "@type": "City",
      name: "San Diego",
    },
    url: `${business.website}/services/${service.slug}`,
  };
}

export function getAllServices() {
  return services;
}
