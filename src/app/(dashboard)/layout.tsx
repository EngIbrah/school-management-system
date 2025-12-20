// app/(dashboard)/layout.tsx
import Menu from "@/components/Menu";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { School } from "lucide-react"; // Or: GraduationCap, BookOpen

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-screen flex bg-slate-50">
      {/* Sidebar - Dark, Fixed Width, Scrollable Menu */}
      <aside className="w-50 bg-slate-900 text-white flex flex-col hidden md:flex overflow-hidden">
        <Link
          href="/"
          className="flex items-center gap-4 p-6 border-b border-slate-800 hover:bg-slate-800 transition"
        >
          <div className="p-3 bg-blue-600 rounded-xl">
            <School className="w-5 h-5 text-white" strokeWidth={2.5} />
          </div>
          <span className="text-2xl font-bold">ShoolMate</span> {/* Change to your chosen name */}
        </Link>
        <div className="flex-1 overflow-y-auto py-4">
          <Menu />
        </div>
      </aside>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-6 lg:p-8">
          {children}
        </main>
      </div>
    </div>
  );
}