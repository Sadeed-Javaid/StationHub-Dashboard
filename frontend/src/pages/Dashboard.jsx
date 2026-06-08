import React, { useState } from "react";
import Logo from "../assets/Logo.png";
import MenuLogo from "../assets/menu1.png";
import MoreLogo from "../assets/more.png";
import DashLogo from "../assets/dashboard.png";
import dropLogo from "../assets/waterdrop.png";
import StationLogo from "../assets/station.png";
import InfinityLogo from "../assets/infinity.png";
import GroupLogo from "../assets/group.png";
import AppointmentLogo from "../assets/appointment.png";
import UserMenuModal from "../components/modals/menuModal";


const LOGO_SRC = Logo;

// const filters = ["Daily", "Weekly", "Monthly", "All"];



const statCards = [
  { label: "Total Stations", value: "0", icon: StationLogo },
  { label: "Total Users", value: "0", icon: GroupLogo },
  { label: "Total Bookings", value: "0", icon: AppointmentLogo },
  { label: "Services", value: "Unlimited", icon: InfinityLogo },
];

const navItems = [
  { name: "Dashboard", icon: DashLogo },
  { name: "Services", icon: dropLogo },
  // { name: "Users", icon: "👥" },
  // { name: "Settings", icon: "⚙️" },
  // { name: "Reports", icon: "📈" },
];

export default function Dashboard() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [activePage, setActivePage] = useState("Dashboard");
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [isModalOpen, setIsModalOpen] = useState(false);
const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });

const handleProfile = () => {
  console.log("Profile clicked");
};

const handleSettings = () => {
  console.log("Settings clicked");
};

