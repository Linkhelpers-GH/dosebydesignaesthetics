export const business = {
  name: "Dose by Design",
  legalName: "Dose by Design",
  tagline: "Dosed for Balance. Designed for You.",
  philosophy:
    "Our goal isn't to change how you look. Our goal is to help you look refreshed, rested, confident, and naturally beautiful.",
  description:
    "Personalized aesthetic medicine in San Diego focused on natural-looking results, education-first consultations, and unhurried care.",
  email: "info@dosebydesignaesthetics.com",
  phone: "(209) 991-2227",
  phoneTel: "+12099912227",
  address: {
    street: "4642 30th St Suite 104A",
    city: "San Diego",
    region: "CA",
    postalCode: "92116",
    country: "US",
    full: "4642 30th St Suite 104A, San Diego, CA 92116",
  },
  locationNote:
    "Appointments are by reservation. Please arrive a few minutes early and call or text if you need help finding Suite 104A.",
  geo: {
    latitude: 32.7601,
    longitude: -117.128,
  },
  hours: [
    { day: "Monday", hours: "Closed", opens: null, closes: null },
    { day: "Tuesday", hours: "Closed", opens: null, closes: null },
    { day: "Wednesday", hours: "9:00 AM to 6:00 PM", opens: "09:00", closes: "18:00" },
    { day: "Thursday", hours: "Closed", opens: null, closes: null },
    { day: "Friday", hours: "9:00 AM to 6:00 PM", opens: "09:00", closes: "18:00" },
    { day: "Saturday", hours: "9:00 AM to 5:00 PM", opens: "09:00", closes: "17:00" },
    { day: "Sunday", hours: "Closed", opens: null, closes: null },
  ],
  rating: {
    value: 5,
    count: 15,
    source: "Google",
  },
  bookingUrl: "https://dosebydesign.myaestheticrecord.com/online-booking",
  bookingAppointmentUrl:
    "https://dosebydesign.myaestheticrecord.com/online-booking/book-appointment",
  patientPortalUrl: "https://dosebydesign.myaestheticrecord.com/",
  instagram: "https://www.instagram.com/dosebydesign/",
  website: "https://www.dosebydesignaesthetics.info",
  mapsUrl:
    "https://www.google.com/maps/place/Dose+by+Design/@32.7601,-117.128,17z/data=!4m6!3m5!1s0x80d955daeec6a483:0x5171d6e5c32531e2!8m2!3d32.7601!4d-117.128!16s%2Fg%2F11y",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Dose+by+Design%2C+4642+30th+St+Suite+104A%2C+San+Diego%2C+CA+92116&z=16&output=embed",
  placeId: "ChIJg6TG7tpV2YAR4jElw-XWcVE",
};

export const providers = {
  cathy: {
    name: "Cathy Tang",
    credentials: "PA-C",
    role: "Founder & Aesthetic Injector",
    image: "/images/cathy-tang.jpg",
    shortBio:
      "Board-certified Physician Assistant specializing in injectables and skin rejuvenation, with a calm, collaborative approach to natural-looking results.",
    bio: [
      "Cathy Tang is a board-certified Physician Assistant and the founder of Dose by Design. She graduated from Massachusetts College of Pharmacy and Health Sciences in 2016 with her Master's Degree in Physician Assistant Studies.",
      "With approximately 10 years of experience as a Physician Assistant, including two years in Urgent Care and more than eight years specializing in aesthetic medicine, Cathy focuses on personalized treatment plans, honest recommendations, and results that still look like you.",
      "Originally from Boston, she moved to California in 2018. She regularly attends advanced aesthetic trainings and is Reiki certified, something she draws on to create a calming, comfortable patient experience (Reiki is not offered as a standalone medical service).",
      "Dose by Design was created after Cathy left a previous clinic where her values around patient care no longer aligned with the business. Instead of building another high-volume cosmetic practice, she designed a space centered on education, long-term relationships, and concierge-level care.",
    ],
  },
  medicalDirector: {
    name: "Dr. Abiade Short",
    credentials: "MD",
    role: "Medical Director",
    image: "/images/medical-director.png",
    shortBio:
      "Physician Medical Director with a background in women's health and a straightforward, patient-first approach to care.",
    bio: [
      "Dr. Abiade Short graduated in 2006 with his Doctorate's Degree in Medicine at Emory University in Atlanta. He brings over 16 years of experience in OB/GYN, with a straightforward, honest approach to patient care.",
      "His background in women's health and surgery complements aesthetic medicine, where attention to detail, patient safety, and individualized treatment are essential. Dr. Short values aesthetics as an extension of confidence and self-care, helping patients feel like the best version of themselves while maintaining natural, balanced results.",
    ],
  },
};

