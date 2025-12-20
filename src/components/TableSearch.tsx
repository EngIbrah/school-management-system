"use client";

import { Search } from "lucide-react";

const TableSearch = () => {
  return (
    <div className="flex items-center gap-2 text-sm rounded-full ring-1 ring-slate-300 px-3 py-1 bg-white w-full md:w-auto transition focus-within:ring-blue-400">
      <Search className="w-4 h-4 text-slate-400" />
      <input
        type="text"
        placeholder="Search..."
        className="w-[200px] md:w-auto p-1 bg-transparent outline-none text-slate-700 placeholder:text-slate-400"
      />
    </div>
  );
};

export default TableSearch;
