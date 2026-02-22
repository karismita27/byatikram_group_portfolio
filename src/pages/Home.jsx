import React from "react";
import { useEffect, useState} from "react";
import { NavLink } from "react-router-dom";
import SectionShell from "../components/site/SectionShell.jsx";
import StatPills from "../components/site/StatPills.jsx";
import LogoPill from "../components/site/LogoPill.jsx";
import { clients } from "../data/clients.js";
import aboutImg from "../assets/images/events/p-1.jpg";
import eh1 from "../assets/images/events/p-1.jpg";
import eh2 from "../assets/images/events/p-2.jpg";
import eh3 from "../assets/images/events/p13.jpg";
import eh4 from "../assets/images/events/p-17.jpg";
import eh5 from "../assets/images/events/p-24.jpg";
import eh6 from "../assets/images/events/p-26.jpg";
import eh7 from "../assets/images/events/p-30.jpg";
import eh8 from "../assets/images/events/p-35.jpg";


const eventHighlightsTeaser = [
  { src: eh1, alt: "Press briefing setup", meta: "Media • 2025" },
  { src: eh2, alt: "Stage and backdrop branding", meta: "Event Delivery • 2025" },
  { src: eh3, alt: "Audience and venue view", meta: "Conference • 2024" },
  { src: eh4, alt: "On-ground coordination", meta: "Operations • 2025" },
  { src: eh5, alt: "Stakeholder interaction", meta: "Engagement • 2024" },
  { src: eh6, alt: "Speaker moment on stage", meta: "Program • 2025" },
  { src: eh7, alt: "Branding wall and media corner", meta: "PR • 2024" },
  { src: eh8, alt: "Team execution moment", meta: "Delivery • 2025" },
];

const heroSlides = [eh1,eh2, eh6, eh4];

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

  
const [slide, setSlide] = useState(0);
const [isTransitioning, setIsTransitioning] = useState(true);
const extendedSlides = [...heroSlides, heroSlides[0]];

useEffect(() => {
  const timer = setInterval(() => {
    setSlide((prev) => prev + 1);
  }, 3500);

  return () => clearInterval(timer);
}, []);

  useEffect(() => {
  if (slide === heroSlides.length) {
    setTimeout(() => {
      setIsTransitioning(false); // disable animation
      setSlide(0);               // jump to real first slide
    }, 700); // must match duration-700
  }
}, [slide]);

