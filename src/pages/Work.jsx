import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";
import LogoPill from "../components/site/LogoPill.jsx";
import VideoEmbed from "../components/site/VideoEmbed.jsx";
import { clients } from "../data/clients.js";

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

export default function Work() {
  const [open, setOpen] = React.useState(null);

  return (
    <div>
      <SectionShell
        id="clients"
        kicker="Our Work"
        title={
          <span>
            Clients <span className="text-brand-red">•</span> logos
          </span>
        }
        subtitle="Logo-only grid, equal sizing, subtle hover. Replace placeholders with real logos for maximum impact."
      >
        <div className="card p-6 sm:p-7">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <LogoPill key={c.name} text={c.logoText} title={c.name} />
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="case-studies"
        kicker="Case studies"
        title={
          <span>
            Work that builds <span className="text-brand-red">trust</span>
          </span>
        }
        subtitle="A premium layout: one featured engagement plus supporting work blocks for quick scanning."
      >
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Featured */}
          <div className="lg:col-span-2 card overflow-hidden">
            <div className="p-7 sm:p-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-brand-mist px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                {featured.tag}
              </div>

              <h2 className="mt-4 text-2xl font-semibold text-brand-indigo">{featured.title}</h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed">{featured.desc}</p>

              <ul className="mt-5 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {featured.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
                >
                  Discuss a project
                </a>
                <a
                  href="/services"
                  className="inline-flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-slate-50 transition"
                >
                  View services
                </a>
              </div>
            </div>

            <div className="h-2 bg-gradient-to-r from-brand-indigo to-brand-red" />
          </div>

          {/* Supporting cards */}
          <div className="grid gap-6">
            {cases.map((c) => (
              <div key={c.title} className="card p-7 card-hover">
                <div className="text-xs font-semibold text-brand-red tracking-widest uppercase">{c.tag}</div>
                <h3 className="mt-2 text-lg font-semibold text-brand-indigo">{c.title}</h3>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">{c.desc}</p>
                <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-red" />
              </div>
            ))}
          </div>
        </div>
      </SectionShell>

      <SectionShell
        id="testimonials"
        kicker="Testimonials"
        title={
          <span>
            Client <span className="text-brand-red">video</span> testimonials
          </span>
        }
        subtitle="You can embed YouTube now, and later switch to your own storage (MP4) link without changing the UI."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {testimonials.map((t, idx) => (
            <button
              key={t.name}
              onClick={() => setOpen(idx)}
              className="card overflow-hidden text-left card-hover"
            >
              <div className="aspect-video bg-slate-100 relative">
                <img src={t.thumb} alt="" className="h-full w-full object-cover" />
                <div className="absolute inset-0 bg-slate-900/30 grid place-items-center">
                  <div className="rounded-full bg-white/95 px-4 py-2 text-sm font-semibold text-brand-indigo">
                    Play <span className="text-brand-red">▶</span>
                  </div>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-semibold text-brand-indigo">{t.name}</h3>
                <p className="mt-1 text-sm text-slate-600">{t.org}</p>
              </div>
            </button>
          ))}
        </div>

        {open !== null && (
          <div
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4"
            role="dialog"
            aria-modal="true"
          >
            <div className="w-full max-w-4xl card overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-slate-200">
                <div className="text-sm font-semibold text-brand-indigo">
                  Testimonial <span className="text-brand-red">•</span>
                </div>
                <button
                  onClick={() => setOpen(null)}
                  className="rounded-xl px-3 py-2 text-sm font-semibold text-slate-700 hover:bg-slate-50 transition"
                >
                  Close
                </button>
              </div>
              <div className="p-4">
                <VideoEmbed
                  type={testimonials[open].type}
                  src={testimonials[open].src}
                  title="Client testimonial video"
                />
                <div className="mt-3 text-xs text-slate-500">
                  To use your own storage later, set <span className="font-semibold">type="file"</span> and provide an MP4 URL.
                </div>
              </div>
            </div>
          </div>
        )}
      </SectionShell>
    </div>
  );
}
