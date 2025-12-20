"use client";

import { Megaphone, Clock } from "lucide-react";

const announcements = [
  {
    id: 1,
    title: "Mid-Term Exams Schedule",
    message:
      "The mid-term exams will start next Monday. Please ensure all students are informed and prepared.",
    date: "2 hours ago",
    color: "blue",
  },
  {
    id: 2,
    title: "Staff Meeting",
    message:
      "There will be a general staff meeting this Friday at 10:00 AM in the main hall.",
    date: "Yesterday",
    color: "green",
  },
  {
    id: 3,
    title: "Fee Payment Reminder",
    message:
      "Parents are reminded to clear outstanding school fees before the end of this month.",
    date: "3 days ago",
    color: "yellow",
  },
];

const colorMap: Record<string, string> = {
  blue: "bg-blue-50 border-blue-100 text-blue-600",
  green: "bg-emerald-50 border-emerald-100 text-emerald-600",
  yellow: "bg-amber-50 border-amber-100 text-amber-600",
};

const Announcements = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-6 ">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-semibold text-slate-800">
          Announcements
        </h2>
        <Megaphone className="w-5 h-5 text-slate-400" />
      </div>

      {/* List */}
      <div className="space-y-4">
        {announcements.map((item) => (
          <div
            key={item.id}
            className="group rounded-xl border p-4 transition-all hover:shadow-sm hover:-translate-y-0.5"
          >
            {/* Title Row */}
            <div className="flex items-start justify-between mb-1">
              <h3 className="font-semibold text-slate-700">
                {item.title}
              </h3>
              <span
                className={`text-xs px-2 py-1 rounded-full border ${colorMap[item.color]}`}
              >
                New
              </span>
            </div>

            {/* Message */}
            <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
              {item.message}
            </p>

            {/* Footer */}
            <div className="flex items-center gap-2 mt-3 text-xs text-slate-400">
              <Clock className="w-4 h-4" />
              <span>{item.date}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Announcements;
