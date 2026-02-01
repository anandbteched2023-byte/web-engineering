import React from "react";

export default function StatCard({ title, value, icon, color = "bg-gray-200" }) {
  return (
    <div className={`p-4 rounded-xl text-white flex items-center gap-4 ${color}`}>
      <div className="p-3 bg-white/20 rounded-lg">{icon}</div>
      <div>
        <div className="text-sm">{title}</div>
        <div className="text-2xl font-bold">{value}</div>
      </div>
    </div>
  );
}
