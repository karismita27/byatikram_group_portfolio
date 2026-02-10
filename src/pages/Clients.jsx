import React from "react";
import SectionShell from "../components/site/SectionShell.jsx";
import LogoPill from "../components/site/LogoPill.jsx";
import { clients } from "../data/clients.js";

export default function Clients() {
  return (
    <div>
      <SectionShell
        kicker="Our Clients"
        title="Client logos"
        subtitle="Logos only • Equal sizing • Responsive grid (replace placeholders with real logos)."
      >
        <div className="grid gap-3 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {clients.map((c) => (
            <LogoPill key={c.name} text={c.logoText} title={c.name} />
          ))}
        </div>
      </SectionShell>
    </div>
  );
}
