import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../nav/Navbar.jsx";
import Footer from "../site/Footer.jsx";

export default function SiteLayout() {
  const location = useLocation();

  // Smooth anchor scrolling for /path#hash
  useEffect(() => {
    const { hash } = location;
    if (!hash) return;

    const id = hash.replace("#", "");
    const el = document.getElementById(id);
    if (!el) return;

    // account for fixed navbar
    const y = el.getBoundingClientRect().top + window.scrollY - 88;
    window.scrollTo({ top: y, behavior: "smooth" });
  }, [location]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      {/*
        Navbar is fixed and becomes taller on mobile (logo + search + menu).
        Add a little extra breathing space so content doesn't start immediately under it.
      */}
      <main className="flex-1 pt-[120px] sm:pt-[124px] md:pt-24">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
