"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, subjectsData } from "@/lib/data";

type Subject = {
  id: number;
  name: string;
  teachers: string[];
};

const columns = [
  { header: "Subject Name", accessor: "name" },
  { header: "Teachers", accessor: "teachers", className: "hidden md:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const SubjectListPage = () => {
  const tableData = subjectsData.map((item: Subject) => ({
    name: item.name,
    teachers: item.teachers.join(", "),
    actions: (
      <div className="flex items-center gap-2">
        {role === "admin" && (
          <>
            <FormModal table="subject" type="update" data={item} />
            <FormModal table="subject" type="delete" id={item.id} />
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
          All Subjects
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
            {role === "admin" && <FormModal table="subject" type="create" />}
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

export default SubjectListPage;
