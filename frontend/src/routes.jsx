// // src/routes.jsx
// import { Routes, Route, Navigate } from "react-router-dom";
// import HomeLayout from "./Home"; // NavBar + SideBar
// import Cons from "./Consultations";
// import Avail from "./Availability";
// import Set from "./settings";
// import Faqs from "./faqs";
// import ContactSupport from "./contactSupport";
// import Auth from "./authentication";

// function AppRoutes() {
//   return (
//     <Routes>
//       {/* Wrap all routes inside HomeLayout */}
//       <Route path="/" element={<HomeLayout />}>
//         <Route index element={<Navigate to="/dashboard" />} />
//         <Route path="dashboard" element={<Cons />} />
//         <Route path="availability" element={<Avail />} />
//         <Route path="settings" element={<Set />} />
//         <Route path="faqs" element={<Faqs />} />
//         <Route path="support" element={<ContactSupport />} />
//       </Route>
//       <Route path="login" element={<Auth />} />

//       {/* Catch-all → redirect to dashboard */}
//       <Route path="*" element={<Navigate to="/dashboard" />} />
//     </Routes>
//   );
// }

// export default AppRoutes;