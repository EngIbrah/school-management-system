"use client";

import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import { CalendarDays, MoreVertical, Clock } from "lucide-react";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

// TEMP DATA
const events = [
  {
    id: 1,
    title: "Mid-Term Exams Begin",
    time: "12:00 PM – 2:00 PM",
    description: "Mid-term examinations for all classes start today.",
  },
  {
    id: 2,
    title: "Staff Meeting",
    time: "10:00 AM – 11:30 AM",
    description: "General meeting for all teaching and non-teaching staff.",
  },
  {
    id: 3,
    title: "Parents Meeting",
    time: "2:00 PM – 4:00 PM",
    description: "Discussion on student performance and school progress.",
  },
];

const EventCalendar = () => {
  const [value, onChange] = useState<Value>(new Date());

  return (
    <div className="bg-white rounded-2xl shadow-md p-6  flex flex-col">
      
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <CalendarDays className="w-5 h-5 text-blue-600" />
          <h2 className="text-xl font-semibold text-slate-800">
            School Calendar
          </h2>
        </div>
        <MoreVertical className="w-5 h-5 text-slate-400 hover:text-slate-600 cursor-pointer transition" />
      </div>

      {/* Calendar */}
      <div className="mb-6">
        <Calendar
         onChange={onChange}
       value={value}
       className="rounded-xl border border-slate-200 p-3 modern-calendar"

    prevLabel={
     <span className="text-slate-500 hover:text-slate-800 transition text-lg">
      ‹
    </span>
  }
  nextLabel={
    <span className="text-slate-500 hover:text-slate-800 transition text-lg">
      ›
    </span>
  }

  navigationLabel={({ date }) => (
    <div className="flex flex-col items-center">
      <span className="text-base font-semibold text-slate-800">
        {date.toLocaleString("default", { month: "long" })}
      </span>
      <span className="text-xs text-slate-500">
        {date.getFullYear()}
      </span>
    </div>
  )}

  tileClassName={({ date, view }) => {
    if (
      view === "month" &&
      date.getDate() === 19 &&
      date.getMonth() === 11 &&
      date.getFullYear() === 2025
    ) {
      return "bg-blue-600 text-white rounded-full font-semibold";
    }
    return "";
  }}
/>

      </div>

      {/* Upcoming Events */}
      <div className="flex-1">
        <h3 className="text-lg font-semibold text-slate-800 mb-3">
          Upcoming Events
        </h3>

        <div className="space-y-3 overflow-y-auto pr-1">
          {events.map((event) => (
            <div
              key={event.id}
              className="rounded-xl border border-slate-200 p-4 hover:shadow-sm transition"
            >
              <div className="flex items-start justify-between">
                <h4 className="font-semibold text-slate-700">
                  {event.title}
                </h4>
                <span className="flex items-center gap-1 text-xs text-slate-500 bg-slate-100 px-2 py-1 rounded-full">
                  <Clock className="w-3 h-3" />
                  {event.time}
                </span>
              </div>

              <p className="mt-2 text-sm text-slate-600 leading-relaxed">
                {event.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default EventCalendar;
