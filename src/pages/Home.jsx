import React from "react";
import { NavLink } from "react-router-dom";
import SectionShell from "../components/site/SectionShell.jsx";
import StatPills from "../components/site/StatPills.jsx";
import LogoPill from "../components/site/LogoPill.jsx";
import { clients } from "../data/clients.js";
import aboutImg from "../assets/images/about.png";

const servicePreview = [
  {
    title: "Public Relations & Media Outreach",
    desc: "Narrative, media materials, outreach planning, and coverage tracking.",
    bullets: ["Messaging framework", "Press releases & kits", "Media outreach & follow-ups", "Coverage reporting"],
  },
  {
    title: "Event Management",
    desc: "End-to-end planning and execution—operations, vendors, stakeholders.",
    bullets: ["Concept & production", "Vendor coordination", "On-ground execution", "Post-event wrap-up"],
  },
  {
    title: "Digital Communication & Branding",
    desc: "Campaign content systems, creative direction, and consistent brand tone.",
    bullets: ["Campaign planning", "Content calendars", "Brand tone & assets", "Performance iteration"],
  },
  {
    title: "Social & Community Initiatives",
    desc: "Authentic community programs with clear delivery and impact storytelling.",
    bullets: ["CSR program delivery", "Partnerships", "Volunteer coordination", "Impact reporting"],
  },
];

export default function Home() {
  return (
    <div>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden">
        {/* brand presence without heavy blue */}
        <div className="absolute inset-0 bg-indigo-mist" />
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-brand-red/10 blur-3xl" />
        <div className="absolute -bottom-28 -left-28 h-80 w-80 rounded-full bg-brand-indigo/10 blur-3xl" />

        <div className="container-pad relative pt-20 pb-14 sm:pt-24 sm:pb-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                Corporate • PR • Communications
              </div>

              <h1 className="mt-4 text-4xl sm:text-5xl font-semibold text-brand-ink tracking-tight">
                Byatikram Group
              </h1>

              <p className="mt-5 text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                Strategy-led public relations and communications—built for stakeholder trust, media credibility,
                and consistent execution.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3">
                <NavLink to="/contact" className="btn-primary-red">
                  Contact Us
                </NavLink>
                <NavLink to="/events" className="btn-outline-indigo">
                  View Events
                </NavLink>
              </div>

              <div className="mt-10">
                <StatPills />
              </div>
            </div>

            <div className="card p-6 sm:p-8 bg-white/85 backdrop-blur">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h2 className="text-lg font-semibold text-brand-indigo">
                    What we do <span className="text-brand-red">•</span>
                  </h2>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                    End-to-end PR and communications delivery—from messaging and media relations to on-ground events and
                    digital campaigns.
                  </p>
                </div>
                <div className="hidden sm:flex items-center gap-2 rounded-full bg-white/80 px-3 py-2 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                  <span className="h-2 w-2 rounded-full bg-brand-indigo" />
                  Built for credibility
                </div>
              </div>

              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {[
                  { title: "Public Relations", desc: "Media outreach, press releases, reputation." },
                  { title: "Event Management", desc: "Planning, execution, stakeholder coordination." },
                  { title: "Digital Branding", desc: "Content systems, campaigns, creative direction." },
                  { title: "Community Initiatives", desc: "CSR, social programs, engagement." },
                ].map((x) => (
                  <div
                    key={x.title}
                    className="rounded-2xl bg-white p-4 ring-1 ring-slate-200/70 hover:ring-brand-indigo/30 transition"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="font-semibold text-slate-800">{x.title}</div>
                      <span className="h-2 w-2 rounded-full bg-brand-red" />
                    </div>
                    <div className="mt-1 text-sm text-slate-600">{x.desc}</div>
                  </div>
                ))}
              </div>

              <div className="mt-6">
                <NavLink to="/services" className="text-sm font-semibold text-brand-indigo link-underline">
                  Explore all services →
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* ABOUT PREVIEW */}
      <SectionShell
        id="about-preview"
        kicker="About"
        title={
          <span>
            A group built on <span className="text-brand-red">credibility</span> and execution
          </span>
        }
        subtitle="Clear strategy, precise delivery, and professional communication—designed to earn trust."
        className="section-soft"
      >
        
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

          <div className="card-pro p-7">
            <h3 className="text-xl font-semibold text-brand-indigo">Byatikram Group at a glance</h3>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              We support organizations with structured outreach, reputation building, and high-quality event execution.
              Our work is designed for stakeholder confidence—media, public, partners, and community.
            </p>

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              {[
                { t: "Clarity-first messaging", d: "Narratives and proof points that are easy to understand." },
                { t: "Operational execution", d: "Reliable delivery with ownership and timelines." },
                { t: "Media-ready outputs", d: "Press materials, briefs, and accurate information." },
                { t: "Reporting & wrap-ups", d: "Track coverage, outcomes, and next steps." },
              ].map((c) => (
                <div key={c.t} className="rounded-2xl bg-white p-4 ring-1 ring-slate-200/70 hover:ring-brand-indigo/25 transition">
                  <div className="flex items-start justify-between gap-3">
                    <div className="font-semibold text-slate-800">{c.t}</div>
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-red" />
                  </div>
                  <div className="mt-1 text-xs text-slate-600 leading-relaxed">{c.d}</div>
                </div>
              ))}
            </div>
            

            <div className="mt-7 flex flex-col sm:flex-row gap-3">
              <NavLink to="/about" className="btn-outline-indigo">
                Read more
              </NavLink>
              <NavLink to="/contact" className="btn-primary-red">
                Talk to us
              </NavLink>
            </div>
          </div>

          <div className="card-pro overflow-hidden">
            
<div
  className="relative aspect-[16/11] bg-cover bg-center"
  style={{ backgroundImage: `url(${aboutImg})` }}
>
  {/* dark overlay */}
  <div className="absolute inset-0 bg-slate-950/50"></div>

  {/* subtle light texture (optional) */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.15),transparent_40%)]"></div>

  {/* CONTENT — MUST be relative + z */}
  <div className="relative z-10 absolute bottom-0 left-0 right-0 p-6 text-white">
    <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-semibold">
      <span className="h-2 w-2 rounded-full bg-brand-red"></span>
      Credibility · Consistency · Delivery
    </div>

    <h4 className="mt-3 text-xl font-semibold">
      A partner built for public trust
    </h4>

    <p className="mt-2 text-sm text-white/80 max-w-md">
      Clean communication, disciplined execution, and stakeholder-ready outputs—across media, events, and digital.
    </p>
  </div>
