// src/components/admin/Topbar.jsx
import React from "react";
import { Menu, Search } from "lucide-react";

export default function Topbar({ title, onOpenSidebar }) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200/70 bg-slate-50/90 backdrop-blur">
      <div className="flex items-center justify-between gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <button
            className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-slate-200 md:hidden"
            onClick={onOpenSidebar}
            aria-label="Open sidebar"
          >
            <Menu className="h-5 w-5" />
          </button>

          <div>
            <h1 className="text-xl font-semibold tracking-tight text-slate-900">{title}</h1>
            <p className="mt-0.5 text-sm text-slate-500">
              Manage website content, events, gallery, and inquiries.
            </p>
          </div>
        </div>

        <div className="hidden sm:flex items-center gap-3">
          <div className="relative">
            <Search className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              placeholder="Search..."
              className="w-56 rounded-2xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm outline-none focus:border-indigo-300 focus:ring-4 focus:ring-indigo-50"
            />
          </div>
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-600 text-sm font-semibold text-white">
            A
          </div>
        </div>
      </div>
    </header>
  );
}