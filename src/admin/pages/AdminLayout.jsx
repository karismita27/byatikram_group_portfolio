// src/pages/admin/AdminLayout.jsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "../components/Sidebar.jsx";
import Topbar from "../components/Topbar.jsx";

const titleMap = {
  "/admin/dashboard": "Dashboard",
  "/admin/slider": "Homepage Slider",
  "/admin/events": "Events",
  "/admin/gallery": "Event Gallery",
  "/admin/inquiries": "Contact Inquiries",
};

export default function AdminLayout() {
  const [open, setOpen] = React.useState(false);
  const location = useLocation();
  const title = titleMap[location.pathname] || "Admin";

  return (
    <div className="min-h-screen bg-slate-50">
      <Sidebar open={open} onClose={() => setOpen(false)} />

      <div className="md:pl-[280px]">
        <Topbar title={title} onOpenSidebar={() => setOpen(true)} />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <Outlet />
        </main>
      </div>
    </div>
  );
}