// src/components/admin/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import {
  LayoutDashboard,
  Images,
  CalendarDays,
  ImagePlus,
  Mail,
  LogOut,
  X,
} from "lucide-react";

const items = [
  { to: "/admin/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { to: "/admin/slider", label: "Homepage Slider", icon: Images },
  { to: "/admin/events", label: "Events", icon: CalendarDays },
  { to: "/admin/gallery", label: "Event Gallery", icon: ImagePlus },
  { to: "/admin/inquiries", label: "Contact Inquiries", icon: Mail },
];

export default function Sidebar({ open, onClose }) {
  return (
    <>
      <div
        className={[
          "fixed inset-0 z-40 bg-slate-950/40 transition md:hidden",
          open ? "opacity-100" : "pointer-events-none opacity-0",
        ].join(" ")}
        onClick={onClose}
      />

      <aside
        className={[
          "fixed left-0 top-0 z-50 flex h-screen w-[280px] flex-col border-r border-slate-200 bg-white transition-transform duration-300 md:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <div className="text-xs font-semibold uppercase tracking-[0.18em] text-red-600">
              Admin Panel
            </div>
            <div className="mt-1 text-lg font-semibold text-slate-900">Corporate Events</div>
          </div>
          <button
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl text-slate-600 hover:bg-slate-100 md:hidden"
            onClick={onClose}
            aria-label="Close sidebar"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 space-y-2 overflow-y-auto px-4 py-5">
          {items.map((it) => {
            const Icon = it.icon;
            return (
              <NavLink
                key={it.to}
                to={it.to}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition",
                    isActive
                      ? "bg-indigo-50 text-indigo-700 ring-1 ring-indigo-100"
                      : "text-slate-700 hover:bg-slate-50",
                  ].join(" ")
                }
                onClick={onClose}
              >
                <Icon className="h-5 w-5" />
                <span>{it.label}</span>
              </NavLink>
            );
          })}
        </nav>

        <div className="border-t border-slate-200 px-4 py-4">
          <button
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm font-medium text-red-700 transition hover:bg-red-50"
            onClick={() => alert("Logout UI only")}
          >
            <LogOut className="h-5 w-5" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}
