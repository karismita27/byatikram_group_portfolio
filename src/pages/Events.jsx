
import React from "react";
import { X, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import SectionShell from "../components/site/SectionShell.jsx";

import g1 from "../assets/images/events/p-1.jpg";
import g2 from "../assets/images/events/p-2.jpg";
import g3 from "../assets/images/events/p-3.jpg";
import g4 from "../assets/images/events/p-4.jpg";
import g5 from "../assets/images/events/p-5.jpg";
import g6 from "../assets/images/events/p-6.jpg";
import g7 from "../assets/images/events/p-7.jpg";
import g8 from "../assets/images/events/p-8.jpg";
import g9 from "../assets/images/events/p-9.jpg";
import g10 from "../assets/images/events/p10.jpg";
import g11 from "../assets/images/events/p-11.jpg";
import g12 from "../assets/images/events/p-12.jpg";
import g13 from "../assets/images/events/p13.jpg";
import g14 from "../assets/images/events/p-14.jpg";
import g15 from "../assets/images/events/p-15.jpg";
import g16 from "../assets/images/events/p-16.jpg";
import g17 from "../assets/images/events/p-17.jpg";
import g18 from "../assets/images/events/p-18.jpg";
import g19 from "../assets/images/events/p-24.jpg";
import g20 from "../assets/images/events/p-26.jpg";

/* =======================
   EVENTS DATA
======================= */

const upcoming = [
  {
    date: "2026-04-05",
    title: "Arijit Singh Live in Concert",
    place: "Guwahati",
    note: "A magical live concert featuring soulful melodies, live orchestra, and special performances.",
    tag: "Concert",
    img: g1,
    hasTickets: true,
    bookingUrl: "/contact",
  },
  {
    date: "2026-05-12",
    title: "Corporate Leadership Meet",
    place: "Assam",
    note: "Closed-door leadership and stakeholder interaction focused on strategy and growth.",
    tag: "Conference",
    img: g2,
    hasTickets: false,
  },
];

const past = [
  {
    date: "2025-10-14",
    title: "Brand Activation",
    place: "Guwahati",
    note: "Campaign execution with media engagement and follow-up.",
    tag: "Activation",
    img: g3,
  },
  {
    date: "2025-09-02",
    title: "Press Conference",
    place: "Assam",
    note: "Press briefing, Q&A, and coverage tracking.",
    tag: "Press",
    img: g4,
  },
];

/* =======================
   GALLERY DATA
======================= */

const gallery = [
  { title: "Event Highlight 01", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g1 },
  { title: "Event Highlight 02", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g2 },
  { title: "Event Highlight 03", date: "2025-01-01", place: "Assam", tag: "Event", img: g3 },
  { title: "Event Highlight 04", date: "2025-01-01", place: "Assam", tag: "Event", img: g4 },
  { title: "Event Highlight 05", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g5 },
  { title: "Event Highlight 06", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g6 },
  { title: "Event Highlight 07", date: "2025-01-01", place: "Assam", tag: "Event", img: g7 },
  { title: "Event Highlight 08", date: "2025-01-01", place: "Assam", tag: "Event", img: g8 },
  { title: "Event Highlight 09", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g9 },
  { title: "Event Highlight 10", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g10 },
  { title: "Event Highlight 11", date: "2025-01-01", place: "Assam", tag: "Event", img: g11 },
  { title: "Event Highlight 12", date: "2025-01-01", place: "Assam", tag: "Event", img: g12 },
  { title: "Event Highlight 13", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g13 },
  { title: "Event Highlight 14", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g14 },
  { title: "Event Highlight 15", date: "2025-01-01", place: "Assam", tag: "Event", img: g15 },
  { title: "Event Highlight 16", date: "2025-01-01", place: "Assam", tag: "Event", img: g16 },
  { title: "Event Highlight 17", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g17 },
  { title: "Event Highlight 18", date: "2025-01-01", place: "Guwahati", tag: "Event", img: g18 },
  { title: "Event Highlight 19", date: "2025-01-01", place: "Assam", tag: "Event", img: g19 },
  { title: "Event Highlight 20", date: "2025-01-01", place: "Assam", tag: "Event", img: g20 },
];

function DatePill({ date, className = "" }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1",
        "ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700",
        className,
      ].join(" ")}
    >
      <span className="h-2 w-2 rounded-full bg-brand-red" />
      {date}
    </div>
  );
}

function TagPill({ tag, className = "" }) {
  return (
    <div
      className={[
        "inline-flex items-center gap-2 rounded-full bg-white/85 px-3 py-1",
        "ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700",
        className,
      ].join(" ")}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-brand-red" />
      {tag}
    </div>
  );
}

function SectionHeader({ kicker, title, subtitle }) {
  return (
    <div className="flex items-end justify-between gap-6">
      <div>
        <div className="kicker">{kicker}</div>
        <h3 className="mt-2 text-2xl font-semibold text-brand-indigo">
          {title} <span className="text-brand-red">•</span>
        </h3>
        {subtitle ? <p className="mt-2 text-sm text-slate-600 max-w-2xl">{subtitle}</p> : null}
      </div>
    </div>
  );
}