const handleLogout = () => {
  console.log("Logout clicked");
};

  return (
    <div className="flex min-h-screen bg-gray-100 font-sans">

      {/* ── Sidebar ── */}
      <aside
        className={`flex-shrink-0 bg-white border-r border-gray-200 flex flex-col transition-all duration-300 ${
          sidebarOpen ? "w-52" : "w-14"
        }`}
      >
        {/* Logo + Toggle btn */}
        <div className={`flex items-center border-b border-gray-100  px-3 py-0 ${
            sidebarOpen ? "justify-between" : "justify-center"
              }`}>
            
            {/* Logo */}
            <div className="w-20 h-20 flex items-center  ml-0  justify-center">
              {sidebarOpen && (
                <img src={LOGO_SRC} className="w-20 h-20 object-contain ml-8 hover:cursor-pointer" />
              )}
            </div>

            {/* Menu button (fixed size box prevents clipping) */}
            <div className="w-10 h-10 flex items-center justify-center">
              <button
                onClick={() => setSidebarOpen(!sidebarOpen)}
                className="w-7 h-7 flex items-center justify-center rounded-lg hover:cursor-pointer"
              >
                <img src={MenuLogo} className="w-5 h-5" />
              </button>
            </div>
        </div>

        {/* Nav */}
        <nav className="flex-1 px-2 py-4 space-y-1 ">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => setActivePage(item.name)}
              className={`w-full flex items-center gap-2 px-2 py-2 rounded-lg text-sm transition-colors ${
                activePage === item.name
                  ? "bg-orange-500/20 border-[1px] border-orange-500 hover:cursor-pointer text-black font-medium"
                  : "text-gray-600 hover:bg-gray-100 hover:cursor-pointer"
              } ${!sidebarOpen ? "justify-center" : ""}`}
              title={!sidebarOpen ? item.name : ""}
            >
              <span className="text-base">
                <img src={item.icon} alt={item.name} className="w-5 h-5" />
              </span>

              {sidebarOpen && <span>{item.name}</span>}
            </button>
          ))}
        </nav>

        {/* Bottom */}
        <div className="border-t border-gray-100 px-2 py-4 space-y-1">
          <div className={`flex items-center gap-2 px-2 py-2 bg-orange-500/20 border-[1px] rounded-lg border-orange-500  ${!sidebarOpen ? "justify-center " : ""}`}>
            <div className="w-7 h-7 rounded-full bg-orange-500 flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
              SJ
            </div>
            {sidebarOpen && (
              <div className="min-w-0 flex items-center justify-between gap-2">
                <div>
                  <p className="text-xs font-medium text-gray-800 truncate">Sadeed Javaid</p>
                  <p className="text-xs text-gray-400 truncate">sadeed@example.com</p>
                </div>
                <div className='relative'>
                  <img
                  src={MoreLogo}
                  alt="More"
                  className="w-4 h-4 cursor-pointer"
                  onClick={(e) => {
                    const rect = e.currentTarget.getBoundingClientRect();

                   setModalPosition({
                    top: rect.top - 145,   // 120 = approx modal height; pushes it above the icon
                    left: rect.right - 180, // adjust horizontal alignment as needed
                  });

                    setIsModalOpen(true);
                  }}
                />
                </div>
              </div>
              
            )}
          </div>
        </div>
      </aside>

      {/* ── Main Content ── */}
      <main className="flex-1 p-6 overflow-auto">

        {/* Header */}
        <div className="flex items-start justify-between mb-6">
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Welcome, Sadeed! Good to have you onboard.
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              Here's what's happening with your stations
            </p>
          </div>

          {/* <div className="flex items-center gap-2">
            <div className="flex gap-1 bg-gray-100 rounded-lg p-1">
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  className={`px-3 py-1 rounded-md text-xs font-medium transition-colors ${
                    activeFilter === f
                      ? "bg-orange-500 text-white"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {f}
                </button>
              ))}
            </div>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 bg-white hover:bg-gray-50 transition-colors">
              🔄 Refresh
            </button>
            <button className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-xs text-gray-600 bg-white hover:bg-gray-50 transition-colors">
              ⬇️ Export CSV
            </button>
          </div> */}
        </div>

        {/* Stat Cards */}
        <div className="grid grid-cols-4 gap-4 mb-6">
          {statCards.map((card) => (
            <div
              key={card.label}
              className="bg-white border border-gray-200 rounded-xl p-4 flex items-center justify-between"
            >
              <div>
                <p className="text-xs text-gray-500 mb-1">{card.label}</p>
                <p className="text-2xl font-semibold text-gray-900">{card.value}</p>
              </div>
              <div className="w-9 h-9 bg-gray-100 rounded-lg flex items-center justify-center text-lg">
                <img src={card.icon} alt={card.label} className="w-5 h-5" />
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Panels */}
        {/* <div className="grid grid-cols-3 gap-4">
          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-800">Recent Stations</p>
              <a href="#" className="text-xs text-orange-500 hover:text-orange-600">View all</a>
            </div>
            <p className="text-sm text-gray-400 text-center py-8">No stations found</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-800">Recent Bookings</p>
              <a href="#" className="text-xs text-orange-500 hover:text-orange-600">View all</a>
            </div>
            <p className="text-sm text-gray-400 text-center py-8">No recent bookings</p>
          </div>

          <div className="bg-white border border-gray-200 rounded-xl p-4">
            <p className="text-sm font-medium text-gray-800 mb-4">User Feedback</p>
            <div className="flex flex-col items-center py-4">
              <div className="w-20 h-20 rounded-full border-4 border-gray-200 flex flex-col items-center justify-center mb-4">
                <p className="text-lg font-semibold text-gray-900">0%</p>
                <p className="text-xs text-gray-400">Positive</p>
              </div>
              <div className="flex gap-6 text-sm text-gray-500">
                <span>👍 0</span>
                <span>👎 0</span>
              </div>
            </div>
          </div>
        </div> */}
      </main>
      <UserMenuModal
  isOpen={isModalOpen}
  onClose={() => setIsModalOpen(false)}
  onProfile={handleProfile}
  onSettings={handleSettings}
  onLogout={handleLogout}
  position={modalPosition}
/>
    </div>
  );
}
