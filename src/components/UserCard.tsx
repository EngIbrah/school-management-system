// components/UserCard.tsx
"use client";

import { GraduationCap, User, UserRound, Users } from "lucide-react";

const icons = {
  student: GraduationCap,
  teacher: User,
  parent: UserRound,
  staff: Users,
};

const UserCard = ({ type }: { type: "student" | "teacher" | "parent" | "staff" }) => {
  const Icon = icons[type];

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 flex-1 min-w-[130px] border border-slate-100">
      <div className="flex justify-between items-center mb-4">
        <span className="text-xs font-medium text-green-600 bg-green-100 px-3 py-1 rounded-full">
          2024/25
        </span>
        <Icon className="w-5 h-5 text-slate-400" />
      </div>
      <h1 className="text-3xl font-bold text-slate-800 my-2">1,234</h1>
      <h2 className="capitalize text-sm font-medium text-slate-500 flex items-center gap-2">
        <Icon className="w-4 h-4" />
        {type}s
      </h2>
    </div>
  );
};

export default UserCard;