function EventCard({ e, kind = "upcoming" }) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-200/70 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-indigo/20">
      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand-indigo via-brand-red to-brand-indigo opacity-90" />
      <div className="p-5 sm:p-6">
        <div className="grid gap-5 sm:grid-cols-[180px_1fr] sm:items-start">
          {/* Image */}
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 ring-1 ring-slate-200/70">
            <img
              src={e.img}
              alt={e.title}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent opacity-70" />
            <div className="absolute left-2 top-0">
              <TagPill tag={e.tag} className="bg-white/90 text-[8px] px-2 py-[2px]" />
            </div>
          </div>

          {/* Content */}
          <div className="min-w-0">
            <div className="flex flex-wrap items-center gap-2">
              <DatePill date={e.date} />
              <div className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                <MapPin className="h-3.5 w-3.5 text-brand-red" />
                {e.place}
              </div>

              {kind === "past" ? (
                <span className="text-xs font-semibold text-slate-400">Event concluded</span>
              ) : null}
            </div>

            <div className="mt-3 text-lg font-semibold text-brand-indigo leading-snug">
              {e.title}
            </div>
            <div className="mt-1 text-sm text-slate-600 leading-relaxed">{e.note}</div>

            {/* CTA row */}
            {kind === "upcoming" ? (
              <div className="mt-5 flex flex-wrap items-center gap-3">
                {e.hasTickets ? (
                  <a
                    href={e.bookingUrl}
                    className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-5 py-2.5 text-sm font-semibold text-white hover:opacity-95 transition"
                  >
                    Book Tickets
                  </a>
                ) : (
                  <span className="text-sm font-semibold text-slate-500">
                    Entry by invitation only
                  </span>
                )}

                <span className="text-xs text-slate-400">
                  For coordination or partnerships, contact our team.
                </span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Events() {
  const [open, setOpen] = React.useState(null);

  // Modal keyboard + navigation
  React.useEffect(() => {
    if (open === null) return;

    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i + 1) % gallery.length);
      if (e.key === "ArrowLeft") setOpen((i) => (i - 1 + gallery.length) % gallery.length);
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <div className="bg-white">
      {/* PAGE INTRO */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(49,46,129,0.06),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(220,38,38,0.06),transparent_30%)]" />
        <div className="container-pad relative py-14 sm:py-18 lg:py-22">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-700 ring-1 ring-slate-200/80 shadow-sm">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                Events • Activations • Conferences • Community Programs
              </div>

              <h1 className="mt-9 text-3xl sm:text-4xl lg:text-4xl font-semibold tracking-tight text-brand-indigo">
                Events delivered with operational discipline and stakeholder-ready documentation
              </h1>

              <p className="mt-7 max-w-2xl text-sm sm:text-base leading-relaxed text-slate-600">
                A curated view of upcoming engagements, past deliveries, and visual highlights—designed
                to demonstrate execution quality, on-ground control, and professional wrap-ups.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-red px-6 py-3 text-sm font-semibold text-white transition hover:opacity-95"
                >
                  Plan an event
                </a>
                <a
                  href="#highlights"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("highlights");
                    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                  }}
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-indigo ring-1 ring-slate-200 transition hover:bg-slate-50"
                >
                  View highlights
                </a>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="rounded-[28px] bg-white p-6 sm:p-7 ring-1 ring-slate-200/80 shadow-sm">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { label: "Delivery", value: "Runbooks + control" },
                    { label: "Coordination", value: "Vendors + stakeholders" },
                    { label: "Media readiness", value: "Press corners + briefs" },
                    { label: "Wrap-up", value: "Reports + documentation" },
                  ].map((item) => (
                    <div key={item.label} className="rounded-2xl bg-slate-50 p-4 ring-1 ring-slate-200/70">
                      <div className="text-[11px] font-medium uppercase tracking-[0.14em] text-slate-500">
                        {item.label}
                      </div>
                      <div className="mt-1.5 text-sm font-semibold text-slate-800">{item.value}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-5 rounded-2xl bg-brand-mist p-4 ring-1 ring-slate-200/70">
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-brand-indigo">
                    What you’ll see here
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    Upcoming engagements, past delivery references, and a gallery of execution moments—production,
                    coordination, and stakeholder interaction.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <SectionShell
        kicker="Events"
        title={
          <span>
            Events <span className="text-brand-red">•</span> upcoming, past & highlights
          </span>
        }
        subtitle="Concerts, activations, conferences, and community initiatives—delivered with operational discipline."
        className="section-soft"
      >
        {/* =======================
            UPCOMING
        ======================= */}
        <div className="mt-2">
          <SectionHeader
            kicker="Upcoming"
            title="Upcoming engagements"
            subtitle="Key upcoming events—public and invitation-only."
          />

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {upcoming.map((e) => (
              <EventCard key={`${e.title}-${e.date}`} e={e} kind="upcoming" />
            ))}
          </div>
        </div>

        {/* =======================
            GALLERY
        ======================= */}
        <div id="highlights" className="mt-14">
          <SectionHeader
            kicker="Highlights"
            title="Event gallery"
            subtitle="Visual proof from recent engagements—media, production, and stakeholder moments."
          />

          {/* Gallery grid */}
          <div className="mt-6 grid gap-4 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5">
            {gallery.map((g, idx) => (
              <button
                key={`${g.title}-${idx}`}
                onClick={() => setOpen(idx)}
                type="button"
                className="group relative overflow-hidden rounded-[28px] ring-1 ring-slate-200/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:ring-brand-indigo/20 focus:outline-none focus:ring-2 focus:ring-brand-indigo/30"
                aria-label={`Open photo: ${g.title}`}
              >
                {/* Thumbnail */}
                <div className="aspect-[4/3] bg-slate-100 overflow-hidden">
                  <img
                    src={g.img}
                    alt={g.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]"
                    loading="lazy"
                  />
                </div>

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent opacity-0 group-hover:opacity-100 transition" />

                <div className="absolute left-2 top-1">
                  <TagPill tag={g.tag} className="bg-white/90 text-[8px] px-2 py-[2px]" />
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-3">
                  {/* mobile badge */}
                  <div className="sm:hidden inline-flex items-center gap-2 rounded-full bg-slate-950/40 backdrop-blur-sm px-3 py-1 text-[11px] font-semibold text-white max-w-full">
                    <span className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
                    <span className="truncate">
                      {g.place} • {g.date}
                    </span>
                  </div>

                  {/* hover caption */}
                  <div className="hidden sm:block opacity-0 group-hover:opacity-100 transition text-left">
                    <div className="text-white text-sm font-semibold line-clamp-1">{g.title}</div>
                    <div className="mt-1 text-white/80 text-xs">
                      {g.place} • {g.date}
                    </div>
                  </div>
                </div>
              </button>
            ))}
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
            >
              Plan an engagement
            </a>
            <a
              href="#past"
              onClick={(e) => {
                e.preventDefault();
                const el = document.getElementById("past");
                if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
              }}
              className="inline-flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-slate-50 transition"
            >
              View past events
            </a>
          </div>
        </div>

        {/* =======================
            PAST EVENTS
        ======================= */}
        <div id="past" className="mt-14">
          <SectionHeader
            kicker="Past"
            title="Past engagements"
            subtitle="A record of completed deliveries—useful for credibility and reference."
          />

          <div className="mt-6 grid gap-5 lg:grid-cols-2">
            {past.map((e) => (
              <EventCard key={`${e.title}-${e.date}`} e={e} kind="past" />
            ))}
          </div>
        </div>

        {/* =======================
            GALLERY MODAL (premium viewer)
        ======================= */}
        {open !== null && (
          <div
            className="fixed inset-0 z-50 bg-slate-950/65 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setOpen(null)}
            role="dialog"
            aria-modal="true"
          >
            <div
              className="w-full max-w-5xl overflow-hidden rounded-[28px] bg-white ring-1 ring-slate-200 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-3 border-b border-slate-200 px-4 py-4 sm:px-6">
                <div className="min-w-0">
                  <div className="font-semibold text-brand-indigo truncate">
                    {gallery[open].title}
                  </div>
                  <div className="mt-1 text-xs text-slate-500">
                    {gallery[open].tag} • {gallery[open].place} • {gallery[open].date}
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    className="rounded-xl bg-white ring-1 ring-slate-200 p-2 hover:bg-slate-50 transition"
                    onClick={() => setOpen((i) => (i - 1 + gallery.length) % gallery.length)}
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5 text-slate-700" />
                  </button>
                  <button
                    className="rounded-xl bg-white ring-1 ring-slate-200 p-2 hover:bg-slate-50 transition"
                    onClick={() => setOpen((i) => (i + 1) % gallery.length)}
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5 text-slate-700" />
                  </button>
                  <button
                    className="rounded-xl bg-white ring-1 ring-slate-200 p-2 hover:bg-slate-50 transition"
                    onClick={() => setOpen(null)}
                    aria-label="Close"
                  >
                    <X className="h-5 w-5 text-slate-700" />
                  </button>
                </div>
              </div>

              <img
                src={gallery[open].img}
alt={gallery[open].title}
                className="w-full max-h-[75vh] object-contain bg-slate-950"
              />
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
                  Plan an event with our team
                </div>

                <h2 className="mt-4 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight">
                  Execute professional events with clear coordination and reliable wrap-ups
                </h2>

                <p className="mt-4 max-w-2xl text-sm sm:text-base leading-relaxed text-white/80">
                  From conferences and launches to activations and community programs—we deliver with
                  runbooks, stakeholder coordination, on-ground control, and structured documentation.
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
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl bg-white px-6 py-3 text-sm font-semibold text-brand-indigo transition hover:bg-slate-100"
                >
                  View services
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}