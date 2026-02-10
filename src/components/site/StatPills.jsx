import React from "react";

export default function StatPills() {
  const stats = [
    { label: "10+ Years", value: "Experience" },
    { label: "100+ Clients", value: "Trusted partners" },
    { label: "200+ Campaigns", value: "Successful deliveries" },
  ];

  return (
    <div className="grid gap-3 sm:grid-cols-3">
      {stats.map((s) => (
        <div key={s.label} className="card p-5 card-hover">
          <div className="text-2xl font-semibold text-brand-indigo">{s.label}</div>
          <div className="mt-1 text-sm text-slate-600">{s.value}</div>
        </div>
      ))}
    </div>
  );
}
