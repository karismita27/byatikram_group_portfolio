// src/pages/admin/AdminDashboard.jsx
import React from "react";
import { Mail, CalendarDays, ImagePlus, Images } from "lucide-react";
import StatCard from "../components/StatCard.jsx";
import SectionCard from "../components/SectionCard.jsx";
import {
  initialEvents,
  initialGallery,
  initialInquiries,
  initialSliders,
} from "../data/adminMock.js";

export default function AdminDashboard() {
  // UI-only counts from mock data (replace with API later)
  const inquiries = initialInquiries;
  const events = initialEvents;
  const gallery = initialGallery;
  const sliders = initialSliders;

  return (
    <div className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard title="Total Inquiries" value={inquiries.length} icon={Mail} />
        <StatCard title="Total Events" value={events.length} icon={CalendarDays} />
        <StatCard title="Total Gallery Images" value={gallery.length} icon={ImagePlus} />
        <StatCard title="Total Slider Images" value={sliders.length} icon={Images} />
      </div>

      <SectionCard
        title="Admin overview"
        subtitle="Keep content current, maintain event records, and respond to inquiries."
      >
        <div className="grid gap-4 lg:grid-cols-3">
          {[
            {
              t: "Homepage slider hygiene",
              d: "Ensure slider visuals and copy remain aligned with corporate communication standards.",
            },
            {
              t: "Event records consistency",
              d: "Maintain correct event type (Upcoming/Past), clean descriptions, and accurate locations.",
            },
            {
              t: "Inquiries workflow",
              d: "Review contact submissions regularly and clear resolved messages to keep the panel clean.",
            },
          ].map((x) => (
            <div
              key={x.t}
              className="rounded-2xl bg-white p-5 ring-1 ring-slate-200/70 shadow-sm"
            >
              <div className="text-sm font-semibold text-slate-900">{x.t}</div>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{x.d}</p>
              <div className="mt-4 h-[2px] w-10 rounded-full bg-red-600" />
            </div>
          ))}
        </div>
      </SectionCard>
    </div>
  );
}