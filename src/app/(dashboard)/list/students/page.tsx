"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, studentsData } from "@/lib/data";
import Link from "next/link";
import { Eye, Trash2, Filter, Plus, Repeat } from "lucide-react";

type Student = {
  id: number;
  studentId: string;
  name: string;
  email?: string;
  photo: string;
  phone?: string;
  grade: number;
  class: string;
  address: string;
};

const columns = [
  { header: "Info", accessor: "info" },
  { header: "Student ID", accessor: "studentId", className: "hidden md:table-cell" },
  { header: "Grade", accessor: "grade", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const StudentListPage = () => {
  // Map studentsData to table-compatible format
  const tableData = studentsData.map((item: Student) => ({
    info: (
      <div className="flex items-center gap-3">
        <img
          src={item.photo}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <span className="font-semibold text-slate-800">{item.name}</span>
          <span className="text-xs text-slate-500">{item.class}</span>
        </div>
      </div>
    ),
    studentId: item.studentId,
    grade: item.grade,
    phone: item.phone || "-",
    address: item.address || "-",
    actions: (
      <div className="flex items-center gap-2">
        <Link href={`/list/students/${item.id}`}>
           <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:bg-blue-200 transition">
           <Eye className="w-4 h-4 text-blue-900" />  {/* Dark blue icon */}
          </button>
        </Link>
        {role === "admin" && <FormModal table="student" type="delete" id={item.id} />}
      </div>
    ),
  }));

  return (
    <div className="bg-white p-4 rounded-2xl flex-1 m-4 mt-0">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <h1 className="text-lg font-semibold text-slate-800 hidden md:block">All Students</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              <Filter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              <Repeat className="w-4 h-4" />
            </button>
            {role === "admin" && <FormModal table="student" type="create" />}
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

export default StudentListPage;
