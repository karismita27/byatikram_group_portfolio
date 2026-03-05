
// src/routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import AdminLayout from "../pages/AdminLayout.jsx";
import AdminDashboard from "../pages/AdminDashboard.jsx";
import AdminSlider from "../pages/AdminSlider.jsx";
import AdminEvents from "../pages/AdminEvents.jsx";
import AdminGallery from "../pages/AdminGallery.jsx";
import AdminInquiries from "../pages/AdminInquiries.jsx";

export default function AdminRoutes() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminLayout />}>
        <Route index element={<Navigate to="/admin/dashboard" replace />} />
        <Route path="dashboard" element={<AdminDashboard />} />
        <Route path="slider" element={<AdminSlider />} />
        <Route path="events" element={<AdminEvents />} />
        <Route path="gallery" element={<AdminGallery />} />
        <Route path="inquiries" element={<AdminInquiries />} />
      </Route>
    </Routes>
  );
}