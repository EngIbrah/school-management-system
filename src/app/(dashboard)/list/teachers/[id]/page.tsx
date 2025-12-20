import Announcements from "@/components/Announcements";
import BigCalendar from "@/components/BigCalender";
import FormModal from "@/components/FormModal";
import Performance from "@/components/Performance";
import { role } from "@/lib/data";
import Link from "next/link";
import { User, Calendar, Mail, Phone, Heart, BookOpen } from "lucide-react"; // lucide icons

const teacher = {
  id: 1,
  name: "Leonard Snyder",
  email: "user@gmail.com",
  phone: "+1 234 567",
  bloodType: "A+",
  dob: "January 2025",
  address: "1234 Main St, Anytown, USA",
};

const SingleTeacherPage = () => {
  const smallCards = [
    { icon: BookOpen, value: "90%", label: "Attendance" },
    { icon: User, value: "2", label: "Branches" },
    { icon: BookOpen, value: "6", label: "Lessons" },
    { icon: User, value: "6", label: "Classes" },
  ];

  return (
    <div className="flex-1 p-4 flex flex-col gap-4 xl:flex-row">
      {/* LEFT */}
      <div className="w-full xl:w-2/3">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row gap-4">
          {/* USER INFO CARD */}
          <div className="bg-lamaSky py-6 px-4 rounded-md flex-1 flex gap-4">
            <div className="w-1/3 flex items-center justify-center bg-gray-200 rounded-full h-36 ">
              <User className="w-24 h-24 text-gray-500" />
            </div>
            <div className="w-2/3 flex flex-col justify-between gap-4">
              <div className="flex items-center gap-4">
                <h1 className="text-xl font-semibold">{teacher.name}</h1>
                {role === "admin" && (
                  <FormModal
                    table="teacher"
                    type="update"
                    data={teacher}
                  />
                )}
              </div>
              <p className="text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur.
              </p>
              <div className="flex items-center justify-between gap-2 flex-wrap text-xs font-medium">
                <div className="flex items-center gap-2">
                  <Heart className="w-4 h-4 text-red-500" />
                  <span>{teacher.bloodType}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <span>{teacher.dob}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>{teacher.email}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>{teacher.phone}</span>
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
          <h1>Teacher&apos;s Schedule</h1>
          <BigCalendar />
        </div>
      </div>

      {/* RIGHT */}
      <div className="w-full xl:w-1/3 flex flex-col gap-4">
        <div className="bg-white p-4 rounded-md">
          <h1 className="text-xl font-semibold">Shortcuts</h1>
          <div className="mt-4 flex gap-4 flex-wrap text-xs text-gray-500">
            {[
              { label: "Teacher's Classes", color: "bg-lamaSkyLight" },
              { label: "Teacher's Students", color: "bg-lamaPurpleLight" },
              { label: "Teacher's Lessons", color: "bg-lamaYellowLight" },
              { label: "Teacher's Exams", color: "bg-pink-50" },
              { label: "Teacher's Assignments", color: "bg-lamaSkyLight" },
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

export default SingleTeacherPage;
