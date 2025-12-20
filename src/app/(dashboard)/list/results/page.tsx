"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { resultsData, role } from "@/lib/data";

type Result = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  student: string;
  type: "exam" | "assignment";
  date: string;
  score: number;
};

const columns = [
  { header: "Subject Name", accessor: "subject" },
  { header: "Student", accessor: "student" },
  { header: "Score", accessor: "score", className: "hidden md:table-cell" },
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
  { header: "Class", accessor: "class", className: "hidden md:table-cell" },
  { header: "Date", accessor: "date", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const ResultListPage = () => {
  // Map resultsData to table format
  const tableData: Record<string, any>[] = resultsData.map((item: Result) => ({
    subject: item.subject,
    student: item.student,
    score: item.score,
    teacher: item.teacher,
    class: item.class,
    date: item.date,
    actions: (
      <div className="flex items-center gap-2">
        {(role === "admin" || role === "teacher") && (
          <>
            <FormModal table="result" type="update" data={item} />
            <FormModal table="result" type="delete" id={item.id} />
          </>
        )}
      </div>
    ),
  }));

  return (
    <div className="bg-white p-4 rounded-2xl flex-1 m-4 mt-0">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <h1 className="text-lg font-semibold text-slate-800 hidden md:block">
          All Results
        </h1>
        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />
          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              Filter
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              Sort
            </button>
            {(role === "admin" || role === "teacher") && (
              <FormModal table="result" type="create" />
            )}
          </div>
        </div>
      </div>

      {/* Table */}
      <Table columns={columns} data={tableData} />

      {/* Pagination */}
      <Pagination />
    </div>
  );
};

export default ResultListPage;
