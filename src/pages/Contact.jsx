import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";
import { groupContact, units } from "../data/units.js";

export default function Contact() {
  const [type, setType] = React.useState("Feedback");
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [submitted, setSubmitted] = React.useState(false);

  function onSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
    // Frontend-only: replace with real submission (email API / server) when needed.
    setTimeout(() => setSubmitted(false), 3500);
    setName("");
    setEmail("");
    setMessage("");
    setType("Feedback");
  }

  return (
    <div>
      <SectionShell
        kicker="Contact"
        title="Contact Us"
        subtitle="A clean, two-column layout: form on the left, main office contact details on the right."
      >
        <div className="grid gap-6 lg:grid-cols-2 lg:items-start">
          {/* Left: Form */}
          <div id="contact-form" className="card p-7">
            <h1 className="text-lg font-semibold text-brand-indigo">Feedback & Complaint</h1>

            {submitted && (
              <div className="mt-4 rounded-2xl bg-green-50 ring-1 ring-green-200 px-4 py-3 text-sm text-green-800">
                Submitted (demo). Hook this to your backend/email service when ready.
              </div>
            )}

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div>
                <label className="text-sm font-semibold text-slate-700">Message type</label>
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value)}
                  className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 hover:border-slate-300 transition"
                >
                  <option>Feedback</option>
                  <option>Complaint</option>
                </select>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-sm font-semibold text-slate-700">Your name</label>
                  <input
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 hover:border-slate-300 transition"
                    placeholder="Full name"
                    required
                  />
                </div>
                <div>
                  <label className="text-sm font-semibold text-slate-700">Email</label>
                  <input
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="mt-2 w-full rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 hover:border-slate-300 transition"
                    placeholder="name@example.com"
                    type="email"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold text-slate-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="mt-2 w-full min-h-[140px] rounded-2xl border border-slate-200 bg-white px-3 py-3 text-sm text-slate-700 hover:border-slate-300 transition"
                  placeholder="Write your message…"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-2xl bg-brand-red text-white px-6 py-3 text-sm font-semibold hover:opacity-95 transition"
              >
                Submit
              </button>

              <p className="text-xs text-slate-500">
                Note: this is frontend-only. For production, connect to an email service or backend endpoint.
              </p>
            </form>
          </div>

          {/* Right: Contact details + map */}
          <div className="space-y-6">
            <div className="card p-7">
              <h2 className="text-lg font-semibold text-brand-indigo">Head Office</h2>
              <div className="mt-4 space-y-2 text-sm text-slate-600">
                <div><span className="font-semibold text-slate-700">Email:</span> {groupContact.email}</div>
                <div><span className="font-semibold text-slate-700">Phone:</span> {groupContact.phone}</div>
                <div><span className="font-semibold text-slate-700">Address:</span> {groupContact.address}</div>
              </div>

              <div className="mt-6 overflow-hidden rounded-2xl ring-1 ring-slate-200">
                <iframe
                  title="Main Office Map"
                  src={groupContact.mapEmbedUrl}
                  width="100%"
                  height="260"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
              <div className="mt-2 text-xs text-slate-500">
                Replace the embed URL with your real Google Maps embed link.
              </div>
            </div>

            <div className="card p-7">
              <h3 className="text-lg font-semibold text-brand-indigo">Social</h3>
              <p className="mt-2 text-sm text-slate-600">
                Add your official Facebook and Instagram links in the footer (placeholders used currently).
              </p>
            </div>
          </div>
        </div>
      </SectionShell>

      <SectionShell
        kicker="Units"
        title="Our Units — Contact Details"
        subtitle="Structured layout (accordion-style cards). Use “View on Google Maps” links (no multiple embeds)."
      >
        <div className="grid gap-4 md:grid-cols-2">
          {units.map((u) => (
            <details key={u.name} className="card p-6 group">
              <summary className="cursor-pointer list-none flex items-center justify-between">
                <div>
                  <h4 className="text-base font-semibold text-brand-indigo">{u.name}</h4>
                  <div className="mt-1 text-sm text-slate-600">{u.address}</div>
                </div>
                <div className="text-xs font-semibold text-brand-red group-open:rotate-180 transition">▼</div>
              </summary>

              <div className="mt-4 text-sm text-slate-600 space-y-2">
                <div><span className="font-semibold text-slate-700">Email:</span> {u.email}</div>
                <div><span className="font-semibold text-slate-700">Phone:</span> {u.phone}</div>
                <a
                  href={u.maps}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex text-sm font-semibold text-brand-indigo link-underline"
                >
                  View on Google Maps →
                </a>
              </div>
            </details>
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
