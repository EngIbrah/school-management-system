"use client";

type Column = {
  header: string;
  accessor: string;
  className?: string;
};

interface TableProps {
  columns: Column[];
  data: Record<string, any>[];
  renderRow?: (item: any) => JSX.Element; // optional custom row renderer
}

const Table = ({ columns, data, renderRow }: TableProps) => {
  return (
    <div className="overflow-x-auto bg-white rounded-2xl shadow-md p-4">
      <table className="w-full min-w-[600px] border-collapse">
        <thead>
          <tr className="text-left text-sm text-slate-500 border-b border-slate-200">
            {columns.map((col) => (
              <th key={col.accessor} className={`py-3 px-4 font-medium ${col.className ?? ""}`}>
                {col.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, idx) =>
            renderRow ? renderRow(item) : (
              <tr key={idx} className="hover:bg-slate-50 transition cursor-pointer">
                {columns.map((col) => (
                  <td key={col.accessor} className={`py-3 px-4 text-slate-700 ${col.className ?? ""}`}>
                    {item[col.accessor]}
                  </td>
                ))}
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
