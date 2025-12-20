"use client";
import Image from "next/image";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const data = [
  { name: "Completed", value: 92, fill: "#4F9CF9" }, // blue
  { name: "Remaining", value: 8, fill: "#E5E5E5" },  // light gray
];

const COLORS = data.map(d => d.fill);

const Performance = () => {
  return (
    <div className="bg-white p-4 rounded-xl shadow-md h-80 relative flex flex-col justify-center">
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-xl font-semibold text-gray-800">Performance</h1>
        <Image src="/moreDark.png" alt="More" width={16} height={16} />
      </div>

      {/* Semi-circle Chart */}
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            startAngle={180}
            endAngle={0}        // semi-circle
            innerRadius="70%"
            outerRadius="90%"
            cornerRadius={50}   // move cornerRadius here
            paddingAngle={2}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>

      {/* Center Info */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
        <h1 className="text-3xl font-bold text-gray-900">9.6</h1>
        <p className="text-xs text-gray-400">of 10 max LTS</p>
      </div>

      {/* Footer Label */}
      <h2 className="font-medium absolute bottom-4 left-0 right-0 text-center text-gray-500 text-sm">
        1st Semester - 2nd Semester
      </h2>
    </div>
  );
};

export default Performance;
