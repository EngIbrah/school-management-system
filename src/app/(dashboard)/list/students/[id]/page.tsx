import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import Performance from "@/components/Performance";
import Link from "next/link";
import { User, Calendar, Mail, Phone, Heart, BookOpen } from "lucide-react"; // lucide icons

const student = {
  name: "Cameron Moran",
  email: "user@gmail.com",
  phone: "+1 234 567",
  bloodType: "A+",
  dob: "January 2025",
  grade: "6th",
  class: "6A",
  lessons: 18,
};

const SingleStudentPage = () => {
  const smallCards = [
    { icon: BookOpen, value: "90%", label: "Attendance" },
    { icon: User, value: student.grade, label: "Grade" },
    { icon: Calendar, value: student.lessons, label: "Lessons" },
    { icon: User, value: student.class, label: "Class" },
  ];

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3 flex items-center justify-center bg-gray-200 rounded-full h-36 w-36">
              <User className="w-24 h-24 text-gray-500" />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <h1 className="text-xl font-semibold">{student.name}</h1>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>{student.bloodType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{student.dob}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{student.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{student.phone}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SMALL CARDS */}
          <div className="flex-1 flex gap-4 justify-between flex-wrap">
            {smallCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <div
                  key={i}
                  className="bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]"
                >
                  <Icon className="w-6 h-6 text-gray-500" />
                  <div>
                    <h1 className="text-xl font-semibold">{card.value}</h1>
                    <span className="text-sm text-gray-400">{card.label}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-4 bg-white rounded-md p-4 h-[800px]">
          <h1>Student&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            {[
              { label: "Student's Lessons", color: "bg-lamaSkyLight" },
              { label: "Student's Teachers", color: "bg-lamaPurpleLight" },
              { label: "Student's Exams", color: "bg-pink-50" },
              { label: "Student's Assignments", color: "bg-lamaSkyLight" },
              { label: "Student's Results", color: "bg-lamaYellowLight" },
            ].map((link, i) => (
              <Link key={i} className={`p-3 rounded-md ${link.color}`} href="/">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
        <Performance />
        <Announcements />
      </div>
    </div>
  );
};

export default SingleStudentPage;
