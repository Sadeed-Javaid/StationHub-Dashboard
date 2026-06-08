import ProfileLogo from '../../assets/account.png'
import SettingLogo from '../../assets/settings.png'
import LogoutLogo from '../../assets/logout.png'


import React from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function UserMenuModal({
  isOpen,
  onClose,
  onProfile,
  onSettings,
  onLogout,
  position,
}) {
  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50">
          {/* background */}
          <div
            className="absolute inset-0 "
            onClick={onClose}
          />

          {/* modal */}
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            style={{
              top: position.top,
              left: position.left,
            }}
            className="absolute w-47 rounded-lg shadow-lg  border-[1px] bg-orange-500/20 border-[#FF6A00] py-2"
          >
            <button
              onClick={onProfile}
              className="w-full text-left px-3 py-2 hover:cursor-pointer text-sm"
            >
              Profile
              <img src={ProfileLogo} className="w-4 h-4 inline-block ml-[106px]" />
            </button>

            <button
              onClick={onSettings}
              className="w-full text-left px-3 py-2 hover:cursor-pointer text-sm"
            >
              Settings
              <img src={SettingLogo} className="w-4 h-4 inline-block ml-24" />
            </button>

            <hr className="border-[#9CA3AF] w-[170px] ml-2 " />

            <button
              onClick={onLogout}
              className="w-full text-left px-3 py-2 hover:cursor-pointer text-red-600 text-sm"
            >
              Logout
              <img src={LogoutLogo} className="w-4 h-4 inline-block ml-[102px]" />    
            </button>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}