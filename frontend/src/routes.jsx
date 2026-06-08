import { Routes, Route, Navigate } from "react-router-dom";

import HomeLayout from "./pages/Home";
import Dashboard from "./pages/DashBoard";
import Profile from "./pages/profile";
import Settings from "./pages/settings";
import Auth from "./pages/LoginPage";
import Serv from "./pages/services";

function AppRoutes() {
  return (
    <Routes>
      {/* Auth route (outside layout) */}
      <Route path="/login" element={<Auth />} />

      {/* Main layout routes */}
      <Route path="/" element={<HomeLayout />}>
        
        {/* default route → dashboard */}
        <Route index element={<Navigate to="/dashboard" />} />

        <Route path="dashboard" element={<Dashboard />} />
        <Route path="services" element={<Serv />} />
        <Route path="profile" element={<Profile />} />
        <Route path="settings" element={<Settings />} />

      </Route>

      {/* fallback */}
      <Route path="*" element={<Navigate to="/dashboard" />} />
    </Routes>
  );
}

export default AppRoutes;