useEffect(() => {
  if (!isTransitioning) {
    setTimeout(() => {
      setIsTransitioning(true);
    }, 50);
  }
}, [isTransitioning]);
  
  return (
    <div>
      {/* HERO */}
      <section id="hero" className="relative overflow-hidden sm:py-1 lg:py-5 w-full flex items-center">
       
{/* Background Sliding Images */}
<div className="absolute inset-0 -z-20">
  <div
    className={`flex h-full ${
      isTransitioning ? "transition-transform duration-700 ease-in-out" : ""
    }`}
    style={{
      transform: `translateX(-${slide * 100}vw)`
    }}
  >
    {extendedSlides.map((img, i) => (
      <div key={i} className="w-screen h-full flex-shrink-0">
        <img
          src={img}
          alt="Hero slide"
          className="w-full h-full object-cover"
        />
      </div>
    ))}
  </div>
</div>

<div className="absolute inset-0 bg-slate-900/55 -z-10"></div>

 {/* Dot Indicators */}
  <div className="absolute bottom-6 left-0 right-0 flex justify-center gap-3 z-20">
    {heroSlides.map((_, index) => (
      <button
        key={index}
        onClick={() => setSlide(index)}
        className={`h-1 w-1 rounded-full transition-all duration-300 ${
          slide % heroSlides.length === index
            ? "bg-white scale-110"
            : "bg-white/40 hover:bg-white/70"
        }`}
      />
    ))}
  </div>

        <div className="container-pad relative  pt-24 pb-16 lg:pt-32 lg:pb-20 lg:pl-20">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div className="lg:pt-0 pt-6">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-4 py-2  ring-1 ring-slate-200/70 text-xs font-semibold text-slate-700">
                <span className="h-2 w-2 rounded-full bg-brand-red" />
                Corporate • PR • Communications
              </div>

              <h1 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight">
                Byatikram Group
              </h1>

              <p className="mt-4 text-sm sm:text-base lg:text-lg text-white/90 max-w-xl">
                Strategy-led public relations and communications—built for stakeholder trust, media credibility,
                and consistent execution.
              </p>

              <div className="mt-6 flex flex-wrap gap-2  justify-start sm:justify-start">
                <NavLink to="/contact" className="btn-primary-red ">
                  Contact Us
                </NavLink>
                <NavLink to="/events" className="inline-flex items-center justify-center rounded-xl px-5 py-2.5 font-semibold text-white shadow-soft bg-indigo-900">
                  View Events
                </NavLink>
              </div>
              
   <div className="mt-5 flex flex-wrap gap-2">
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2 lg:px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm text-[11px] font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-brand-indigo" />
                  10+ years
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2 lg:px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm text-[11px] font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  100+ clients
                </div>
                <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-2 lg:px-4 py-2 ring-1 ring-white/20 backdrop-blur-sm text-[11px] font-semibold text-white">
                  <span className="h-2 w-2 rounded-full bg-brand-indigo" />
                  200+ Campaigns
                </div>
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

  
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,.15),transparent_40%)]"></div>

 
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

      {/* SERVICES PREVIEW  */}
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



{/* EVENT HIGHLIGHTS  */}
<SectionShell
  id="events-teaser"
  kicker="Proof"
  title={
    <span>
      Event Highlights <span className="text-brand-red">•</span> On-ground delivery
    </span>
  }
  subtitle="A curated glimpse of recent engagements—execution moments that build stakeholder confidence."
  className="section-soft"
>
  <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
    {/* Left: Copy + CTA */}
    <div className="lg:col-span-4">
      <div className="card-pro p-7">
        <h3 className="text-lg font-semibold text-brand-indigo">
          Professional delivery, documented
        </h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          We maintain a high standard of on-ground execution—coordination, production,
          media readiness, and post-event wrap-ups.
        </p>

        <ul className="mt-4 space-y-2 text-sm text-slate-600">
          {[
            "Venue & production readiness",
            "Media-facing backdrops and documentation",
            "Stakeholder coordination and control",
            "Clean post-event reporting",
          ].map((x) => (
            <li key={x} className="flex items-start gap-2">
              <span className="mt-2 h-2 w-2 rounded-full bg-brand-red" />
              <span>{x}</span>
            </li>
          ))}
        </ul>

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <NavLink to="/events" className="btn-primary-red">
            View Events & Gallery
          </NavLink>
          <NavLink to="/contact" className="btn-outline-indigo">
            Plan an event
          </NavLink>
        </div>

        <div className="mt-5 text-xs text-slate-500">
          Curated highlights—full gallery available on the Events page.
        </div>
      </div>
    </div>

    {/* Right*/}
    <div className="lg:col-span-8">
      <div className="card-pro p-5 sm:p-6">
        <div className="grid grid-cols-2 gap-3 sm:gap-4 sm:grid-cols-4">
          {eventHighlightsTeaser.map((img, idx) => (
            
<NavLink
  key={img.src}
  to="/events"
  className={[
    "group relative overflow-hidden rounded-2xl ring-1 ring-slate-200/70 bg-white",
    idx === 0 ? "sm:col-span-2 sm:row-span-2" : "",
  ].join(" ")}
  aria-label="Open Events & Gallery"
>
  <div className={idx === 0 ? "aspect-[16/11]" : "aspect-[4/3]"}>
    <img
      src={img.src}
      alt={img.alt}
      className="h-full w-full object-cover object-center transition duration-300 group-hover:scale-[1.02]"
      loading="lazy"
    />
  </div>

  
  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/55 via-slate-950/0 to-transparent opacity-90" />


  <div className="pointer-events-none absolute bottom-2 left-2 right-2 flex items-end justify-between gap-2">
    <div className="inline-flex items-center gap-2 rounded-full bg-slate-950/40 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white max-w-full">
      <span className="h-2 w-2 rounded-full bg-brand-red shrink-0" />
      <span className="truncate">{img.meta}</span>
    </div>

   
    <div className="hidden sm:inline-flex rounded-full bg-white/10 backdrop-blur-sm px-2.5 py-1 text-[10px] font-semibold text-white">
      View
    </div>
  </div>
</NavLink>

          ))}
        </div>

        <div className="mt-5 flex items-center justify-between">
          <div className="text-xs text-slate-500">
            Visit Events to view full highlights and past engagements.
          </div>
          <NavLink to="/events" className="text-sm font-semibold text-brand-indigo link-underline">
            Explore Events →
          </NavLink>
        </div>
      </div>
    </div>
  </div>
