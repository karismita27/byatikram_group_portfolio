import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";
import { units } from "../data/units.js";

const values = [
  { emoji: "🧠", title: "Clarity", desc: "We simplify complexity into messaging that stakeholders understand quickly." },
  { emoji: "🧭", title: "Integrity", desc: "Credibility is non-negotiable—facts, tone, and responsibility matter." },
  { emoji: "⚡", title: "Responsiveness", desc: "Fast, disciplined execution with clear ownership and timelines." },
  { emoji: "📈", title: "Outcomes", desc: "We measure progress—coverage, sentiment, and business relevance." },
];

export default function About() {
  return (
    <div>
      {/* OUR STORY */}
      <SectionShell
        kicker="About Us"
        title={
          <span>
            Our <span className="text-brand-red">story</span>
          </span>
        }
        subtitle="A communications and PR group focused on disciplined execution, media readiness, and trust-building."
      >
        <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
          {/* Left: Story */}
          <div className="card p-7">
            <h1 className="text-2xl font-semibold text-brand-indigo">
              Byatikram Group <span className="text-brand-red">•</span>
            </h1>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              We deliver public relations, media outreach, event management, digital communication, and community
              initiatives. Our work is structured—so execution stays consistent even under pressure.
            </p>
            <p className="mt-4 text-sm text-slate-600 leading-relaxed">
              The goal is simple: help organizations communicate with clarity, strengthen reputation, and deliver
              outcomes across stakeholders—media, public, partners, and community.
            </p>

            {/* Mission / Vision distinct cards */}
            <div className="mt-7 grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white ring-1 ring-slate-200 p-5">
                <div className="text-xs font-semibold text-brand-red tracking-widest">MISSION</div>
                <div className="mt-2 text-base font-semibold text-brand-indigo">
                  Deliver PR, events, and digital campaigns with professional execution.
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  Clear scope, reliable timelines, and media-ready outputs that reduce friction.
                </p>
              </div>

              <div className="rounded-2xl bg-brand-mist ring-1 ring-slate-200 p-5">
                <div className="text-xs font-semibold text-brand-red tracking-widest">VISION</div>
                <div className="mt-2 text-base font-semibold text-brand-indigo">
                  Build trust through structured communication and community impact.
                </div>
                <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                  A partner known for credibility, consistency, and measurable visibility.
                </p>
              </div>
            </div>
          </div>

          {/* Right: Image (placeholder) */}
          <div className="card overflow-hidden">
            <div className="relative h-64 sm:h-80 bg-gradient-to-br from-brand-indigo to-brand-red">
              <div className="absolute inset-0 bg-black/10" />
              <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3">
                <div className="text-xs font-semibold text-slate-600">Replace this with a real photo</div>
                <div className="mt-0.5 text-sm font-semibold text-brand-indigo">
                  Office • Team • Events <span className="text-brand-red">●</span>
                </div>
              </div>
            </div>
            <div className="p-6">
              <h2 className="text-lg font-semibold text-brand-indigo">Brand presence</h2>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                Use a high-quality team photo, office photo, or event photo. This instantly makes the page feel premium.
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      {/* VALUES */}
      <SectionShell
        kicker="Values"
        title={
          <span>
            Our <span className="text-brand-red">values</span>
          </span>
        }
        subtitle="Four clear values—presented as professional cards with emoji for quick scanning."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((v) => (
            <div key={v.title} className="card p-6 card-hover">
              <div className="text-3xl">{v.emoji}</div>
              <h3 className="mt-3 text-base font-semibold text-brand-indigo">{v.title}</h3>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{v.desc}</p>
              <div className="mt-4 h-[2px] w-10 rounded-full bg-brand-red" />
            </div>
          ))}
        </div>
      </SectionShell>

      {/* TEAM */}
      <SectionShell
        kicker="Team"
        title={
          <span>
            Expert team across <span className="text-brand-red">units</span>
          </span>
        }
        subtitle="Disciplined delivery across PR, events, digital, and stakeholder communications."
      >
        <div className="grid gap-4 md:grid-cols-3">
          {[
            { title: "PR & Media", desc: "Press relations, storytelling, reputation programs." },
            { title: "Events & Production", desc: "Operations, coordination, on-ground execution." },
            { title: "Digital & Creative", desc: "Brand systems, content, campaigns." },
          ].map((x) => (
            <div key={x.title} className="card p-6 card-hover">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-brand-indigo">{x.title}</h3>
                <span className="h-2 w-2 rounded-full bg-brand-red" />
              </div>
              <p className="mt-2 text-sm text-slate-600 leading-relaxed">{x.desc}</p>
            </div>
          ))}
        </div>
      </SectionShell>

      {/* UNITS */}
      <SectionShell
        kicker="Our Units"
        title={
          <span>
            Group <span className="text-brand-red">units</span>
          </span>
        }
        subtitle="Replace placeholder logos with real unit logos for a more premium look."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <div key={u.name} className="card p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="h-12 w-12 rounded-2xl bg-brand-mist ring-1 ring-slate-200 grid place-items-center font-bold text-slate-700">
                  {u.logoText}
                </div>
                <div>
                  <h3 className="text-base font-semibold text-brand-indigo">{u.name}</h3>
                  <p className="mt-1 text-sm text-slate-600">{u.address}</p>
                </div>
              </div>
              <div className="mt-4 flex items-center justify-between">
                <div className="text-xs text-slate-500">Logo placeholder</div>
                <div className="text-xs font-semibold text-brand-red">Update assets</div>
              </div>
            </div>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
