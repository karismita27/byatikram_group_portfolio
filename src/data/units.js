
/**
* Group subsidiaries / units data
* - Add new subsidiaries by appending a new object to `units`
* - `slug` must be unique and URL-safe (used for /subsidiaries/:slug)
* - `logoSrc` is optional; if not provided, UI falls back to `logoText` (or initials)
*
* Notes:
* - Contact page/footer may also read from here, so keep address/email/phone/maps present.
*/

import aboutImg from "../assets/images/about.png";
import mainLogo from "../assets/images/main_logo.png";

// Optional placeholder gallery images (replace with real subsidiary assets)
import img1 from "../assets/images/client-logos/awesome-assam.png";
import img2 from "../assets/images/client-logos/incredible-india.png";
import img3 from "../assets/images/client-logos/big-fm-92.png";
import img4 from "../assets/images/client-logos/aurus-mall.jpg";

import ba from "../assets/images/bharatiya_associates.png";
import bm from "../assets/images/byatikram_masdo.png";
import ma from "../assets/images/meraki_associates.png";
import lc from "../assets/images/lions_club.png";
import ne from "../assets/images/ne_global_ventures.png";

export const units = [
  {
    slug: "bharatiya-associates",
    name: "Bharatiya Associates",
    legalName: "Bharatiya Associates",
    logoText: "BA",
    logoSrc: ba,
    shortDescription:
      "Public affairs and stakeholder communications practice supporting institutions, industry bodies, and mission-led programs.",
    description:
      "Bharatiya Associates is a group practice focused on public affairs, institutional communications, and stakeholder coordination. The team supports leadership messaging, media readiness, and high-sensitivity engagements where precision, tone discipline, and documentation quality are non-negotiable. Engagements typically include narrative development, spokesperson preparation, media liaison, and structured reporting to help decision-makers track outcomes and mitigate reputational risk.",
    services: [
      "Public affairs and institutional communications",
      "Stakeholder mapping and engagement planning",
      "Spokesperson briefing (Q&A, key messages, talking points)",
      "Media liaison and issue-response coordination",
      "Engagement reporting (coverage, highlights, learnings)",
    ],
    gallery: [
      { src: img1, alt: "Stakeholder engagement documentation and briefing material" },
      { src: img2, alt: "Institutional communications and public information outreach" },
      { src: img3, alt: "Media coordination and broadcast support (illustrative)" },
    ],
    address: "Guwahati, Assam, India",
    email: "info@bharatiyaassociates.example",
    phone: "+91 00000 00000",
    website: null,
    maps: "https://maps.google.com/?q=Guwahati",
  },

  {
    slug: "bmasdo",
    name: "BMASDO",
    legalName: "BMASDO",
    logoText: "BM",
    logoSrc: bm,
    shortDescription:
      "Program delivery and on-ground operations unit for conferences, public events, and coordinated launches.",
    description:
      "BMASDO is the group’s execution and operations division. It manages on-ground delivery across conferences, public events, and multi-stakeholder programs. The unit works through disciplined runbooks—scope control, vendor management, timing, guest protocol, and contingency planning—so delivery remains consistent even under pressure. Post-event, BMASDO compiles structured documentation and operational learnings for internal governance and future iterations.",
    services: [
      "Event operations and production management",
      "Vendor coordination and procurement oversight",
      "Guest protocol and on-ground logistics",
      "Runbook, checklists, and contingency planning",
      "Post-event documentation and reporting",
    ],
    gallery: [
      { src: img4, alt: "Event venue and production setup (illustrative)" },
      { src: aboutImg, alt: "Team and operations coordination (illustrative)" },
      { src: img1, alt: "Program execution documentation (illustrative)" },
    ],
    address: "Guwahati, Assam, India",
    email: "contact@bmasdo.example",
    phone: "+91 00000 00000",
    website: null,
    maps: "https://maps.google.com/?q=Guwahati",
  },

  {
    slug: "byatikram-digital",
    name: "Byatikram Digital",
    legalName: "Byatikram Digital",
    logoText: "BD",
    logoSrc: null,
    shortDescription:
      "Digital communications and brand systems unit delivering content, campaigns, and web presence with consistent tone.",
    description:
      "Byatikram Digital leads the group’s digital communications and brand implementation work. The unit builds brand systems that translate messaging into consistent visuals and content—across web presence, campaign collateral, social communication, and digital press kits. The focus is corporate clarity: reliable formatting, approval-ready deliverables, and measurable outputs aligned with reputation goals rather than vanity engagement.",
    services: [
      "Brand identity execution and digital guidelines",
      "Website content and corporate copy systems",
      "Campaign messaging and content calendars",
      "Creative production (print + digital collateral)",
      "Digital reporting and performance tracking",
    ],
    gallery: [
      { src: mainLogo, alt: "Brand identity and collateral system (illustrative)" },
      { src: img3, alt: "Digital campaign coordination (illustrative)" },
      { src: img2, alt: "Press kit and institutional content (illustrative)" },
    ],
    address: "Guwahati, Assam, India",
    email: "hello@byatikramdigital.example",
    phone: "+91 00000 00000",
    website: null,
    maps: "https://maps.google.com/?q=Guwahati",
  },

  {
    slug: "meraki-associates",
    name: "MERAKI Associates",
    legalName: "MERAKI Associates",
    logoText: "MA",
    logoSrc: ma,
    shortDescription:
      "Advisory and communications strategy unit supporting leadership positioning, narrative clarity, and governance-ready documentation.",
    description:
      "MERAKI Associates is the group’s advisory and strategy unit. It supports leadership positioning and communications clarity—especially where governance, credibility, and stakeholder trust are central. Typical work includes narrative frameworks, leadership messaging, crisis preparedness, and documentation that can be reviewed internally and used repeatedly across teams. The approach is structured and conservative by design: clear claims, evidence alignment, and consistent tone.",
    services: [
      "Communications strategy and narrative frameworks",
      "Leadership positioning and messaging architecture",
      "Crisis preparedness and response playbooks",
      "Internal comms and governance documentation",
      "Stakeholder and media brief development",
    ],
    gallery: [
      { src: img2, alt: "Strategic communications documentation (illustrative)" },
      { src: img1, alt: "Governance-ready briefing material (illustrative)" },
      { src: img4, alt: "High-visibility program support (illustrative)" },
    ],
    address: "Guwahati, Assam, India",
    email: "team@merakiassociates.example",
    phone: "+91 00000 00000",
    website: null,
    maps: "https://maps.google.com/?q=Guwahati",
  },

  {
    slug: "lions-club-byatikram",
    name: "Lions Club of Guwahati Byatikram",
    legalName: "Lions Club of Guwahati Byatikram",
    logoText: "LC",
    logoSrc: lc,
    shortDescription:
      "Community engagement and social initiatives division coordinating outreach, partnerships, and local impact programs.",
    description:
      "Lions Club of Guwahati Byatikram is the group’s community engagement division. It coordinates social initiatives, public service partnerships, and community-facing programs. The division applies the same operational discipline as corporate engagements—clear scope, responsible tone, and documentation—so initiatives remain accountable, measurable, and aligned with community benefit.",
    services: [
      "Community program design and execution",
      "Partnership coordination with institutions and NGOs",
      "Local outreach and public information campaigns",
      "Volunteer coordination and on-ground logistics",
      "Impact documentation and stakeholder reporting",
    ],
    gallery: [
      { src: img1, alt: "Community program activity (illustrative)" },
      { src: aboutImg, alt: "Volunteer and team coordination (illustrative)" },
      { src: img3, alt: "Public outreach and media coverage (illustrative)" },
    ],
    address: "Guwahati, Assam, India",
    email: "lions@byatikram.example",
    phone: "+91 00000 00000",
    website: null,
    maps: "https://maps.google.com/?q=Guwahati",
  },

  {
    slug: "north-east-global-ventures",
    name: "North East Global Ventures",
    legalName: "North East Global Ventures",
    logoText: "NE",
    logoSrc: ne,
    shortDescription:
      "Partnership and venture support unit working on strategic collaborations, institutional programs, and growth initiatives.",
    description:
      "North East Global Ventures supports strategic collaborations and growth initiatives under the group. The unit focuses on partnership development, program structuring, and institutional coordination—helping stakeholders align objectives, scope, and outcomes before execution. Work is documented and decision-oriented, enabling leadership to review trade-offs and maintain clarity across partners.",
    services: [
      "Partnership strategy and program structuring",
      "Institutional coordination and stakeholder alignment",
      "Communications support for initiatives and launches",
      "Program governance and documentation",
      "Post-engagement reviews and learnings",
    ],
    gallery: [
      { src: img4, alt: "Partnership event and collaboration (illustrative)" },
      { src: img2, alt: "Institutional program communications (illustrative)" },
      { src: img1, alt: "Program documentation and reporting (illustrative)" },
    ],
    address: "Guwahati, Assam, India",
    email: "ventures@negv.example",
    phone: "+91 00000 00000",
    website: null,
    maps: "https://maps.google.com/?q=Guwahati",
  },
];

export const groupContact = {
  email: "business@byatikram.in",
  phone: "+91 00000 00000",
  address: "Head Office, Guwahati, Assam, India",
  mapEmbedUrl:
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d0!2d0!3d0!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0%3A0!2zR3V3YWhhdGk!5e0!3m2!1sen!2sin!4v0000000000000",
};
