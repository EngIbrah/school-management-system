// components/Menu.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  User,
  UserRound,
  GraduationCap,
  BookOpen,
  School,
  BookMarked,
  FileText,
  ClipboardList,
  BarChart3,
  CalendarCheck2,
  Calendar,
  MessageSquare,
  Megaphone,
  Settings,
  LogOut,
} from "lucide-react";
import { LucideIcon } from "lucide-react";

// Assume you have a way to get current user role (e.g., from context or auth)
// For demo, replace with your actual role logic
const role = "admin"; // "teacher" | "student" | "parent"

interface MenuItem {
  label: string;
  href: string;
  icon: LucideIcon;
  visible: string[];
}

const menuItems: { title: string; items: MenuItem[] }[] = [
  {
    title: "MENU",
    items: [
      { label: "Home", href: "/admin", icon: Home, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Teachers", href: "/list/teachers", icon: User, visible: ["admin", "teacher"] },
      { label: "Students", href: "/list/students", icon: GraduationCap, visible: ["admin", "teacher"] },
      { label: "Parents", href: "/list/parents", icon: UserRound, visible: ["admin", "teacher"] },
      { label: "Subjects", href: "/list/subjects", icon: BookOpen, visible: ["admin"] },
      { label: "Classes", href: "/list/classes", icon: School, visible: ["admin", "teacher"] },
      { label: "Lessons", href: "/list/lessons", icon: BookMarked, visible: ["admin", "teacher"] },
      { label: "Exams", href: "/list/exams", icon: FileText, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Assignments", href: "/list/assignments", icon: ClipboardList, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Results", href: "/list/results", icon: BarChart3, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Attendance", href: "/list/attendance", icon: CalendarCheck2, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Events", href: "/list/events", icon: Calendar, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Messages", href: "/list/messages", icon: MessageSquare, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Announcements", href: "/list/announcements", icon: Megaphone, visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
  {
    title: "OTHER",
    items: [
      { label: "Profile", href: "/profile", icon: Users, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Settings", href: "/settings", icon: Settings, visible: ["admin", "teacher", "student", "parent"] },
      { label: "Logout", href: "/logout", icon: LogOut, visible: ["admin", "teacher", "student", "parent"] },
    ],
  },
];

const Menu = () => {
  const pathname = usePathname();

  return (
    <div className="mt-4 text-sm">
      {menuItems.map((section) => (
        <div className="mb-6" key={section.title}>
          <span className="hidden lg:block text-slate-500 font-semibold text-xs uppercase tracking-wider px-6 mb-2">
            {section.title}
          </span>
          <nav className="space-y-1">
            {section.items
              .filter((item) => item.visible.includes(role))
              .map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;

                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`flex items-center gap-4 px-6 py-3 rounded-lg transition-all duration-200 group
                      ${isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-slate-400 hover:bg-slate-800 hover:text-white"
                      }`}
                  >
                    <Icon
                      className={`w-5 h-5 transition-colors
                        ${isActive ? "text-white" : "group-hover:text-white"}
                      `}
                      strokeWidth={2}
                    />
                    <span className="hidden lg:block font-medium">{item.label}</span>
                  </Link>
                );
              })}
          </nav>
        </div>
      ))}
    </div>
  );
};

export default Menu;