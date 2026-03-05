
import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";
import VideoEmbed from "../components/site/VideoEmbed.jsx";

const featured = {
  tag: "Featured engagement",
  title: "High-visibility communications & execution program",
  desc:
    "A structured delivery model across messaging, media coordination, on-ground operations, and post-delivery reporting—designed for credibility and visibility.",
  bullets: [
    "Narrative + proof points aligned with leadership intent",
    "Media-ready materials (press note, Q&A, spokesperson brief)",
    "Event/launch operational runbook and stakeholder coordination",
    "Reporting: coverage, highlights, learnings, next steps",
  ],
};

const cases = [
  {
    tag: "PR Strategy",
    title: "Reputation & visibility program",
    desc: "Press planning, media outreach, and consistent updates to maintain trust.",
  },
  {
    tag: "Events",
    title: "Conference / public event execution",
    desc: "Operations, vendor control, guest handling, and structured wrap-up reporting.",
  },
  {
    tag: "Digital",
    title: "Campaign messaging & content system",
    desc: "Clear tone, creative direction, content calendar, and iteration based on feedback.",
  },
];

const testimonials = [
  {
    name: "Client Name 1",
    org: "Organization A",
    thumb: "https://placehold.co/640x360/png",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Client Name 2",
    org: "Organization B",
    thumb: "https://placehold.co/640x360/png",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
  {
    name: "Client Name 3",
    org: "Organization C",
    thumb: "https://placehold.co/640x360/png",
    type: "youtube",
    src: "https://www.youtube.com/embed/dQw4w9WgXcQ",
  },
];

const services = [
  {
    title: "Public Relations & Media Outreach",
    desc: "Positioning, narrative, press materials, and outreach—delivered with structured reporting.",
    bullets: [
      "Messaging framework and narrative building",
      "Press releases, media kits, and spokesperson briefs",
      "Journalist outreach and media relationship management",
      "Coverage tracking and weekly/monthly reporting",
    ],
  },
  {
    title: "Event Management",
    desc: "End-to-end event production with reliable operations and stakeholder coordination.",
    bullets: [
      "Concept, planning, and production runbooks",
      "Vendor management and on-ground coordination",
      "Stage, sound, logistics, and guest handling",
      "Post-event documentation and wrap-up reports",
    ],
  },
  {
    title: "Digital Communication & Branding",
    desc: "Campaign planning, content systems, and brand consistency across digital channels.",
    bullets: [
      "Campaign planning and creative direction",
      "Content calendars for social channels",
      "Brand tone guidelines and asset systems",
      "Performance review and iterative improvement",
    ],
  },
  {
    title: "Social & Community Initiatives",
    desc: "CSR programs and community outreach with impact storytelling and responsible execution.",
    bullets: [
      "CSR initiative planning and delivery",
      "Partnerships and community coordination",
      "Volunteer engagement and operations",
      "Impact storytelling and structured reporting",
    ],
  },
];

const approach = [
  {
    n: "01",
    t: "Discovery",
    d: "Understand goals, stakeholders, risks, constraints, and the message environment.",
  },
  {
    n: "02",
    t: "Messaging",
    d: "Create narrative, proof points, press-ready materials, and spokesperson clarity.",
  },
  {
    n: "03",
    t: "Execution",
    d: "Outreach, events, digital campaigns—delivered with ownership and timelines.",
  },
  {
    n: "04",
    t: "Measurement",
    d: "Track coverage, sentiment, visibility, and progress with actionable reporting.",
  },
];

export default function Services() {
  const [open, setOpen] = React.useState(null);

  return (
    <div className="bg-white">
      {/* PAGE INTRO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,46,129,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.06),transparent_30%)]" />
        <div className="container-pad relative py-16 sm:py-20 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                Strategy-led PR • Events • Digital Communication
              </div>

              <h1 className="mt-5 lg:mt-10 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-brand-indigo">
                Services built for visibility, credibility, and disciplined execution
              </h1>

              <p className="mt-5 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
                We help organizations communicate clearly, execute reliably, and present
                themselves professionally across media, events, digital platforms, and
                stakeholder-facing initiatives.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Request a proposal
                </a>
                <a
                  href="#services-grid"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("services-grid");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-indigo ring-1 ring-slate-200 transition hover:bg-slate-50"
                >
                  Explore services
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Focus", value: "PR + Events" },
                    { label: "Approach", value: "Structured delivery" },
                    { label: "Outputs", value: "Media-ready assets" },
                    { label: "Reporting", value: "Clear + measurable" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70"
                    >
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        {item.label}
                      </div>
                      <div className="mt-1.5 text-sm font-semibold text-slate-800">
                        {item.value}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-brand-mist p-4 ring-1 ring-slate-200/70">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                    What clients value
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Clear scope, reliable coordination, quality communication materials, and
                    disciplined reporting across every engagement.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES GRID */}
      <SectionShell
        id="services-grid"
        kicker="Core Services"
        title={
          <span>
            What we do <span className="text-brand-red">professionally</span>
          </span>
        }
        subtitle="A structured service portfolio designed for scannability, stakeholder confidence, and high-quality execution."
        className="section-soft"
      >
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl text-sm leading-relaxed text-slate-600">
            From media outreach to event delivery and digital communication systems, each service
            is designed to support professional visibility and operational reliability.
          </div>

          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white px-5 py-2.5 text-sm font-semibold text-brand-indigo ring-1 ring-slate-200 transition hover:bg-slate-50"
          >
            Discuss your requirement
          </a>
        </div>

        <div className="grid gap-5 lg:grid-cols-2">
          {services.map((s, index) => (
            <div
              key={s.title}
              className="group relative overflow-hidden rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-indigo/20"
            >
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-indigo via-brand-red to-brand-indigo opacity-90" />
              <div className="absolute -right-16 -top-16 h-36 w-36 rounded-full bg-brand-red/5 blur-3xl transition duration-300 group-hover:bg-brand-indigo/10" />

              <div className="relative z-10">
                <div className="flex items-start justify-between gap-4">
                  <div className="max-w-[85%]">
                    <div className="inline-flex items-center rounded-full bg-brand-mist px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                      Service {String(index + 1).padStart(2, "0")}
                    </div>

                    <h2 className="mt-4 text-xl font-semibold tracking-tight text-brand-indigo">
                      {s.title}
                    </h2>

                    <p className="mt-3 text-sm leading-relaxed text-slate-600">{s.desc}</p>
                  </div>

                  <div className="shrink-0">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-indigo/10 to-brand-red/10 ring-1 ring-slate-200/80 transition duration-300 group-hover:scale-105 group-hover:ring-brand-red/20">
                      <span className="h-2.5 w-2.5 rounded-full bg-brand-red" />
                    </div>
                  </div>
                </div>

                <div className="mt-6 rounded-2xl bg-slate-50/90 p-4 ring-1 ring-slate-200/70">
                  <div className="mb-3 flex items-center gap-2">
                    <span className="h-[2px] w-8 rounded-full bg-brand-red" />
                    <span className="text-[11px] font-semibold uppercase tracking-[0.14em] text-slate-500">
                      Core deliverables
                    </span>
                  </div>

                  <ul className="grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-3">
                        <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                        </span>
                        <span className="leading-relaxed">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200/80 pt-5">
                  <div className="text-xs font-medium text-slate-500">
                    Scope clarity • Reliable execution
                  </div>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-brand-red transition group-hover:text-brand-indigo"
                  >
                    Enquire
                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* FEATURED DELIVERY */}
      <SectionShell
        id="delivery"
        kicker="Delivery"
        title={
          <span>
            Work that builds <span className="text-brand-red">trust</span>
          </span>
        }
        subtitle="A more editorial, premium section structure—one featured engagement supported by concise strategic blocks."
      >
        <div className="grid gap-6 lg:grid-cols-12">
          <div className="lg:col-span-8 rounded-[30px] overflow-hidden bg-white ring-1 ring-slate-200/80 shadow-sm">
            <div className="grid lg:grid-cols-12">
              <div className="lg:col-span-8 p-7 sm:p-8 lg:p-10">
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  {featured.tag}
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl font-semibold tracking-tight text-brand-indigo">
                  {featured.title}
                </h2>

                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
                  {featured.desc}
                </p>

                <ul className="mt-6 grid gap-3 text-sm text-slate-700 sm:grid-cols-2">
                  {featured.bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-1.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-white ring-1 ring-slate-200">
                        <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
                      </span>
                      <span className="leading-relaxed">{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-8 flex flex-col sm:flex-row gap-3">
                  <a
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
                  >
                    Discuss a project
                  </a>
                  <a
                    href="#services-grid"
                    onClick={(e) => {
                      e.preventDefault();
                      const el = document.getElementById("services-grid");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="inline-flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-slate-50 transition"
                  >
                    View services
                  </a>
                </div>
              </div>

              <div className="lg:col-span-4 bg-gradient-to-br from-brand-indigo to-slate-900 p-7 sm:p-8 text-white">
                <div className="text-xs font-semibold uppercase tracking-[0.16em] text-white/70">
                  Engagement focus
                </div>

                <div className="mt-4 space-y-4">
                  {[
                    "Leadership-aligned messaging",
                    "Media readiness and documentation",
                    "Operational control on ground",
                    "Structured post-delivery reporting",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl bg-white/10 px-4 py-3 ring-1 ring-white/10 backdrop-blur-sm"
                    >
                      <div className="flex items-start gap-3">
                        <span className="mt-1.5 h-2 w-2 rounded-full bg-brand-red shrink-0" />
                        <span className="text-sm leading-relaxed text-white/90">{item}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 text-xs text-white/65">
                  Designed for launches, public engagements, institutional communication, and high-visibility stakeholder moments.
                </div>
              </div>
            </div>

            <div className="h-1.5 bg-gradient-to-r from-brand-indigo via-brand-red to-brand-indigo" />
          </div>

          <div className="lg:col-span-4 grid gap-5">
            {cases.map((c) => (
              <div
                key={c.title}
                className="group rounded-[28px] bg-white p-7 ring-1 ring-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:ring-brand-indigo/20"
              >
                <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.14em] text-brand-red">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  {c.tag}
                </div>
                <h3 className="mt-4 text-lg font-semibold tracking-tight text-brand-indigo">
                  {c.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">{c.desc}</p>
                <div className="mt-5 h-[2px] w-12 rounded-full bg-brand-red transition-all duration-300 group-hover:w-20" />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      {/* APPROACH */}
      <SectionShell
        kicker="Approach"
        title={
          <span>
            A structured <span className="text-brand-red">working model</span>
          </span>
        }
        subtitle="A repeatable process that keeps communication clear, delivery accountable, and reporting useful."
        className="bg-brand-mist"
      >
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {approach.map((a) => (
            <div
              key={a.n}
              className="group rounded-[26px] bg-white p-6 ring-1 ring-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="text-sm font-semibold text-brand-red">{a.n}</div>
                <span className="h-2 w-2 rounded-full bg-brand-red" />
              </div>

              <h3 className="mt-4 text-lg font-semibold text-brand-indigo">{a.t}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{a.d}</p>

              <div className="mt-5 h-[2px] w-10 rounded-full bg-brand-red transition-all duration-300 group-hover:w-16" />
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
          <div className="grid gap-6 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-8">
              <h3 className="text-xl font-semibold text-brand-indigo">
        Why this process works
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                It reduces ambiguity, improves coordination, and ensures that communication,
                execution, and reporting remain aligned from planning through delivery.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col sm:flex-row lg:justify-end gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                Request a proposal
              </a>
              <a
                href="/events"
                className="inline-flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-slate-50 transition"
              >
                View events
              </a>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* TESTIMONIALS */}
      <SectionShell
        id="testimonials"
        kicker="Testimonials"
        title={
          <span>
            Client <span className="text-brand-red">video</span> testimonials
          </span>
        }
        subtitle="A clean, premium testimonial layout with video previews and a focused playback experience."
      >
        <div className="mb-6 flex items-center justify-between gap-4">
          <p className="max-w-2xl text-sm leading-relaxed text-slate-600">
            These can remain YouTube embeds for now. Later, you can switch to self-hosted MP4
            videos without redesigning the section.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setOpen(idx)}
              className="group overflow-hidden rounded-[28px] bg-white text-left ring-1 ring-slate-200/80 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-indigo/20"
            >
              <div className="relative aspect-video bg-slate-100 overflow-hidden">
                <img
                  src={t.thumb}
                  alt={t.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/65 via-slate-900/20 to-transparent" />
                <div className="absolute inset-0 grid place-items-center">
                  <div className="rounded-full bg-white/95 px-5 py-2.5 text-sm font-semibold text-brand-indigo shadow-sm">
                    Play <span className="text-brand-red">▶</span>
                  </div>
                </div>

                <div className="absolute left-4 right-4 bottom-4">
                  <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/45 px-3 py-1.5 text-[11px] font-semibold text-white backdrop-blur-sm">
                    <span className="h-2 w-2 rounded-full bg-brand-red" />
                    Client testimonial
                  </div>
                </div>
              </div>

<div className="p-5 sm:p-6">
                <h3 className="text-base font-semibold text-brand-indigo">{t.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.org}</p>
                <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-red transition-all duration-300 group-hover:w-16" />
              </div>
            </button>
          ))}
        </div>

        {open !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/65 p-4 backdrop-blur-sm"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-5xl overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-200 shadow-2xl">
              <div className="flex items-center justify-between border-b border-slate-200 px-4 py-4 sm:px-6">
                <div>
                  <div className="text-sm font-semibold text-brand-indigo">
                    {testimonials[open].name} <span className="text-brand-red">•</span>
                  </div>
                  <div className="mt-0.5 text-xs text-slate-500">
                    {testimonials[open].org}
                  </div>
                </div>

                <button
                  onClick={() => setOpen(null)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
                >
                  Close
                </button>
              </div>

              <div className="p-4 sm:p-6">
                <VideoEmbed
                  type={testimonials[open].type}
                  src={testimonials[open].src}
                  title="Client testimonial video"
                />
                <div className="mt-4 text-xs text-slate-500">
                  Later, you can change to <span className="font-semibold">type="file"</span> and
                  use your own MP4 URL while keeping the same UI structure.
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionShell>

      {/* FINAL CTA */}
      <section className="pb-16 sm:pb-20">
        <div className="container-pad">
          <div className="overflow-hidden rounded-[32px] bg-gradient-to-r from-brand-indigo to-slate-900 px-6 py-10 sm:px-8 sm:py-12 lg:px-12 lg:py-14 text-white shadow-xl">
            <div className="grid gap-8 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-8">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs font-semibold backdrop-blur-sm ring-1 ring-white/10">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  Ready to discuss your requirement
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                  Let’s build communication that looks professional and performs reliably
                </h2>

                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">
                  Whether you need media outreach, event execution, digital communication support,
                  or a structured stakeholder-facing campaign, we can shape the right delivery model.
                </p>
              </div>

              <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-3 lg:items-end">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Contact us
                </a>
                <a
                  href="/events"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-indigo transition hover:bg-slate-100"
                >
                  View our work
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

