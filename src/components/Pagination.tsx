"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

const Pagination = () => {
  return (
    <div className="flex items-center justify-between px-4 py-3 text-slate-500">
      
      {/* Previous */}
      <button
        disabled
        className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium
                   disabled:opacity-40 disabled:cursor-not-allowed hover:bg-slate-200 transition"
      >
        <ChevronLeft className="w-4 h-4" />
        Prev
      </button>

      {/* Pages */}
      <div className="flex items-center gap-1 text-sm">
        <button className="min-w-[32px] h-8 rounded-lg bg-blue-600 text-white font-semibold">
          1
        </button>

        <button className="min-w-[32px] h-8 rounded-lg hover:bg-slate-100 transition">
          2
        </button>

        <button className="min-w-[32px] h-8 rounded-lg hover:bg-slate-100 transition">
          3
        </button>

        <span className="px-2 text-slate-400">…</span>

        <button className="min-w-[32px] h-8 rounded-lg hover:bg-slate-100 transition">
          10
        </button>
      </div>

      {/* Next */}
      <button
        className="flex items-center gap-1 rounded-lg border border-slate-200 bg-slate-100 px-3 py-2 text-sm font-medium
                   hover:bg-slate-200 transition"
      >
        Next
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Pagination;