</SectionShell>


      
{/* FOUNDER / VIDEO — Leadership highlight (Home) */}
<SectionShell
  id="founder"
  kicker="Leadership"
  title={
    <span>
      From the Founder <span className="text-brand-red">•</span> Our commitment
    </span>
  }
  subtitle="A short leadership note on our standards of credibility, delivery, and stakeholder trust."
  className="section-soft"
>
  <div className="grid gap-8 lg:grid-cols-2 lg:items-center">
    {/* Video + short excerpt */}
    <div className="card overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-slate-900 to-brand-indigo grid place-items-center text-white">
        <div className="text-center px-6">
          <div className="text-sm opacity-80">Video Placeholder</div>
          <div className="mt-2 text-lg font-semibold">Founder Address</div>
          <div className="mt-1 text-sm opacity-80">Replace with YouTube embed or MP4</div>
        </div>
      </div>

      <div className="p-6">
        <h3 className="text-lg font-semibold text-brand-indigo">Leadership, not marketing</h3>
        <p className="mt-2 text-sm text-slate-600 leading-relaxed">
          We lead with clarity and verification—because reputations are built on disciplined communication,
          consistent execution, and stakeholder-ready proof.
        </p>

        <div className="mt-5 flex flex-col sm:flex-row gap-3">
          <NavLink to="/about#founder-message" className="inline-flex items-center justify-center rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition">
            Read the Founder’s Message
          </NavLink>
          <NavLink to="/contact"  className="inline-flex items-center justify-center rounded-2xl bg-white ring-1 ring-slate-200 px-6 py-3 text-sm font-semibold text-brand-indigo hover:bg-slate-50 transition">
            Work with us
          </NavLink>
        </div>
      </div>
    </div>

    {/* What clients experience  */}
    <div className="card p-7">
      <h3 className="text-lg font-semibold text-brand-indigo">What clients experience</h3>
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

      <div className="mt-6 text-xs text-slate-500">
        This is a highlight. The full letter-style Founder’s Message lives on the About page.
      </div>
    </div>
  </div>
</SectionShell>


      {/* CLIENT LOGOS PREVIEW  */}
      <SectionShell
  id="clients-preview"
  kicker="Trust"
  title={
    <>
      Clients & Partners <span className="text-brand-red">•</span>
    </>
  }
  subtitle="Logo-only grid, equal sizing, clean hover—professional and uncluttered."
>
  <div className="card p-6 sm:p-7">
    <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      
      {clients.map((c) => (
        <div
          key={c.name}
          className="flex items-center justify-center bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
        >
          <img
            src={c.logo}
            alt={c.name}
            className="h-12 w-auto object-contain transition duration-300"
          />
        </div>
      ))}

    </div>
  </div>
</SectionShell>

    </div>
  );
}
