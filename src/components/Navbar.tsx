// components/Navbar.tsx
"use client";

import { Search, MessageSquare, Bell, User } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between p-4 bg-white border-b border-slate-200 sticky top-0 z-10">
      {/* SEARCH BAR - Hidden on mobile, visible on md+ */}
      <div className="hidden md:flex items-center gap-3 text-sm bg-slate-100 rounded-full ring-2 ring-slate-200 px-4 py-2 focus-within:ring-blue-500 transition">
        <Search className="w-4 h-4 text-slate-500" />
        <input
          type="text"
          placeholder="Search..."
          className="bg-transparent outline-none w-48 placeholder:text-slate-500"
        />
      </div>

      {/* RIGHT SIDE: Icons + User Info */}
      <div className="flex items-center gap-5 justify-end w-full">
        {/* Messages */}
        <div className="relative cursor-pointer group">
          <div className="p-2 rounded-full hover:bg-slate-100 transition">
            <MessageSquare className="w-5 h-5 text-slate-600" />
          </div>
        </div>

        {/* Notifications with Badge */}
        <div className="relative cursor-pointer group">
          <div className="p-2 rounded-full hover:bg-slate-100 transition">
            <Bell className="w-5 h-5 text-slate-600" />
            <div className="absolute -top-1 -right-1 w-5 h-5 flex items-center justify-center bg-red-500 text-white text-xs font-bold rounded-full">
              1
            </div>
          </div>
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-semibold text-slate-800">Ibrahim Ndagiwe</p>
            <p className="text-xs text-slate-500">Admin</p>
          </div>
          <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center ring-4 ring-white shadow-sm">
            <User className="w-6 h-6 text-blue-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;