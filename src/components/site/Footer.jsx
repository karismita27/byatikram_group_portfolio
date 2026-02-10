import React from "react";
import { Facebook, Instagram, Mail, Phone, MapPin } from "lucide-react";
import { NavLink } from "react-router-dom";
import { units } from "../../data/units.js";

export default function Footer() {
  return (
    <footer className="mt-16 bg-gradient-to-b from-red-100/90 to-white text-slate-800 border-t border-red-200">
      <div className="container-pad py-12">
        <div className="grid gap-10 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="text-xl font-semibold tracking-tight">
              Byatikram Group <span className="text-brand-red">•</span>
            </div>
            <p className="mt-3 max-w-md text-sm text-slate-600 leading-relaxed">
              Corporate communications, PR strategy, media visibility, and event execution—delivered with
              disciplined planning and measurable outcomes.
            </p>

            <div className="mt-5 grid gap-2 text-sm text-slate-600">
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>Guwahati, Assam</span>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>+91 XXXXX XXXXX</span>
              </div>
              <div className="flex items-start gap-2">
                <Mail className="h-4 w-4 mt-0.5 text-slate-500" />
                <span>hello@byatikramgroup.com</span>
              </div>
            </div>

            <div className="mt-6 flex items-center gap-3">
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-red-200 hover:ring-red-300 transition"
              >
                <Instagram className="h-5 w-5 text-brand-indigo" />
              </a>
              <a
                href="#"
                aria-label="Facebook"
                className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white ring-1 ring-red-200 hover:ring-red-300 transition"
              >
                <Facebook className="h-5 w-5 text-brand-indigo" />
              </a>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-brand-indigo">Company</div>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              <NavLink className="hover:text-brand-indigo" to="/">Home</NavLink>
              <NavLink className="hover:text-brand-indigo" to="/about">About Us</NavLink>
              <NavLink className="hover:text-brand-indigo" to="/services">Services</NavLink>
              <NavLink className="hover:text-brand-indigo" to="/events">Events</NavLink>
              <NavLink className="hover:text-brand-indigo" to="/media">Media</NavLink>
              <NavLink className="hover:text-brand-indigo" to="/contact">Contact</NavLink>
            </div>
          </div>

          <div>
            <div className="text-sm font-semibold text-brand-indigo">Group Units</div>
            <div className="mt-4 grid gap-2 text-sm text-slate-600">
              {units.slice(0, 4).map((u) => (
                <div key={u.name} className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-brand-red" />
                  <span className="line-clamp-1">{u.name}</span>
                </div>
              ))}
            </div>
            <div className="mt-4 text-xs text-slate-500">
              Add more units or link to the full units section in About.
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-red-200 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>© {new Date().getFullYear()} Byatikram Group. All rights reserved.</div>
          <div className="flex gap-4">
            <span className="hover:text-brand-indigo cursor-pointer">Privacy</span>
            <span className="hover:text-brand-indigo cursor-pointer">Terms</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
