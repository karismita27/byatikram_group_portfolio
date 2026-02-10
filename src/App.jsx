import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import SiteLayout from "./components/layout/SiteLayout.jsx";
import Home from "./pages/Home.jsx";
import About from "./pages/About.jsx";
import Services from "./pages/Services.jsx";
import Events from "./pages/Events.jsx";
import Media from "./pages/Media.jsx";
import Contact from "./pages/Contact.jsx";
import Clients from "./pages/Clients.jsx";

export default function App() {
  return (
    <Routes>
      <Route element={<SiteLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/events" element={<Events />} />
        {/* backward compatible */}
        <Route path="/work" element={<Navigate to="/events" replace />} />
        <Route path="/media" element={<Media />} />
        <Route path="/clients" element={<Clients />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  );
}