</div>
            <div className="p-6 bg-white">
              <div className="grid gap-3 sm:grid-cols-3 text-sm">
                <div className="rounded-2xl bg-brand-mist p-4 ring-1 ring-slate-200/70">
                  <div className="text-xs text-slate-500">Experience</div>
                  <div className="mt-1 font-semibold text-slate-800">10+ years</div>
                </div>
                <div className="rounded-2xl bg-brand-mist p-4 ring-1 ring-slate-200/70">
                  <div className="text-xs text-slate-500">Clients served</div>
                  <div className="mt-1 font-semibold text-slate-800">100+</div>
                </div>
                <div className="rounded-2xl bg-brand-mist p-4 ring-1 ring-slate-200/70">
                  <div className="text-xs text-slate-500">Focus</div>
                  <div className="mt-1 font-semibold text-slate-800">PR + Events</div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </SectionShell>

      {/* SERVICES PREVIEW (upgraded) */}
      <SectionShell
        id="services-preview"
        kicker="Services"
        title={
          <span>
            Integrated communications with <span className="text-brand-red">measurable</span> outcomes
          </span>
        }
        subtitle="Premium service cards with clear descriptions and bullet points for fast scanning."
        className="section-soft"
      >
        <div className="grid gap-5 lg:grid-cols-2">
          {servicePreview.map((s) => (
            <div key={s.title} className="card-pro p-7 card-hover">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="text-lg font-semibold text-brand-indigo">{s.title}</h3>
                  <p className="mt-2 text-sm text-slate-600 leading-relaxed">{s.desc}</p>
                </div>
                <div className="shrink-0 icon-pill p-3">
                  <div className="h-2 w-2 rounded-full bg-brand-red" />
                </div>
              </div>

              <ul className="mt-4 grid gap-2 text-sm text-slate-600 sm:grid-cols-2">
                {s.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2">
                    <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-6 flex items-center justify-between">
                <div className="text-xs text-slate-500">Clear scope • Reliable delivery</div>
                <NavLink to="/services" className="text-sm font-semibold text-brand-indigo link-underline">
                  Details →
                </NavLink>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-9 flex flex-col sm:flex-row gap-3">
          <NavLink
            to="/services"
            className="inline-flex items-center justify-center rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
          >
            View all services
          </NavLink>
          <NavLink
            to="/contact"
            className="inline-flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-slate-50 transition"
          >
            Request a proposal
          </NavLink>
        </div>
      </SectionShell>

      {/* FOUNDER / VIDEO */}
      <SectionShell
        id="founder"
        kicker="Leadership"
        title={
          <span>
            Founder / Patron-in-Chief <span className="text-brand-red">video</span>
          </span>
        }
        subtitle="You can use YouTube now and later replace it with a storage (MP4) link—no layout changes needed."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          <div className="card overflow-hidden">
            <div className="aspect-video bg-gradient-to-br from-slate-900 to-brand-indigo grid place-items-center text-white">
              <div className="text-center px-6">
                <div className="text-sm opacity-80">Video Placeholder</div>
                <div className="mt-2 text-lg font-semibold">Founder Message</div>
                <div className="mt-1 text-sm opacity-80">Replace with YouTube embed or MP4</div>
              </div>
            </div>
            <div className="p-6">
              <h3 className="text-lg font-semibold text-brand-indigo">Why our approach works</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                We prioritize credibility, consistency, and stakeholder-friendly communication—so brands earn long-term trust.
              </p>
            </div>
          </div>

          <div className="card p-7">
            <h3 className="text-xl font-semibold text-brand-indigo">What clients experience</h3>
            <ul className="mt-4 space-y-3 text-sm text-slate-600">
              {[
                "Clear communication and milestone-based delivery",
                "Media-ready documentation and verified information",
                "Operational reliability for events and campaigns",
                "Reporting, learning, and post-delivery wrap-ups",
              ].map((x) => (
                <li key={x} className="flex items-start gap-2">
                  <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
                  <span>{x}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionShell>

      {/* CLIENT LOGOS PREVIEW (upgraded) */}
      <SectionShell
        id="clients-preview"
        kicker="Trust"
        title={
          <span>
            Clients & partners <span className="text-brand-red">•</span>
          </span>
        }
        subtitle="Logo-only grid, equal sizing, clean hover—professional and uncluttered."
      >
        <div className="card p-6 sm:p-7">
          <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {clients.map((c) => (
              <LogoPill key={c.name} text={c.logoText} title={c.name} />
            ))}
          </div>
        </div>
      </SectionShell>
    </div>
  );
}
