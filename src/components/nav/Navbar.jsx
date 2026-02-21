import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import SearchBar from "./SearchBar.jsx";
import mainLogo from "../../assets/images/main_logo.png";

const nav = [
  { label: "Home", to: "/" },
  { label: "About Us", to: "/about" },
  { label: "Services", to: "/services" },
  { label: "Events", to: "/events" },
  { label: "Media", to: "/media" },
  { label: "Subsidiaries", to: "/subsidiaries" },
  { label: "Contact Us", to: "/contact" },
  
];

function Logo() {
  return (
    <div className="flex items-center">
      <img src= {mainLogo} alt="Byatikram Group Logo" className="w-24 h-auto"/>
      </div>
  );
}

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <header id ="site-nav" className="fixed top-0 inset-x-0 z-50">
      {/* soft backdrop */}
      <div className="absolute inset-0 bg-white/40 backdrop-blur-[6px]" />
      <div className="container-pad relative pt-3">
        {/* glass pill */}
        <div className="rounded-2xl bg-white/80 backdrop-blur border border-slate-200/70 shadow-soft px-3 sm:px-4 py-3 md:py-0 md:h-16 flex flex-col md:flex-row md:items-center gap-3">
          {/* Row 1 on mobile: Logo + Menu */}
          <div className="flex items-center gap-3 w-full md:w-auto min-w-0">
            <button
              onClick={() => navigate("/")}
              className="text-left min-w-0 flex-1"
              aria-label="Go to home"
            >
              <Logo />
            </button>

            
            <div className="md:hidden ml-auto shrink-0 relative z-30">
              <MobileMenu />
            </div>
          </div>

          {/* Search: full width on mobile, middle on desktop */}
          <div className="w-full md:flex-1 md:max-w-xl relative z-20">
            <div className="md:hidden">
              <SearchBar compact />
            </div>
            <div className="hidden md:block">
              <SearchBar />
            </div>
          </div>

          
          <nav className="hidden md:flex md:ml-auto items-center gap-1">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  [
                    "px-3 py-2 rounded-xl text-sm font-medium transition",
                    isActive
                      ? "text-brand-indigo bg-brand-mist"
                      : "text-slate-600 hover:bg-slate-50 hover:text-brand-indigo",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}

            <button
              onClick={() => navigate("/contact")}
              className="ml-2 inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold text-white shadow-soft"
              style={{ backgroundColor: "#DC2626" }}
            >
              Get in touch
              <span className="h-2 w-2 rounded-full bg-brand-indigo" />
            </button>
          </nav>
        </div>
      </div>
    </header>
  );
}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="relative z-40">
     
<button
  onClick={() => setOpen((v) => !v)}
  className="inline-flex flex-col items-center justify-center gap-1.5 h-11 w-11 rounded-xl border border-slate-200 bg-white/90 hover:bg-white transition shadow-soft"
  aria-label="Open menu"
  aria-expanded={open}
>
  <span className="block h-0.5 w-5 bg-slate-700 rounded" />
  <span className="block h-0.5 w-5 bg-slate-700 rounded" />
  <span className="block h-0.5 w-5 bg-slate-700 rounded" />
</button>

      {open && (
        <div className="absolute right-0 mt-2 w-64 card p-2 z-50" role="menu" aria-label="Site navigation">
          {nav.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              onClick={() => setOpen(false)}
              className={({ isActive }) =>
                [
                  "block px-3 py-2 rounded-xl text-sm font-medium transition-colors",
                  isActive
                    ? "bg-brand-mist text-brand-indigo"
                    : "text-slate-700 hover:bg-slate-50 hover:text-brand-indigo",
                ].join(" ")
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </div>
  );
}