export const whatHappensNext = [
  "Book online for an in-person or virtual consultation.",
  "We review your goals, medical history, and candidacy together.",
  "You receive a clear plan, pricing context, and aftercare guidance.",
  "Treat the same day only if you feel ready. There is no pressure to decide immediately.",
];

export const services = [
  {
    slug: "neurotoxins",
    name: "Neurotoxins",
    shortName: "Wrinkle Relaxers",
    priceFrom: 300,
    duration: "About 1 hour",
    image: "/images/service-neurotoxins.jpg",
    imagePosition: "70% center",
    imageAlt: "Patient reflecting on refreshed facial appearance after aesthetic care",
    related: ["dermal-fillers", "microneedling"],
    summary:
      "Soften fine lines with neurotoxins such as Botox and similar treatments, while keeping natural movement.",
    opening:
      "Neurotoxins and Botox in San Diego at Dose by Design are planned for a rested look, not a frozen one. Cathy Tang, PA-C, maps treatment to your expressions during an unhurried visit.",
    sections: [
      {
        heading: "How neurotoxin treatment works",
        paragraphs: [
          "Neurotoxin treatments (including Botox and comparable wrinkle relaxers) gently relax targeted facial muscles to soften fine lines and help prevent deeper creases over time.",
          "Visits are planned around your expressions and comfort in San Diego. Most appointments are about an hour so you have time to ask questions before treatment.",
        ],
      },
      {
        heading: "Who is a good fit",
        paragraphs: [
          "A good fit if you want preventative or maintenance care for forehead lines, frown lines, or crow’s feet and prefer subtle, natural movement.",
          "Not ideal if you want dramatic change in one visit or are not ready for a medical consultation.",
        ],
      },
      {
        heading: "Prep and aftercare",
        paragraphs: [
          "Come with a clean face when possible and share recent procedures, medications, and goals during consultation.",
          "Aftercare is reviewed before you leave. Results develop over days and typically need maintenance.",
        ],
      },
      {
        heading: "What affects pricing",
        paragraphs: [
          "Online booking shows a starting rate from $300. Final cost varies by areas treated and units required. Your consultation clarifies options before you decide.",
        ],
      },
    ],
    concerns: ["Fine lines", "Wrinkles", "Looking tired", "Preventative care"],
  },
  {
    slug: "dermal-fillers",
    name: "Dermal Fillers",
    shortName: "Dermal Fillers",
    priceFrom: 400,
    duration: "About 1 hour",
    image: "/images/provider-portrait-2.jpg",
    imagePosition: "center 38%",
    imageAlt: "Close-up of a lip filler injection during an aesthetic appointment",
    related: ["filler-dissolver", "neurotoxins"],
    summary:
      "Restore volume and refine contours with dermal fillers, including lip filler, plus cheeks, jawline, and under-eyes.",
    opening:
      "Dermal fillers and lip filler in San Diego are approached conservatively at Dose by Design. The goal is balance that still looks like you, planned with Cathy Tang, PA-C.",
    sections: [
      {
        heading: "What dermal fillers can address",
        paragraphs: [
          "Dermal fillers can restore lost volume, soften lines, and support facial balance in San Diego patients. That may include lip filler, cheek support, jawline definition, or under-eye refinement when appropriate.",
          "We take a personalized, conservative approach. The aim is never to change your features, but to refresh and enhance your natural structure.",
        ],
      },
      {
        heading: "Who is a good fit",
        paragraphs: [
          "A good fit if you want subtle volume or contour support and are open to a collaborative plan.",
          "Not ideal if you want an overfilled look or same-day treatment without assessment.",
        ],
      },
      {
        heading: "Prep and aftercare",
        paragraphs: [
          "Your consultation covers candidacy, product selection, expected longevity, and aftercare.",
          "Swelling or bruising can occur. We review how to care for the treated area before you leave.",
        ],
      },
      {
        heading: "What affects pricing",
        paragraphs: [
          "Online booking shows a starting rate from $400. Final cost varies by product and amount used. Pricing is confirmed during consultation.",
        ],
      },
    ],
    concerns: ["Facial volume loss", "Facial asymmetry", "Looking tired", "Aging gracefully"],
  },
  {
    slug: "filler-dissolver",
    name: "Filler Dissolver",
    shortName: "Dissolve HA Filler",
    priceFrom: null,
    duration: "Consultation required",
    image: "/images/atmosphere-2.jpg",
    imagePosition: "center 42%",
    imageAlt: "Clinical injectable tray used in aesthetic medicine",
    related: ["dermal-fillers", "neurotoxins"],
    summary:
      "Dissolve hyaluronic acid filler to address overcorrection, migration, asymmetry, or unwanted results.",
    opening:
      "Filler dissolving in San Diego at Dose by Design starts with assessment. Cathy Tang, PA-C, focuses on precise, conservative correction when hyaluronic acid filler needs refinement.",
    sections: [
      {
        heading: "How dissolving works",
        paragraphs: [
          "Hyaluronic acid filler dissolving uses hyaluronidase to safely break down previously placed filler when refinement or correction is needed.",
          "Our San Diego approach is precise and conservative, focused on restoring balance and creating a clean foundation for future treatments if desired.",
        ],
      },
      {
        heading: "Who is a good fit",
        paragraphs: [
          "A good fit if you are unhappy with overcorrection, migration, asymmetry, or unwanted hyaluronic acid filler.",
          "Not every filler type can be dissolved the same way; we confirm product history during consultation.",
        ],
      },
      {
        heading: "What to expect",
        paragraphs: [
          "Expect assessment first. Dissolving may require follow-up, and future filler is optional, never assumed.",
          "Aftercare and timing for any future treatments are reviewed before you leave.",
        ],
      },
      {
        heading: "Pricing",
        paragraphs: [
          "Filler dissolving requires consultation first. Pricing depends on the amount and complexity of correction needed.",
        ],
      },
    ],
    concerns: ["Facial asymmetry", "Overcorrection", "Unwanted filler results"],
  },
  {
    slug: "microneedling",
    name: "Microneedling",
    shortName: "Microneedling",
    priceFrom: 400,
    duration: "About 1 hour",
    image: "/images/service-fillers.jpg",
    imagePosition: "center 35%",
    imageAlt: "Provider performing a facial microneedling treatment",
    related: ["neurotoxins", "dermal-fillers"],
    summary:
      "Support smoother-looking skin and a refreshed glow with a tailored microneedling session.",
    opening:
      "Microneedling in San Diego at Dose by Design is tailored to your skin goals in about an hour, with candidacy and aftercare reviewed before and after treatment.",
    sections: [
      {
        heading: "What microneedling involves",
        paragraphs: [
          "A 60-minute microneedling session designed to help improve the look of texture and tone for San Diego patients seeking a refreshed glow.",
          "We’ll tailor the treatment to your skin goals and provide aftercare guidance for best results.",
        ],
      },
      {
        heading: "Who is a good fit",
        paragraphs: [
          "A good fit if you want smoother-looking skin and a refreshed glow with downtime that fits a maintenance plan.",
          "Not ideal for every active skin condition; candidacy is reviewed in consultation.",
        ],
      },
      {
        heading: "Prep and aftercare",
        paragraphs: [
          "Arrive with clean skin when possible and share any recent treatments or sensitivities during your visit.",
          "Aftercare typically includes sun protection and a short recovery window.",
        ],
      },
      {
        heading: "What affects pricing",
        paragraphs: [
          "Online booking shows a starting rate from $400. Final cost may vary with add-ons discussed in your San Diego visit.",
        ],
      },
    ],
    concerns: ["Skin texture", "Skin tone", "Looking refreshed"],
  },
];

