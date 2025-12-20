"use client";

import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import { Filter, Repeat } from "lucide-react";

const ParentPage = () => {
  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT - Calendar */}
      <div className="w-full xl:w-2/3">
        <div className="h-full bg-white p-4 rounded-2xl shadow-md flex flex-col gap-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-slate-800">
              Schedule (John Doe)
            </h1>
            <div className="flex items-center gap-2">
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
                <Filter className="w-4 h-4" />
              </button>
              <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
                <Repeat className="w-4 h-4" />
              </button>
            </div>
          </div>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT - Announcements */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-2xl shadow-md">
          <Announcements />
        </div>
      </div>
    </div>
  );
};

export default ParentPage;
