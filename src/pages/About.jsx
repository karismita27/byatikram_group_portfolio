import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";
import { units } from "../data/units.js";
import aboutImg from "../assets/images/about.png";
import { FaBrain, FaShieldAlt, FaBolt, FaChartLine, }from "react-icons/fa";

const values = [
  { icon: FaBrain, title: "Clarity", desc: "We simplify complexity into messaging that stakeholders understand quickly." },
  { icon: FaShieldAlt, title: "Integrity", desc: "Credibility is non-negotiable—facts, tone, and responsibility matter." },
  { icon: FaBolt, title: "Responsiveness", desc: "Fast, disciplined execution with clear ownership and timelines." },
  { icon: FaChartLine, title: "Outcomes", desc: "We measure progress—coverage, sentiment, and business relevance." },
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
  <div
    className="relative h-64 sm:h-80 bg-cover bg-center"
    style={{ backgroundImage: `url(${aboutImg})` }}
  >
    {/* dark overlay for readability */}
    <div className="absolute inset-0 bg-black/30" />

    {/* label */}
    <div className="absolute bottom-5 left-5 rounded-2xl bg-white/90 px-4 py-3">
      <div className="text-xs font-semibold text-slate-600">Our work in action</div>
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



{/* LEADERSHIP — Founder Message + Bio */}

{/* LEADERSHIP — polished corporate layout (message unchanged) */}
<SectionShell
  id="founder-message"
  kicker="Leadership"
  title={
    <span>
      Founder’s <span className="text-brand-red">message</span>
    </span>
  }
  subtitle="A brief note from our Founder on purpose, credibility, and long-term impact."
  className="section-soft"
>
  {/* Top row: Message (left) + Profile (right) */}
  <div className="grid gap-6 lg:grid-cols-12 lg:items-start">
    {/* Message */}
    <div className="lg:col-span-7 rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-sm p-7 sm:p-8">
      <div className="flex items-center gap-2 text-xs font-semibold text-slate-500 uppercase tracking-widest">
        <span className="h-2 w-2 rounded-full bg-brand-red" />
        Message from the Founder
      </div>

      <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-brand-indigo leading-snug">
        Culture, awareness, and action—working together.
      </h3>

      {/* MESSAGE — keep exactly as-is */}
      <div className="mt-4 space-y-4 text-sm sm:text-[15px] text-slate-600 leading-relaxed">
        <p>
          Byatikram was born from a belief that meaningful change begins when culture, awareness, and action come together.
        </p>

        <p>
          Growing up in Assam, I witnessed the immense talent and potential of the Northeast. I also saw the need for stronger platforms that could connect our people to opportunity, recognition, and progress. With that vision, Byatikram was established to stand as an exception in promoting art, literature, social awareness, entrepreneurship, and community empowerment.
        </p>

        <p>
          Over the years, our journey has expanded into organizing cultural festivals, national-level conclaves, social campaigns, women and youth empowerment initiatives, health and mental health awareness programs, and cross-border collaborations. Each initiative carries one purpose  to create impact that is meaningful, inclusive, and sustainable.
        </p>

        <p>
          Byatikram is not merely an organization; it is a commitment to the Northeast and its future. We remain dedicated to building bridges between tradition and innovation, society and leadership, culture and commerce.
        </p>

        <p>
          Thank you for being part of this journey.
        </p>
      </div>

      <div className="mt-6 pt-5 border-t border-slate-200/70">
        <div className="font-semibold text-slate-900">Dr. Saumen Bharatiya</div>
        <div className="text-sm text-slate-600">
          Founder & Patron-in-Chief
          <span className="text-slate-400"> • </span>
          Byatikram Group
        </div>
      </div>
    </div>

    {/* Profile */}
    <div className="lg:col-span-5 rounded-3xl bg-white ring-1 ring-slate-200/70 shadow-sm p-7 sm:p-8">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold text-brand-indigo">Founder profile</h3>
          <p className="mt-2 text-sm text-slate-600 leading-relaxed">
            A concise executive profile—clear, factual, and easy to scan.
          </p>
        </div>

        <div className="shrink-0 inline-flex items-center rounded-full bg-brand-mist px-3 py-1 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
          Patron-in-Chief
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white ring-1 ring-slate-200/70 p-5">
        <dl className="grid gap-4 sm:grid-cols-2">
          <div>
            <dt className="text-xs font-semibold text-slate-500">Name</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900">Dr. Saumen Bharatiya</dd>
          </div>

          <div>
            <dt className="text-xs font-semibold text-slate-500">Roles</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900 leading-snug">
              Patron-in-Chief, Byatikram Group
              <br />
              President, Byatikram MASDO (BMASDO)
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold text-slate-500">Education</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900 leading-snug">
              Post-Graduation & M.Phil — Gauhati University
              <br />
              Ph.D. (Bengali Literature) — Assam University, Silchar
            </dd>
          </div>

          <div>
            <dt className="text-xs font-semibold text-slate-500">Leadership focus</dt>
            <dd className="mt-1 text-sm font-semibold text-slate-900 leading-snug">
              Culture, literature, social awareness, entrepreneurship, community empowerment
            </dd>
          </div>
        </dl>
      </div>

      <div className="mt-6">
        <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">
          Credibility highlights
        </div>

        <ul className="mt-3 grid gap-2 text-sm text-slate-600 sm:grid-cols-1">
          {[
            "Founded ‘Byatikram’—a platform positioned as an exception in cultural and social institution-building.",
            "Led initiatives under BMASDO (registered under the Societies Registration Act, 1960).",
            "Associated with publishing and literary initiatives since 2005.",
            "International exposure through work and recognition in countries including China, Bangladesh, and Singapore.",
            "Built bridges between culture and commerce, tradition and innovation, regional identity and global visibility.",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
              <span>{x}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>

    {/* Full Biography (collapsible, professional) */}
    <div className="lg:col-span-12">
      <details className="group rounded-3xl bg-brand-mist ring-1 ring-slate-200/70 p-7 sm:p-8">
        <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
          <div>
            <div className="text-xs font-semibold text-slate-500 uppercase tracking-widest">About the Founder</div>
            <div className="mt-1 text-lg font-semibold text-brand-indigo">
              Read full biography
            </div>
          </div>

          <div className="shrink-0 rounded-full bg-white px-4 py-2 ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
            <span className="group-open:hidden">Expand</span>
            <span className="hidden group-open:inline">Collapse</span>
          </div>
        </summary>

        {/* BIOGRAPHY — keep text as-is */}
        <div className="mt-6 space-y-4 text-sm sm:text-[15px] text-slate-700 leading-relaxed">
          <p><span className="font-semibold text-slate-900">Dr. Saumen Bharatiya</span></p>
          <p>Patron-in-Chief, Byatikram Group</p>
          <p>President, Byatikram MASDO</p>

          <p>
            Dr. Saumen Bharatiya is a distinguished entrepreneur, cultural visionary, social activist, and literary scholar whose work has significantly influenced the socio-cultural landscape of Northeast India. As the Founder of Byatikram Group, he has devoted his life to building meaningful platforms that promote art, literature, education, social awareness, and regional identity at both national and international levels.
          </p>

          <p>
            Born and raised in Suprakandi village in the Karimganj district of Assam, Dr. Bharatiya’s journey is rooted in perseverance and a deep commitment to community upliftment. He completed his schooling at Palli Mangal High School, Suprakandi, followed by his Post-Graduation and M.Phil from Gauhati University. He later earned his Ph.D. in Bengali Literature from Assam University, Silchar.
          </p>

          <p>
            He began his professional career as a lecturer in a few reputed colleges of Assam. However, driven by a larger vision to contribute more directly to society, he chose to step away from academia and establish ‘Byatikram’—a name that signifies exception. His vision was to create an institution that integrates culture, intellectual engagement, entrepreneurship, and social responsibility under one dynamic platform.
          </p>

          <p>
            As the Founder and President of Byatikram Mass Awareness & Social Development Organization (BMASDO), a society registered under the Societies Registration Act, 1960, he has led numerous impactful initiatives across the Northeast and beyond. Dr. Bharatiya has also made notable contributions in the field of literature and translation. He has been associated with publishing and literary initiatives since 2005.
          </p>

          <p>
            In the domain of entrepreneurship and strategic partnerships, Dr. Bharatiya has played a pivotal role in elevating the region’s business, cultural, and intellectual ecosystem through nationally recognized platforms. His leadership and contributions have earned him numerous accolades and international exposure in countries including China, Bangladesh, Singapore, and others. Through his vision and dedication, Dr. Saumen Bharatiya continues to build bridges between culture and commerce, tradition and innovation, and regional aspirations with global recognition.
          </p>
        </div>
      </details>
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
              <div className="text-3xl text-brand-red"> <v.icon /></div>
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
            Byatikram's <span className="text-brand-red">subsidiaries</span>
          </span>
        }
        subtitle="Replace placeholder logos with real unit logos for a more premium look."
      >
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => (
            <div key={u.name} className="card p-6 card-hover">
              
<div className="flex items-start gap-4">
  <div className="h-14 w-14 rounded-xl bg-white ring-1 ring-slate-200 flex items-center justify-center overflow-hidden">
    {u.logoSrc ? (
      <img
        src={u.logoSrc}
        alt={u.name}
        className="w-full h-full object-contain p-1"
      />
    ) : (
      <span className="font-bold text-slate-700">
        {u.logoText}
      </span>
    )}
  </div>

  <div>
    <h3 className="text-base font-semibold text-brand-indigo">{u.name}</h3>
    <p className="mt-1 text-sm text-slate-600">{u.address}</p>
  </div>
</div>
              
            </div>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
