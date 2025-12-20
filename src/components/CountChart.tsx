"use client";

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { Users } from "lucide-react";

const data = [
  { name: "Boys", value: 1234, percentage: 55 },
  { name: "Girls", value: 1234, percentage: 45 },
];

const COLORS = ["#2563eb", "#ec4899"];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white shadow-lg rounded-xl px-4 py-2 border">
        <p className="font-semibold text-slate-700">{payload[0].name}</p>
        <p className="text-sm text-slate-500">
          {payload[0].value} students ({payload[0].payload.percentage}%)
        </p>
      </div>
    );
  }
  return null;
};

const CountChart = () => {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <div className="bg-white rounded-2xl shadow-md p-6 h-[380px] flex flex-col">
      <h2 className="text-xl font-semibold text-slate-800 mb-2">
        Students Gender
      </h2>

      {/* CHART AREA */}
      <div className="relative h-[220px] flex items-center justify-center">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={55}
              outerRadius={85}
              dataKey="value"
              paddingAngle={4}
              stroke="none"
            >
              {data.map((_, index) => (
                <Cell key={index} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip content={<CustomTooltip />} />
          </PieChart>
        </ResponsiveContainer>

        {/* CENTER CONTENT */}
        <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
          <Users className="w-8 h-8 text-slate-400 mb-1" />
          <p className="text-2xl font-bold text-slate-800">
            {total.toLocaleString()}
          </p>
          <p className="text-xs text-slate-500">Total Students</p>
        </div>
      </div>

      {/* LEGEND */}
      <div className="flex justify-around mt-4">
        {data.map((item, index) => (
          <div key={item.name} className="flex items-center gap-2">
            <span
              className="w-3 h-3 rounded-full"
              style={{ backgroundColor: COLORS[index] }}
            />
            <span className="text-sm text-slate-600">
              {item.name} ({item.percentage}%)
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountChart;