export const concerns = [
  "Fine lines & wrinkles",
  "Facial volume loss",
  "Skin laxity",
  "Facial asymmetry",
  "Looking tired or unrested",
  "Preventative aesthetic care",
];

export const journey = [
  {
    title: "Consultation",
    text: "We begin with time to listen: your goals, concerns, and what “looking like yourself” means to you.",
  },
  {
    title: "Discuss goals",
    text: "Together we clarify priorities so recommendations stay aligned with your lifestyle and comfort.",
  },
  {
    title: "Assessment",
    text: "A thoughtful facial assessment guides what will look natural and balanced on you.",
  },
  {
    title: "Treatment options",
    text: "You’ll receive clear education on options, benefits, expectations, and what we would or would not recommend.",
  },
  {
    title: "Personalized plan",
    text: "Plans are collaborative. You set the pace; we never rush decisions.",
  },
  {
    title: "Treatment & follow-up",
    text: "When you’re ready, treatment is precise and unhurried, with long-term follow-up for lasting relationships.",
  },
];

export const faqs = [
  {
    question: "What makes Dose by Design different?",
    answer:
      "Appointments are designed to feel unhurried, typically about an hour, so you can ask questions, learn your options, and build a plan without pressure. The focus is natural-looking results and long-term relationships, not high-volume sales.",
  },
  {
    question: "Who will I see for treatment?",
    answer:
      "Treatments are provided by Cathy Tang, PA-C, practicing under the supervision of Medical Director Dr. Abiade Short, MD.",
  },
  {
    question: "Do you offer virtual consultations?",
    answer:
      "Yes. You can book an in-person or virtual consultation through our online booking system.",
  },
  {
    question: "What affects treatment pricing?",
    answer:
      "Online booking lists starting rates for some services. Final cost varies by areas treated, product or units used, and your personalized plan. Your San Diego consultation covers pricing context before you decide.",
  },
  {
    question: "Where are you located?",
    answer:
      "Dose by Design is at 4642 30th St Suite 104A, San Diego, CA 92116. Book online or contact us for directions to your appointment.",
  },
  {
    question: "What are your hours?",
    answer:
      "Wednesday 9 AM to 6 PM, Friday 9 AM to 6 PM, and Saturday 9 AM to 5 PM. Closed Monday, Tuesday, Thursday, and Sunday.",
  },
  {
    question: "Do you offer financing?",
    answer:
      "Yes. Cherry financing is available to help make treatment more flexible. You can also explore our Banking Membership for monthly treatment credits and preferred member pricing.",
  },
  {
    question: "What is the Banking Membership?",
    answer:
      "For $100 per month, your payment is saved as a treatment credit while unlocking preferred member pricing on treatments. There is no long-term commitment; you can cancel anytime. Join through the Patient Portal.",
  },
];

export const membership = {
  price: 100,
  summary:
    "For $100 per month, your payment is saved as a treatment credit while unlocking preferred member pricing on all treatments. Build your treatment fund month by month and enjoy personalized care on your schedule. No long-term commitment; cancel anytime.",
};
