"use client";

import FormModal from "@/components/FormModal";
import Pagination from "@/components/Pagination";
import Table from "@/components/Table";
import TableSearch from "@/components/TableSearch";
import { role, teachersData } from "@/lib/data";
import Link from "next/link";
import { Eye, Filter, Plus, Repeat } from "lucide-react";

import Image from "next/image";

type Teacher = {
  id: number;
  teacherId: string;
  name: string;
  email?: string;
  photo: string;
  phone: string;
  subjects: string[];
  classes: string[];
  address: string;
};

const columns = [
  { header: "Name", accessor: "name" },
  { header: "Teacher ID", accessor: "teacherId", className: "hidden md:table-cell" },
  { header: "Subjects", accessor: "subjects", className: "hidden md:table-cell" },
  { header: "Classes", accessor: "classes", className: "hidden md:table-cell" },
  { header: "Phone", accessor: "phone", className: "hidden lg:table-cell" },
  { header: "Address", accessor: "address", className: "hidden lg:table-cell" },
  { header: "Actions", accessor: "actions" },
];

const TeacherListPage = () => {
  const tableData = teachersData.map((item: Teacher) => ({
    name: (
      <div className="flex items-center gap-3">
       <img
          src={item.photo}
          alt={item.name}
          className="w-10 h-10 rounded-full object-cover"
        />

        <div className="flex flex-col">
          <span className="font-semibold text-slate-800">{item.name}</span>
          <span className="text-xs text-slate-500">{item.email}</span>
        </div>
      </div>
    ),
    teacherId: item.teacherId,
    subjects: item.subjects.join(", "),
    classes: item.classes.join(", "),
    phone: item.phone,
    address: item.address,
    actions: (
  <div className="flex items-center gap-2">
    <Link href={`/list/teachers/${item.id}`}>
      <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaSky hover:bg-blue-200 transition">
        <Eye className="w-4 h-4 text-blue-900" />  {/* Dark blue icon */}
      </button>
    </Link>
    {role === "admin" && <FormModal table="teacher" type="delete" id={item.id} />}
  </div>
),
  }));

  return (
    <div className="bg-white p-4 rounded-2xl flex-1 m-4 mt-0">
      {/* Top Bar */}
      <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4">
        <h1 className="text-lg font-semibold text-slate-800 hidden md:block">All Teachers</h1>

        <div className="flex flex-col md:flex-row items-center gap-4 w-full md:w-auto">
          <TableSearch />

          <div className="flex items-center gap-2">
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              <Filter className="w-4 h-4" />
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-full bg-lamaYellow text-white hover:bg-yellow-400 transition">
              <Repeat className="w-4 h-4" />
            </button>
            {role === "admin"  && <FormModal table="teacher" type="create" />}
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

export default TeacherListPage;
