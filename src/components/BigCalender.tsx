"use client";

import { Calendar, momentLocalizer, Views, View } from "react-big-calendar";
import moment from "moment";
import { useState } from "react";
import { calendarEvents } from "@/lib/calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";

const localizer = momentLocalizer(moment);

const BigCalendar = () => {
  const [view, setView] = useState<View>(Views.WORK_WEEK);

  const handleOnChangeView = (selectedView: View) => {
    setView(selectedView);
  };

  return (
    <div className="h-[900px] p-2 bg-white rounded-2xl shadow-md">
      <Calendar
        localizer={localizer}
        events={calendarEvents}
        startAccessor="start"
        endAccessor="end"
        views={[Views.WORK_WEEK, Views.DAY]}
        view={view}
        onView={handleOnChangeView}
        style={{ height: "100%" }}
        min={new Date(2025, 1, 0, 8, 0, 0)}
        max={new Date(2025, 1, 0, 17, 0, 0)}
        eventPropGetter={() => ({
          style: {
            backgroundColor: "#4f46e5",
            color: "white",
            fontSize: "0.9rem",
            borderRadius: "6px",
            border: "none",
          },
        })}
      />
    </div>
  );
};

export default BigCalendar;
