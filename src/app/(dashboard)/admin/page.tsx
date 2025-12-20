import Announcements from "@/components/Announcements";
import AttendanceChart from "@/components/AttendanceChart";
import CountChart from "@/components/CountChart";
import EventCalendar from "@/components/EventCalendar";
import FinanceChart from "@/components/FinanceChart";
import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
      
      {/* LEFT SIDE – MAIN DASHBOARD */}
      <div className="xl:col-span-2 space-y-6">

        {/* USER STATS */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>

        {/* CHARTS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <CountChart />
          <div className="lg:col-span-2">
            <AttendanceChart />
          </div>
        </div>

        {/* FINANCE */}
        <FinanceChart />

      </div>

      {/* RIGHT SIDEBAR */}
      <div className="space-y-6">
        <EventCalendar />
        <Announcements />
      </div>

    </div>
  );
};

export default AdminPage;
