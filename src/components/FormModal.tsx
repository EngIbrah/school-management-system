"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { Plus, Edit, Trash2, X } from "lucide-react";

// Dynamic form imports
const TeacherForm = dynamic(() => import("./forms/TeacherForm"), { loading: () => <h1>Loading...</h1> });
const StudentForm = dynamic(() => import("./forms/StudentForm"), { loading: () => <h1>Loading...</h1> });

const forms: {
  [key: string]: (type: "create" | "update", data?: any) => JSX.Element;
} = {
  teacher: (type, data) => <TeacherForm type={type} data={data} />,
  student: (type, data) => <StudentForm type={type} data={data} />,
};

interface FormModalProps {
  table:
    | "teacher"
    | "student"
    | "parent"
    | "subject"
    | "class"
    | "lesson"
    | "exam"
    | "assignment"
    | "result"
    | "attendance"
    | "event"
    | "announcement";
  type: "create" | "update" | "delete";
  data?: any;
  id?: number;
}

const FormModal = ({ table, type, data, id }: FormModalProps) => {
  const size = type === "create" ? "w-8 h-8" : "w-7 h-7";
  const bgColor =
    type === "create"
      ? "bg-lamaYellow"
      : type === "update"
      ? "bg-lamaSky"
      : "bg-lamaPurple";

  const [open, setOpen] = useState(false);

  const FormContent = () => {
    if (type === "delete" && id) {
      return (
        <form className="p-4 flex flex-col gap-4">
          <span className="text-center font-medium text-slate-800">
            All data will be lost. Are you sure you want to delete this {table}?
          </span>
          <button className="bg-red-700 text-white py-2 px-4 rounded-md w-max self-center hover:bg-red-600 transition">
            Delete
          </button>
        </form>
      );
    }
    if (type === "create" || type === "update") {
      return forms[table](type, data);
    }
    return <span className="text-red-500">Form not found!</span>;
  };

  const renderIcon = () => {
    if (type === "create") return <Plus className="w-4 h-4 text-white" />;
    if (type === "update") return <Edit className="w-4 h-4 text-white" />;
    return <Trash2 className="w-4 h-4 text-white" />;
  };

  return (
    <>
      <button
        className={`${size} flex items-center justify-center rounded-full ${bgColor} hover:opacity-90 transition`}
        onClick={() => setOpen(true)}
      >
        {renderIcon()}
      </button>

      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-60 z-50 flex items-center justify-center p-4">
          <div className="bg-white p-6 rounded-2xl relative w-full max-w-2xl">
            <FormContent />
            <button
              className="absolute top-4 right-4 text-slate-500 hover:text-slate-700 transition"
              onClick={() => setOpen(false)}
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FormModal;
