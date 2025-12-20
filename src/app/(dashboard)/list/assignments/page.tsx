"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { assignmentsData, role } from "@/lib/data";
import { Edit2, Trash2, Filter, Repeat, Plus } from "lucide-react";

type Assignment = {
  id: number;
  subject: string;
  class: string;
  teacher: string;
  dueDate: string;
};

const columns = [
  { header: "Subject Name", accessor: "subject" },
  { header: "Class", accessor: "class" },
  { header: "Teacher", accessor: "teacher", className: "hidden md:table-cell" },
  { header: "Due Date", accessor: "dueDate", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const AssignmentListPage = () => {
  const tableData = assignmentsData.map((item: Assignment) => ({
    subject: item.subject,
    class: item.class,
    teacher: item.teacher,
    dueDate: item.dueDate,
    actions: (
      <div className="flex items-center gap-2">
        {(role === "admin" || role === "teacher") && (
          <>
            <FormModal table="assignment" type="update" data={item} />
            <FormModal table="assignment" type="delete" id={item.id} />
          </>
        )}
      </div>
    ),
  }));

  return (
    <div className="bg-white p-4 rounded-2xl flex-1 m-4 mt-0">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <h1 className="text-lg font-semibold text-slate-800 hidden md:block">All Assignments</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              <Filter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              <Repeat className="w-4 h-4" />
            </button>
            {(role === "admin" || role === "teacher") && <FormModal table="assignment" type="create" />}
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

export default AssignmentListPage;
